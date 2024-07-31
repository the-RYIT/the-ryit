import event1 from "@/public/assets/images/event/temp-code.webp";
import event2 from "@/public/assets/images/event/temp-hack.webp";
import event3 from "@/public/assets/images/event/temp-robo.webp";
import { StaticImageData } from "next/image";

export const eventImageArray: StaticImageData[] = [event1, event2, event3];

export const eventNameArray: string[] = ["Coding Event", "Hackathon |2023", "Robotic War | 2021"];

export const clientCredential = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION || "2024-07-21",
};
