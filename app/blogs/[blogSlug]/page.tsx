import img from "@/public/assets/images/blog/blog-copy.png";
import Image from "next/image";
const page = ({ params }: { params: { blogSlug: string } }) => {
  return (
    <main className="mainSection flex flex-col gap-4 items-center">
      <div
        className="blog-image"
        style={{
          width: "50%",
        }}
      >
        <Image
          src={img}
          placeholder="blur"
          alt="Blog Image"
          style={{
            borderRadius: "10px",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="blog-details max-sm:px-4 xl:max-w-screen-md pb-8">
        <h1 className="blog-title text-5xl">{params.blogSlug.split("%20").join(" ")}</h1>
        <div className="blog-date-author mt-3 text-gray-600">
          May 20, 2021 <span> -- </span> Mr.Sudo
        </div>
        <p className=" max-sm:px-4 sm:mt-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nulla, aperiam dolorum
          voluptatum sequi repudiandae rem eos explicabo officiis laboriosam quidem vitae mollitia
          numquam culpa magni voluptates nemo, expedita corrupti earum cum vel fuga optio. Harum
          praesentium, illo possimus excepturi veritatis nostrum alias nisi, labore suscipit nam
          fugit molestiae, eum laborum autem! Officiis quibusdam impedit, nesciunt repellat
          doloribus mollitia, dolorem harum nisi eius corrupti ad quasi ducimus, dolores cumque!
          Quibusdam nisi laboriosam nobis quisquam totam, obcaecati fugit ducimus odio autem
          sapiente deleniti nulla aut natus tenetur repellat qui odit ipsam, dolorem magni
          laudantium! Ad harum reprehenderit fuga minus, debitis expedita!
        </p>
      </div>
    </main>
  );
};

export default page;
