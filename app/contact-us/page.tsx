import { Hero, Form } from "../components/Contact";

export const metadata = {
  title: "Contact Us - Hour of Solution",
  description:
    "We are an inter-denominational group of God's people who believe in the saving power of Jesus Christ. Our mission is to raise people who are part of God's End Time Army.",
};

export default function Contact() {
  return (
    <main>
      <Hero />
      <Form />
    </main>
  );
}
