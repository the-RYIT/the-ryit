import Image from "next/image";
import { clientCredential } from "@/utils/assets";
import imageUrlBuilder from "@sanity/image-url";
import { NEventItem } from "@/utils/types";
const GallerySection = ({ allImages }: any) => {
  const { projectId, dataset } = clientCredential;
  if (!projectId || !dataset) {
    throw new Error("Sanity credentials are missing");
  }

  const builder = imageUrlBuilder({
    projectId: projectId,
    dataset: dataset,
  });

  return (
    <section className="mt-12 flex flex-wrap gap-8 px-0 pb-4">
      {allImages.map((image: NEventItem.IImageObj) => (
        <div className="event-exhibit-image" key={image._key}>
          <Image
            src={builder.image(image).url()}
            alt="E"
            width={200}
            height={0}
            placeholder="blur"
            blurDataURL={builder.image(image).url()}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      ))}
    </section>
  );
};

export default GallerySection;
