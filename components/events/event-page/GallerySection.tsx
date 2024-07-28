import Image from "next/image";

import { eventImageArray } from "@/utils/assets";
eventImageArray;
const GallerySection = ({ eventId }: { eventId: string }) => {
  return (
    <section className="mt-12 flex flex-wrap gap-8 px-0 pb-4">
      <div className="event-exhibit-image">
        <Image placeholder="blur" src={eventImageArray[Number(eventId)]} alt="E" />
      </div>
      <div className="event-exhibit-image">
        <Image placeholder="blur" src={eventImageArray[Number(eventId)]} alt="E" />
      </div>
      <div className="event-exhibit-image">
        <Image placeholder="blur" src={eventImageArray[Number(eventId)]} alt="E" />
      </div>
      <div className="event-exhibit-image">
        <Image placeholder="blur" src={eventImageArray[Number(eventId)]} alt="E" />
      </div>
    </section>
  );
};

export default GallerySection;
