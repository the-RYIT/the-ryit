import { ntr, manrope } from "@/utils/fonts/fonts";
const CounterUpSection = () => {
  return (
    <div className="section-right-part sm:pr-8 flex flex-col justify-center grow">
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
  );
};

export default CounterUpSection;
