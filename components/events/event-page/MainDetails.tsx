import Image from "next/image";
import "./event-page-style.scss";

import { ntr, manrope } from "@/utils/fonts/fonts";
import { eventImageArray, eventNameArray } from "@/utils/assets";

const MainDetails = ({ eventId }: { eventId: string }) => {
  if (Number(eventId) > 3) {
    eventId = "0";
  }
  return (
    <section className="px-0">
      <div className="upper-part flex sm:flex-row flex-col gap-8">
        <div className="event-image sm:w-1/3 w-full shrink-0">
          <Image
            src={eventImageArray[Number(eventId)]}
            alt="Event-image"
            style={{
              borderRadius: "10px",
            }}
          />
        </div>
        <div className={`event-details grow ${manrope.className}`}>
          <h1 className={ntr.className}>{eventNameArray[Number(eventId)]} - @_@</h1>
          <h3 id="event-date">
            30-23-32 <span> | </span> 12:00 PM
          </h3>
          <h3>
            <span>Address :</span>
            jonathon Lake , someStreet23, AnotherDistrict
          </h3>
          <h3>
            <span>Host :</span> SomeOrganizer
          </h3>
          <p>
            <span>Description :</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facere culpa nihil
            provident cumque deserunt minus molestias qui laudantium dolore Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Possimus eos libero magnam maxime molestias, est
            similique quos nesciunt consectetur velit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti eum esse nisi. Nam, ex? Officiis, ducimus sed? Dolores,
            voluptatem eligendi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainDetails;
