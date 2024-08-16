import ExtraDetails from "@/components/gallery/ExtraDetails";
import TopSection from "@/components/gallery/TopSection";

const page = () => {
  return (
    <main
      className="mainSection"
      style={{
        padding: "calc(var(--nav-height) + 1rem + var(--float-promo-height)) 0rem 0 0rem",
      }}
    >
      <TopSection />
      <ExtraDetails />
    </main>
  );
};

export default page;
