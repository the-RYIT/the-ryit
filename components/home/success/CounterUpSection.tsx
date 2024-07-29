"use client";

import { ntr, manrope } from "@/utils/fonts/fonts";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const CounterUpSection = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div className="section-right-part sm:pr-8 flex flex-col justify-center grow" ref={ref}>
      <div className="countUp">
        <h4 className={ntr.className}>Students</h4>
        <h1 className={`${manrope.className} sm:w-[18rem] w-[10rem]`}>
          {inView && <CountUp start={0} end={200} duration={2} />}+
        </h1>
        <span></span>
      </div>
      <div className="countUp">
        <h4 className={ntr.className}>Teachers</h4>
        <h1 className={`${manrope.className} sm:w-[16rem] w-[9rem]`}>
          {inView && <CountUp start={0} end={100} duration={2} />}+
        </h1>
        <span></span>
      </div>
      <div className="countUp">
        <h4 className={ntr.className}>Awards</h4>
        <h1 className={`${manrope.className} sm:w-[13rem] w-[8rem]`}>
          {inView && <CountUp start={0} end={50} duration={2} />}+
        </h1>
        <span></span>
      </div>
    </div>
  );
};

export default CounterUpSection;
