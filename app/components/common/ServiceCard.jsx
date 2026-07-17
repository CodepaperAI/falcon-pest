import { ArrowRight, Bug } from "lucide-react";
import { Card } from "./Card";

export function ServiceCard({ service, icon: Icon, onClick }) {
  const IconComponent = Icon ?? Bug;

  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-transparent border-0 p-0 cursor-pointer"
    >
      <Card className="group h-full transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
          <IconComponent size={24} />
        </div>
        <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#BDBDBD]">{service.description}</p>
        <div className="mt-6 inline-flex items-center text-sm font-semibold text-[#D4AF37] transition group-hover:translate-x-1">
          Learn More <ArrowRight size={16} className="ml-2" />
        </div>
      </Card>
    </button>
  );
}
