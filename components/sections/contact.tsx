'use client';

import { useState, FormEvent } from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Contato</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Sua mensagem aqui..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                {isSubmitted ? '✓ Enviado com sucesso!' : 'Enviar'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:murilo@example.com"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      murilo@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-foreground">Localização</p>
                    <p className="text-muted-foreground">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-accent rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-accent rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
