export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Sobre</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Sou um desenvolvedor web apaixonado por criar soluções inovadoras e escaláveis. 
              Com experiência em desenvolvimento full-stack, tenho trabalhado em diversos projetos 
              que vão desde aplicações web simples até sistemas complexos com arquitetura robusta.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Minha abordagem combina as melhores práticas de engenharia de software com um 
              foco em experiência do usuário. Acredito que o código bem escrito deve ser 
              legível, mantível e performático.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Quando não estou programando, gosto de explorar novas tecnologias, contribuir 
              para projetos open-source e compartilhar conhecimento com a comunidade.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-40 h-40 bg-gradient-to-br from-primary to-primary/60 rounded-lg shadow-lg flex items-center justify-center text-primary-foreground text-4xl font-bold">
              MO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
