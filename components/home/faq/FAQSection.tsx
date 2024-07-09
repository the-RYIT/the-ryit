import { ntr } from "@/utils/fonts/fonts";
import FAQ from "./FAQ";
import "./style.scss";

const FAQSection = () => {
  return (
    <section className="faq-section py-8">
      <h1 className={`text-7xl mb-7 ${ntr.className}`}>FAQ - Frequent Ask Question</h1>

      <div className="flex flex-col gap-3">
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
      </div>
    </section>
  );
};

export default FAQSection;
