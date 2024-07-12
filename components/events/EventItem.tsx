import Image from "next/image";
import "./styles.scss";
import img from "@/public/assets/images/event/temp-robo.webp";
import LinkBtn from "../LinkBtn/LinkBtn";

const EventItem = () => {
  return (
    <div className="event-card-item relative">
      <Image src={img} alt="Event Image" />
      <div className="event-details">
        <div className="sub-details">
          <h5>
            30-23-32 <span> | </span> 12:00 PM
          </h5>
        </div>
        <h1 className="event-title">
          Robotic War <span> | </span> 2021
        </h1>
        <LinkBtn title="View Details" link="/event/23" extraClass="event-btn" />{" "}
      </div>
    </div>
  );
};

export default EventItem;
