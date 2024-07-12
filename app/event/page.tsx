import AllEvents from "@/components/events/AllEvents";
import TopEvents from "@/components/events/TopEvents";

const page = () => {
  return (
    <main className="w-screen ">
      <TopEvents />

      <AllEvents />
    </main>
  );
};

export default page;
