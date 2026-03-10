// api/submit-form.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust this in production
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, company, phone, position, honeypot } = req.body;

  // 1. Spam Protection (Honeypot)
  // If the hidden 'honeypot' field is filled, it's likely a bot.
  if (honeypot) {
    console.warn(`Spam detected: Honeypot field filled by ${email}`);
    // Pretend success to fool the bot
    return res.status(200).json({ success: true, message: 'Registro recibido.' });
  }

  // 2. Validation
  if (!name || !email || !company) {
    return res.status(400).json({ error: 'Faltan campos requeridos.' });
  }

  // 3. Email Configuration
  // These variables must be set in Vercel Project Settings > Environment Variables
  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = process.env.SMTP_PORT || 587;
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'ignacio@aistana.cl';

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('Missing SMTP configuration');
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT == 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // 4. Send Email
    const mailOptions = {
      from: `"Technical Saloon Landing" <${SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Nuevo Registro Technical Saloon: ${name} - ${company}`,
      text: `
        Nuevo registro para Technical Saloon - 18 de Marzo:
        
        Nombre: ${name}
        Empresa: ${company}
        Email: ${email}
        Teléfono: ${phone || 'No indicado'}
        Cargo: ${position || 'No indicado'}
        
        Fecha de registro: ${new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' })}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #E60012;">Nuevo Registro - Technical Saloon</h2>
          <p><strong>Evento:</strong> Technical Saloon Huawei - 18 de Marzo</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; width: 120px;"><strong>Nombre:</strong></td>
              <td>${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Empresa:</strong></td>
              <td>${company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Email:</strong></td>
              <td><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Teléfono:</strong></td>
              <td>${phone || 'No indicado'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Cargo:</strong></td>
              <td>${position || 'No indicado'}</td>
            </tr>
          </table>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #999;">
            Este correo fue enviado automáticamente desde la landing page del evento.
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.messageId}`);

    return res.status(200).json({ success: true, message: 'Registro exitoso' });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Error al enviar el correo. Intente más tarde.' });
  }
}
