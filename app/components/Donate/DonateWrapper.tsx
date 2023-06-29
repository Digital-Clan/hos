"use client";
import { useState } from "react";
import Form from "./Form";
import Hero from "./Hero";

export default function DonateWrapper() {
  const [isFinal, setIsFinal] = useState(false);

  const handleIsFinal = () => {
    setIsFinal(!isFinal);
  };

  return (
    <>
      <Hero isFinal={isFinal} />
      <Form isFinal={isFinal} handleIsFinal={handleIsFinal} />
    </>
  );
}
