import GallerySection from "@/components/events/event-page/GallerySection";
import MainDetails from "@/components/events/event-page/MainDetails";
import { clientCredential } from "@/utils/assets";
import { ntr } from "@/utils/fonts/fonts";
import { createClient } from "next-sanity";
import { NEventItem } from "@/utils/types";
const page = async ({ params }: { params: { eventId: string } }) => {
  const { apiVersion, projectId, dataset } = clientCredential;
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  });

  const query = `*[_type == "event" && slug.current == '${params.eventId}'][0]{title,eventDescription,eventDate,eventOrganizerContact,eventVenue, eventShootImages,eventOrganizer,eventImage{asset->{url}}}`;
  const eventDetails: NEventItem.fullEventDetails = await client.fetch(query);

  const mainDetails: NEventItem.mainDetails = {
    eventImage: eventDetails.eventImage,
    title: eventDetails.title,
    eventDescription: eventDetails.eventDescription,
    eventDate: eventDetails.eventDate,
    eventOrganizerContact: eventDetails.eventOrganizerContact,
    eventVenue: eventDetails.eventVenue,
  };

  return (
    <main className="mainSection">
      <MainDetails eventTextDetails={mainDetails} />
      {eventDetails.eventShootImages ? (
        <>
          <h1 className={`mt-12 text-7xl ${ntr.className}`}>Memorable Moments</h1>
          <GallerySection allImages={eventDetails.eventShootImages} />
        </>
      ) : (
        <></>
      )}
    </main>
  );
};

export default page;
