import { DollarSign, FileText, Heart, ShoppingCart, MapPin, Truck } from "lucide-react";

const benefits = [
  { icon: DollarSign, title: "Salário Atrativo", desc: "A partir de R$ 8.000,00 mensais" },
  { icon: FileText, title: "Registro CLT", desc: "Carteira assinada com todos os direitos" },
  { icon: Heart, title: "Plano de Saúde", desc: "Convênio médico completo para você e família" },
  { icon: ShoppingCart, title: "Vale Alimentação", desc: "Benefício mensal para alimentação" },
  { icon: MapPin, title: "Rotas Definidas", desc: "Rotas planejadas e organizadas" },
  { icon: Truck, title: "Frota Moderna", desc: "Caminhões novos e bem conservados" },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-center text-foreground mb-4">
          Benefícios da Vaga
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Oferecemos um pacote completo de benefícios para você e sua família.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-accent/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <b.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
