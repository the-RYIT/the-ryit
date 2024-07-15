import GallerySection from "@/components/events/event-page/GallerySection";
import MainDetails from "@/components/events/event-page/MainDetails";
import { ntr } from "@/utils/fonts/fonts";

const page = ({ params }: { params: { eventId: string } }) => {
  return (
    <main className="mainSection">
      <MainDetails eventId={params.eventId} />

      <h1 className={`mt-12 text-7xl ${ntr.className}`}>Memorable Moments</h1>
      <GallerySection eventId={params.eventId} />
    </main>
  );
};

export default page;
