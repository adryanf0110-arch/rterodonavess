import { CheckCircle } from "lucide-react";

const requirements = [
  "CNH categoria E",
  "Experiência comprovada com carreta",
  "Curso MOPP atualizado",
  "Disponibilidade para viagens",
  "Boa conduta no trânsito",
];

const RequirementsSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-center text-foreground mb-4">
          Requisitos
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">
          Confira os requisitos necessários para se candidatar.
        </p>
        <ul className="space-y-5">
          {requirements.map((req) => (
            <li
              key={req}
              className="flex items-center gap-4 bg-card rounded-xl px-6 py-5 shadow-sm border border-border"
            >
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="text-foreground font-medium text-lg">{req}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RequirementsSection;
