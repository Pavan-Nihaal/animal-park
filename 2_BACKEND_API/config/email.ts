import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '';
const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || '';

sgMail.setApiKey(SENDGRID_API_KEY);

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    await sgMail.send({
      to,
      from: SENDGRID_FROM_EMAIL,
      subject,
      html,
    });
    console.log('✓ Email sent to', to);
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
};
