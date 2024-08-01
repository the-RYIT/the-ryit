import Image from "next/image";
import "./event-page-style.scss";
import { ntr, manrope } from "@/utils/fonts/fonts";
import { giveDate, giveTime } from "@/utils/assets";
import { NEventItem } from "@/utils/types";
import { clientCredential } from "@/utils/assets";
import imageUrlBuilder from "@sanity/image-url";

// Icon imports
import locationIcon from "@/public/assets/icons/event/location-icon.svg";
import callIcon from "@/public/assets/icons/event/call-icon.svg";
import peopleIcon from "@/public/assets/icons/event/people-icon.svg";
import calenderIcon from "@/public/assets/icons/event/calender-icon.svg";

const MainDetails = ({ eventTextDetails }: { eventTextDetails: NEventItem.mainDetails }) => {
  const { projectId, dataset } = clientCredential;
  if (!projectId || !dataset) {
    throw new Error("Sanity credentials are missing");
  }

  const builder = imageUrlBuilder({
    projectId: projectId,
    dataset: dataset,
  });
  return (
    <section className="px-0">
      <div className="upper-part flex sm:flex-row flex-col gap-8">
        <div className="event-image sm:w-1/3 w-full shrink-0 sm:max-h-[60vh]">
          <Image
            src={builder.image(eventTextDetails.eventImage).url()}
            alt="Event-image"
            width={200}
            height={0}
            placeholder="blur"
            blurDataURL={builder.image(eventTextDetails.eventImage).url()}
            style={{
              borderRadius: "10px",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className={`event-details grow ${manrope.className}`}>
          <h1 className={ntr.className}>{eventTextDetails.title}</h1>
          <h3 id="event-date">
            <Image src={calenderIcon} alt="Calender Icon" width={19} />
            {giveDate(eventTextDetails.eventDate)} <span> | </span>
            {giveTime(eventTextDetails.eventDate)}
          </h3>
          <h3>
            <Image src={locationIcon} alt="Location Icon" />
            {eventTextDetails.eventVenue}
          </h3>
          <h3>
            <Image src={peopleIcon} alt="people" />
            {eventTextDetails.eventOrganizerContact}
          </h3>
          <h3>
            <Image src={callIcon} alt="people" /> {eventTextDetails.eventOrganizerContact}
          </h3>
          <p>{eventTextDetails.eventDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default MainDetails;
