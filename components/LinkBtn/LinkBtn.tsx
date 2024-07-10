import { manrope } from "@/utils/fonts/fonts";
import Link from "next/link";

import global from "@/app/globals.module.scss";
const LinkBtn = ({
  link,
  title,
  extraClass,
}: {
  link: string;
  title: string;
  extraClass?: string;
}) => {
  return (
    <button className={`${manrope.className} ${global.linkBtn} ${extraClass}`}>
      <Link href={"/contact"}> {title}</Link>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m18 8l4 4m0 0l-4 4m4-4H2"
        />
      </svg>
    </button>
  );
};

export default LinkBtn;
