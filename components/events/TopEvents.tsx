import { manrope, ntr } from "@/utils/fonts/fonts";
import "./styles.scss";
import EventItem from "./EventItem";

const TopEvents = () => {
  return (
    <section className="event-top-section flex gap-20 sm:flex-row flex-col pr-4">
      <div className="top-event-section-left-part lg:w-[28%] sm:w-[30%]">
        <h1 className={`event-head-title ${ntr.className}`}> UpComing Events</h1>
        <h5>Your Chances for gain new knowledge is Here - </h5>
      </div>

      <div className="top-event-section-right-part grow flex max-sm:flex-col gap-7">
        <h1 className={`event-blank-text sm:text-7xl text-6xl ${manrope.className}`}>
          Not Any Soon
        </h1>

        {/* <EventItem id={1} />
        <EventItem id={2} />
        <EventItem id={0} /> */}
      </div>
    </section>
  );
};

export default TopEvents;
