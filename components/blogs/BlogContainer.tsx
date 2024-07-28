import "./blog-style.scss";
import BlogCard from "./blogCard/BlogCard";

const BlogContainer = () => {
  return (
    <section className="mt-16 pb-8 flex flex-wrap gap-8 max-sm:px-2">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </section>
  );
};

export default BlogContainer;
