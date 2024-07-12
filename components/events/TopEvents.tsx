import { ntr } from "@/utils/fonts/fonts";
import "./styles.scss";

const TopEvents = () => {
  return (
    <section className="event-top-section flex gap-20">
      <div className="top-event-section-left-part w-1/4">
        <h1 className={`event-head-title ${ntr.className}`}> UpComing Events</h1>
        <h5>Your Chances for gain new knowledge is Here - </h5>
      </div>

      <div className="top-event-section-right-part grow flex gap-7"></div>
    </section>
  );
};

export default TopEvents;
