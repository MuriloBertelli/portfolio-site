// netlify/functions/send-email.js
const { Resend } = require('resend');

exports.handler = async (event) => {
  // Só aceita POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Lê as variáveis de ambiente configuradas na Netlify
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.EMAIL_FROM; // ex: onboarding@resend.dev
  const toEmail = process.env.EMAIL_TO;     // ex: mrlbertelli@gmail.com

  if (!apiKey || !fromEmail || !toEmail) {
    console.error('Variáveis RESEND_API_KEY / EMAIL_FROM / EMAIL_TO não configuradas');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server configuration error' }),
    };
  }

  const resend = new Resend(apiKey);

  try {
    const { name, email, message } = JSON.parse(event.body || '{}');

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing fields' }),
      };
    }

    // Envia o e-mail usando o Resend
    const response = await resend.emails.send({
      from: `Portfolio <${fromEmail}>`,
      to: toEmail,
      reply_to: email, // se responder o e-mail, vai para quem preencheu o formulário
      subject: `Nova mensagem do portfólio de ${name}`,
      text: `
Nome: ${name}
Email: ${email}

Mensagem:
${message}
      `,
      html: `
        <h2>Nova mensagem do portfólio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    console.log('Resend response:', response);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('Erro ao enviar e-mail via Resend:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
