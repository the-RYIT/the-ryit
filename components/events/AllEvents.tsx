import { manrope, ntr } from "@/utils/fonts/fonts";
import "./styles.scss";
import EventItem from "./EventItem";
import { clientCredential } from "@/utils/assets";
import { createClient } from "next-sanity";
import { NEventItem } from "@/utils/types";

const AllEvents = async () => {
  // Sanity Client create a request to fetch all events
  const { apiVersion, projectId, dataset } = clientCredential;
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
  });
  const query = `*[_type == "event" && upcomingEvent != true]{title,slug,eventDate,eventImage{asset->{url}}}`;
  const allEvents: NEventItem.EventItemProps[] = await client.fetch(query);

  return (
    <section className="all-event-section py-16 flex sm:flex-row flex-col gap-20">
      <div className="all-event-section-left-part sm:w-1/4 w-full">
        <h1 className={`event-head-title ${ntr.className}`}> All Event </h1>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, in?</h4>
      </div>
      <div className="all-event-section-right-part grow flex flex-wrap gap-7">
        {allEvents.length > 0 ? (
          allEvents.map((event: NEventItem.EventItemProps) => (
            <EventItem key={event.slug.current} eventDetails={event} />
          ))
        ) : (
          <h1 className={`event-blank-text sm:text-7xl text-6xl ${manrope.className}`}>
            No Events
          </h1>
        )}
      </div>
    </section>
  );
};

export default AllEvents;
