import GallerySection from "@/components/events/event-page/GallerySection";
import MainDetails from "@/components/events/event-page/MainDetails";

const page = ({ params }: { params: { eventId: string } }) => {
  return (
    <main className="mainSection">
      <MainDetails eventId={params.eventId} />
      <GallerySection eventId={params.eventId} />
    </main>
  );
};

export default page;
