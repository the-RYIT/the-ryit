import React from "react";
import "./CatagoryContainer.scss";
import { ntr } from "@/utils/fonts/fonts";
import Image from "next/image";

interface CategoryProps {
  title: string;
  about: string;
  svg: string;
}

export const CatagoryContainer: React.FC<CategoryProps> = ({
  title,
  about,
  svg,
}) => {
  return (
    <div className="cc-conatiner">
      <div className="cc-logo">
        <div className="cc-image">
          <Image src={svg} alt={title} width={64} height={64} />
        </div>
      </div>
      <div className={`cc-title ${ntr.className}`}>
        <p>{title}</p>
      </div>
      <div className="cc-about">
        <p>{about}</p>
      </div>
    </div>
  );
};
