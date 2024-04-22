/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(request:Request){
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { from , subject, text } = await request.json();

    // Create a nodemailer transporter
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const transporter = nodemailer.createTransport({
      /* configure your email transport settings */
    });

    try {
      // Send email
      await transporter.sendMail({
        from,
        to:'elatmaniyassir3@gmail.com',
        subject,
        text,
      });

      return NextResponse.json({ message: 'Email sent successfully.' });
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ message: 'Error sending email.' }, { status: 500 });
    }
  
}