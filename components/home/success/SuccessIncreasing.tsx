import { ntr, manrope } from "@/utils/fonts/fonts";
import "./style.scss";
import LinkBtn from "@/components/LinkBtn/LinkBtn";

const SuccessIncreasing = () => {
  return (
    <section className="countUp-section w-full md:h-[90vh] flex sm:flex-row flex-col">
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

      <div className="section-right-part pr-8 flex flex-col justify-center grow">
        <div className="countUp">
          <h4 className={ntr.className}>Students</h4>
          <h1 className={manrope.className}>200+</h1>
          <span></span>
        </div>
        <div className="countUp">
          <h4 className={ntr.className}>Teachers</h4>
          <h1 className={manrope.className}>100+</h1>
          <span></span>
        </div>
        <div className="countUp">
          <h4 className={ntr.className}>Awards</h4>
          <h1 className={manrope.className}>50+</h1>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default SuccessIncreasing;
