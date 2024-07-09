import { ntr, manrope } from "@/utils/fonts/fonts";
import "./style.scss";
import LinkBtn from "@/components/LinkBtn/LinkBtn";
import CounterUpSection from "./CounterUpSection";

const SuccessIncreasing = () => {
  return (
    <section className="countUp-section w-full md:h-[90vh] flex md:flex-row flex-col gap-6   max-md:px-8">
      <div className="section-left-part sm:w-2/5 flex flex-col justify-center">
        <h1 className={ntr.className}>
          Success
          <br />
          <span>Sprints</span>
        </h1>

        <h4 className={manrope.className}>
          Explore our hub of peak achievements, where success stories flourish and opportunities
          expand with each passing day.
        </h4>
        <LinkBtn title="Explore" link="/contacts" extraClass="countUp-section-linkBtn" />
      </div>

      <CounterUpSection />
    </section>
  );
};

export default SuccessIncreasing;
