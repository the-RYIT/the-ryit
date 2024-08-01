export const clientCredential = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION || "2024-07-21",
};

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const giveDate = (date: string): string => {
  const dateObject = new Date(date);
  const day = dateObject.getUTCDate(); // Day of the month
  const monthIndex = dateObject.getUTCMonth(); // Month index (0-based)
  const year = dateObject.getUTCFullYear();
  const formattedDate = `${monthNames[monthIndex]} ${day}, ${year}`;

  return formattedDate;
};
export const giveTime = (date: string): string => {
  const dateObject = new Date(date);
  const hours = dateObject.getUTCHours().toString().padStart(2, "0");
  const minutes = dateObject.getUTCMinutes().toString().padStart(2, "0");

  const formattedTime = `${hours}:${minutes}`;

  return formattedTime;
};
