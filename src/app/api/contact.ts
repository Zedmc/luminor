"use server";

import nodemailer from "nodemailer";

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "zie.mc@hotmail.com", // Your email
        pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
      },
    });

    // Email content
    const mailOptions = {
      from: "zie.mc@hotmail.com",
      to: "zie.mc@hotmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
