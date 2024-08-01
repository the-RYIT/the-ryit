import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { NBlog } from "@/utils/types";
import Link from "next/link";
import { clientCredential } from "@/utils/assets";
import { giveDate } from "@/utils/assets";
const BlogCard = ({ blogData }: { blogData: NBlog.InfBlog }) => {
  const { projectId, dataset } = clientCredential;
  if (!projectId || !dataset) {
    throw new Error("Sanity credentials are missing");
  }

  const builder = imageUrlBuilder({
    projectId: projectId,
    dataset: dataset,
  });

  return (
    <div className="flex flex-col blog-card shadow-sm gap-6">
      <div className="blog-card-image">
        <Image
          src={builder.image(blogData.mainImage).url()}
          alt="Blog Image"
          width={360}
          height={228}
          placeholder="blur"
          blurDataURL={builder.image(blogData.mainImage).url()}
        />
      </div>
      <div className="blog-card-details flex flex-col gap-4">
        <div className="blog-date-author">
          <span className="uppercase">{giveDate(blogData.publishedAt)}</span>{" "}
          <p className="inline"> — </p> {blogData.author}
        </div>
        <h1 className="blog-title">{blogData.title}</h1>
        <div className="blog-card-button">
          <button className="read-more-button ">
            <Link href={`/blogs/${blogData.slug.current}`}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
