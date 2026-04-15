import { Hero } from "@/components/Hero/Hero";
import { ProductGrid } from "@/components/ProductGrid/ProductGrid";
import { Events } from "@/components/Events/Events";
import { LeadForm } from "@/components/LeadForm/LeadForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductGrid />
      <Events />
      <LeadForm />
    </main>
  );
}
