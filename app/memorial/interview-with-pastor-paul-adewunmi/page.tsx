/* eslint-disable @next/next/no-img-element */
import Interview from "./Interview";
import { getInterview } from "@/sanity/lib/util";

export const metadata = {
  title: "An Interview with Pastor Paul Adewunmi - Hour of Solution",
  description:
    "We are an inter-denominational group of God's people who believe in the saving power of Jesus Christ. Our mission is to raise people who are part of God's End Time Army.",
};

export const revalidate = 30;

export default async function Page() {
  const interview = await getInterview();

  return <Interview image={interview.image} interview={interview.interview} />;
}
