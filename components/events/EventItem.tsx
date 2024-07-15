import Image from "next/image";
import "./styles.scss";

import LinkBtn from "../LinkBtn/LinkBtn";
import { eventImageArray, eventNameArray } from "@/utils/assets";

const EventItem = ({ id }: { id: number }) => {
  return (
    <div className="event-card-item relative">
      <Image src={eventImageArray[id]} alt="Event Image" />
      <div className="event-details">
        <div className="sub-details">
          <h5>
            30-23-32 <span> | </span> 12:00 PM
          </h5>
        </div>
        <h1 className="event-title">{eventNameArray[id]}</h1>
        <LinkBtn title="View Details" link={`/event/${id}`} extraClass="event-btn" />{" "}
      </div>
    </div>
  );
};

export default EventItem;
