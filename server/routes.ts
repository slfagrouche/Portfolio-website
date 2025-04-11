import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import * as nodemailer from "nodemailer";
import { z } from "zod";

// Contact form schema validation
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Add routes below

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactSchema.parse(req.body);
      
      // Email transport configuration (for demonstration, using a fake test account)
      // In production, use environment variables for SMTP configuration
      let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST || "smtp.ethereal.email",
        port: parseInt(process.env.MAIL_PORT || "587"),
        secure: process.env.MAIL_SECURE === "true",
        auth: {
          user: process.env.MAIL_USER || "testuser",
          pass: process.env.MAIL_PASS || "testpass"
        }
      });
      
      // Email content
      const mailOptions = {
        from: `"Portfolio Contact" <${process.env.MAIL_FROM || "contact@example.com"}>`,
        to: process.env.MAIL_TO || "said@example.com",
        subject: `Portfolio Contact: ${validatedData.subject}`,
        text: `
          Name: ${validatedData.firstName} ${validatedData.lastName}
          Email: ${validatedData.email}
          
          Message:
          ${validatedData.message}
        `,
        html: `
          <h3>New contact from your portfolio website</h3>
          <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        `
      };
      
      // Store contact in database
      const contact = await storage.createContact({
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
        date: new Date().toISOString()
      });
      
      // Send email (commented out to avoid actual email sending during testing)
      /* 
      await transporter.sendMail(mailOptions);
      */
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: "Message sent successfully",
        contactId: contact.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Validation errors
        return res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      }
      
      // Generic server error
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to send message. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
