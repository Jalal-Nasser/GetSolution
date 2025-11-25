import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validationResult = insertContactInquirySchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ 
          error: validationError.message,
          details: validationResult.error.issues
        });
      }

      const inquiry = await storage.createContactInquiry(validationResult.data);
      
      return res.status(201).json({ 
        success: true,
        message: "Thank you for your inquiry. We will get back to you within 24 hours.",
        inquiry
      });
    } catch (error) {
      console.error("Error creating contact inquiry:", error);
      return res.status(500).json({ 
        error: "Failed to submit inquiry. Please try again later." 
      });
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const inquiries = await storage.getAllContactInquiries();
      return res.json(inquiries);
    } catch (error) {
      console.error("Error fetching contact inquiries:", error);
      return res.status(500).json({ 
        error: "Failed to fetch inquiries" 
      });
    }
  });

  app.get("/api/contact/:id", async (req, res) => {
    try {
      const inquiry = await storage.getContactInquiry(req.params.id);
      
      if (!inquiry) {
        return res.status(404).json({ 
          error: "Inquiry not found" 
        });
      }
      
      return res.json(inquiry);
    } catch (error) {
      console.error("Error fetching contact inquiry:", error);
      return res.status(500).json({ 
        error: "Failed to fetch inquiry" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
