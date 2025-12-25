import { type ContactInquiry, type InsertContactInquiry, contactInquiries } from "@shared/schema";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";

export interface IStorage {
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiry(id: string): Promise<ContactInquiry | undefined>;
  getAllContactInquiries(): Promise<ContactInquiry[]>;
}

export class DrizzleStorage implements IStorage {
  private db: ReturnType<typeof drizzle>;

  constructor(databaseUrl: string) {
    const client = neon(databaseUrl);
    this.db = drizzle(client);
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const [inquiry] = await this.db
      .insert(contactInquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }

  async getContactInquiry(id: string): Promise<ContactInquiry | undefined> {
    const [inquiry] = await this.db
      .select()
      .from(contactInquiries)
      .where(eq(contactInquiries.id, id))
      .limit(1);
    return inquiry;
  }

  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return await this.db
      .select()
      .from(contactInquiries)
      .orderBy(contactInquiries.createdAt);
  }
}

export const storage = process.env.DATABASE_URL
  ? new DrizzleStorage(process.env.DATABASE_URL)
  : null;
