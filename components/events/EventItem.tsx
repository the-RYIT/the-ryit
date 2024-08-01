import Image from "next/image";
import "./styles.scss";
import { clientCredential } from "@/utils/assets";
import imageUrlBuilder from "@sanity/image-url";
import LinkBtn from "../LinkBtn/LinkBtn";
import { giveTime } from "@/utils/assets";

import { NEventItem } from "@/utils/types";

const EventItem = ({ eventDetails }: { eventDetails: NEventItem.EventItemProps }) => {
  const { projectId, dataset } = clientCredential;
  if (!projectId || !dataset) {
    throw new Error("Sanity credentials are missing");
  }

  const builder = imageUrlBuilder({
    projectId: projectId,
    dataset: dataset,
  });

  return (
    <div className="event-card-item relative">
      <Image
        src={builder.image(eventDetails.eventImage).url()}
        alt="Event Image"
        width={200}
        height={0}
        placeholder="blur"
        blurDataURL={builder.image(eventDetails.eventImage).url()}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div className="event-details">
        <div className="sub-details">
          <h5>
            {new Date(eventDetails.eventDate).toISOString().split("T")[0]} <span> | </span>{" "}
            {giveTime(eventDetails.eventDate)}
          </h5>
        </div>
        <h1 className="event-title">{eventDetails.title}</h1>
        <LinkBtn
          title="View Details"
          link={`/event/${eventDetails.slug.current}`}
          extraClass="event-btn"
        />{" "}
      </div>
    </div>
  );
};

export default EventItem;
