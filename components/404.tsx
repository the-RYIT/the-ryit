import Image from "next/image";
import img from "@/public/assets/images/404.png";

const NotFound = () => {
  return (
    <main className="flex items-center justify-center h-screen space-y-4">
      <Image src={img} alt="404" width={500} height={500} />
    </main>
  );
};

export default NotFound;
