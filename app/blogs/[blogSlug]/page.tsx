import img from "@/public/assets/images/blog/blog-copy.png";
import { clientCredential } from "@/utils/assets";
import { createClient } from "next-sanity";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import PortableText from "react-portable-text";

import { NBlog } from "@/utils/types";
import { manrope } from "@/utils/fonts/fonts";

const page = async ({ params }: { params: { blogSlug: string } }) => {
  const { apiVersion, projectId, dataset } = clientCredential;
  if (!projectId || !dataset) {
    throw new Error("Sanity credentials are missing");
  }

  const builder = imageUrlBuilder({
    projectId: projectId,
    dataset: dataset,
  });
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    // useCdn: true,
  });

  const query = `*[_type == "blog" && slug.current == '${params.blogSlug}'][0]{title, slug, author,blogContent, publishedAt, mainImage{asset->{url}}}`;
  const blog: NBlog.InfFullBlog = await client.fetch(query);
  console.log(blog.blogContent);
  return (
    <main className="mainSection flex flex-col gap-4 items-center">
      <div className="blog-image relative xl:w-[760px] sm:h-[400px]">
        <Image
          src={builder.image(blog.mainImage).url()}
          alt="Blog Image"
          width={200}
          height={0}
          placeholder="blur"
          blurDataURL={builder.image(blog.mainImage).url()}
          style={{
            borderRadius: "10px",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="blog-details max-sm:px-4 xl:max-w-screen-md pb-8">
        <h1 className="blog-title text-5xl">{blog.title}</h1>
        <div className="blog-date-author mt-3 text-gray-600">
          {blog.publishedAt} <span> -- </span> {blog.author}
        </div>

        <article className="Solo-blog-content max-sm:px-4 sm:mt-8" style={manrope.style}>
          <PortableText content={blog.blogContent} projectId={projectId} dataset={dataset} />
        </article>
      </div>
    </main>
  );
};

export default page;
