import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );

export const handler = async (event) => {
  // Só aceita POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

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
    const { name, email, message } = body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing fields" }),
      };
    }

    const TO_EMAIL = process.env.EMAIL_TO || "mrlbertelli@gmail.com";
    const FROM_EMAIL = process.env.EMAIL_FROM || "onboarding@resend.dev";

    const result = await resend.emails.send({
      from: `Portfólio <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `Nova mensagem do portfólio de ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
      html: `
        <h2>Nova mensagem do portfólio</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "Email service error" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
