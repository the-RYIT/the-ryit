import { manrope, ntr } from "@/utils/fonts/fonts";
import "./styles.scss";
import EventItem from "./EventItem";
import { clientCredential } from "@/utils/assets";
import { createClient } from "next-sanity";
import { NEventItem } from "@/utils/types";
const TopEvents = async () => {
  const { apiVersion, projectId, dataset } = clientCredential;
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  });
  const query = `*[_type == "event" && upcomingEvent == true]{title, slug, eventDate, eventImage{asset->{url}}}`;
  const upComingEvents: NEventItem.EventItemProps[] = await client.fetch(query);

  return (
    <section className="event-top-section flex gap-20 sm:flex-row flex-col pr-4">
      <div className="top-event-section-left-part lg:w-[28%] sm:w-[30%]">
        <h1 className={`event-head-title ${ntr.className}`}> UpComing Events</h1>
        <h5>Your Chances for gain new knowledge is Here - </h5>
      </div>

      <div className="top-event-section-right-part grow flex flex-wrap max-sm:flex-col gap-7">
        {upComingEvents.length > 0 ? (
          upComingEvents.map((event: NEventItem.EventItemProps) => (
            <EventItem key={event.slug.current} eventDetails={event} />
          ))
        ) : (
          <h1 className={`event-blank-text sm:text-7xl text-6xl ${manrope.className}`}>
            No Event Any Soon !_!
          </h1>
        )}
      </div>
    </section>
  );
};

export default TopEvents;
