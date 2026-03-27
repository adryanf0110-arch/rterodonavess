import { Download } from "lucide-react";

const CTASection = () => {
  return (
    <section id="inscreva-se" className="py-24 px-4 bg-primary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-foreground mb-6">
          Não perca essa oportunidade!
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10">
          Clique no botão abaixo para se inscrever e dar o próximo passo na sua carreira.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-accent text-accent-foreground font-heading font-bold text-lg hover:brightness-110 transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          <Download className="w-5 h-5" />
          Inscreva-se Agora
        </a>
      </div>
    </section>
  );
};

export default CTASection;
