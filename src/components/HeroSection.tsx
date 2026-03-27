import heroImg from "@/assets/hero-truck.jpg";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Caminhão na estrada"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-primary/75" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <span className="inline-block px-6 py-2 rounded-full bg-accent text-accent-foreground font-heading font-bold text-sm tracking-widest uppercase mb-6">
          Vagas Abertas 2025
        </span>
        <h1 className="font-heading font-extrabold text-5xl md:text-7xl text-primary-foreground leading-tight mb-6">
          Motorista de Caminhão
        </h1>
        <p className="text-primary-foreground/85 text-lg md:text-xl mb-4 leading-relaxed">
          Venha fazer parte da nossa equipe — uma das maiores transportadoras do Brasil.
        </p>
        <p className="font-heading font-bold text-2xl md:text-3xl text-accent mb-10">
          Salário a partir de R$ 8.000
        </p>
        <a
          href="#inscreva-se"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-accent text-accent-foreground font-heading font-bold text-lg hover:brightness-110 transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          <Download className="w-5 h-5" />
          Inscreva-se Agora
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
