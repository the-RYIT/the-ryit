import { ntr } from "@/utils/fonts/fonts";
import "./styles.scss";
import EventItem from "./EventItem";

const AllEvents = () => {
  return (
    <section className="all-event-section py-16 flex sm:flex-row flex-col gap-20">
      <div className="all-event-section-left-part sm:w-1/4 w-full">
        <h1 className={`event-head-title ${ntr.className}`}> All Event </h1>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, in?</h4>
      </div>
      <div className="all-event-section-right-part grow flex flex-wrap gap-7">
        <EventItem id={0} />
        <EventItem id={1} />s
        <EventItem id={2} />
        <EventItem id={1} />
        <EventItem id={0} />
      </div>
    </section>
  );
};

export default AllEvents;
