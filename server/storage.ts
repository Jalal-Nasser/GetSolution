import { type ContactInquiry, type InsertContactInquiry } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiry(id: string): Promise<ContactInquiry | undefined>;
  getAllContactInquiries(): Promise<ContactInquiry[]>;
}

export class MemStorage implements IStorage {
  private contactInquiries: Map<string, ContactInquiry>;

  constructor() {
    this.contactInquiries = new Map();
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const createdAt = new Date();
    const inquiry: ContactInquiry = { ...insertInquiry, id, createdAt };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getContactInquiry(id: string): Promise<ContactInquiry | undefined> {
    return this.contactInquiries.get(id);
  }

  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
