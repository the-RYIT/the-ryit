import Image from "next/image";

import img from "@/public/assets/images/blog/blog-copy.png";
import Link from "next/link";
const BlogCard = () => {
  return (
    <div className="flex flex-col blog-card shadow-sm gap-6">
      <div className="blog-card-image">
        <Image src={img} alt="Blog Image" placeholder="blur" />
      </div>
      <div className="blog-card-details flex flex-col gap-4">
        <div className="blog-date-author">
          May 20, 2021 <span> -- </span> Mr.Sudo
        </div>
        <h1 className="blog-title">How to start a blog in 2021: A step-by-step guide</h1>
        <div className="blog-card-button">
          <button className="read-more-button ">
            <Link href={`/blogs/${"How to start a blog in 2021"}`}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
