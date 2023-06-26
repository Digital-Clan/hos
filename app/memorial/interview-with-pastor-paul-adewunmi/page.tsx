/* eslint-disable @next/next/no-img-element */
import Interview from "./Interview";
import { getInterview } from "@/sanity/lib/util";

export default async function Page() {
  const interview = await getInterview();

  return <Interview image={interview.image} interview={interview.interview} />;
}
