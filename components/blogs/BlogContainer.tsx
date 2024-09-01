import { createClient } from "next-sanity";
import "./blog-style.scss";
import BlogCard from "./blogCard/BlogCard";
import { NBlog } from "@/utils/types.d";
import { clientCredential } from "@/utils/assets";

const BlogContainer = async () => {
  const { apiVersion, projectId, dataset } = clientCredential;
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  });
  const query = `*[_type == "blog"]{title,slug,author,publishedAt,mainImage{asset->{url}}}`;
  const allBlogs: NBlog.InfBlog[] = await client.fetch(query);

  return (
    <section className="mt-16 pb-8 flex flex-wrap gap-8 max-sm:px-2">
      {allBlogs.map((blog: NBlog.InfBlog) => (
        <BlogCard key={blog.slug.current} blogData={blog} />
      ))}
    </section>
  );
};

export default BlogContainer;
