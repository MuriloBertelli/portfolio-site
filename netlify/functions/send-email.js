
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  // Só aceita POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }
  
  const body = JSON.parse(event.body || "{}")

  // Honeypot: se esse campo vier preenchido, tratamos como bot
  if (body.company) {
    console.warn("Honeypot acionado - BOT detectado", {
      // log minimalista, sem dados sensíveis demais
      timestamp: new Date().toISOString(),
    });

    // Responde 200 para o bot achar que deu tudo certo,
    // mas NÃO envia email e não processa mais nada.
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || '{}');

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing fields' }),
      };
    }

    const TO_EMAIL = process.env.EMAIL_TO || 'mrlbertelli@gmail.com';
    const FROM_EMAIL = process.env.EMAIL_FROM || 'onboarding@resend.dev';

    const result = await resend.emails.send({
      from: `Portfólio <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `Nova mensagem do portfólio de ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
      html: `
        <h2>Nova mensagem do portfólio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log('Resend result:', result);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('Erro ao enviar e-mail:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
