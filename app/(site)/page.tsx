import CtaContato from "@/components/CtaContato";
import Depoimentos from "@/components/Depoimentos";
import Diferenciais from "@/components/Diferenciais";
import Hero from "@/components/Hero";
import Servicos from "@/components/Servicos";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Servicos />
      <Diferenciais />
      <Depoimentos />
      <CtaContato />
    </>
  );
}
