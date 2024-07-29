"use client";
import { useState, useRef } from "react";
import Image from "next/image";

import arrow from "@/public/assets/icons/down-arrow-icon.svg";
import { manrope } from "@/utils/fonts/fonts";

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ = ({ answer, question }: FAQProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-container accordion-item">
      <div className="faq-content ">
        <div
          className={`accordion-header flex items-center relative ${
            isOpen ? "accordion-open" : ""
          }`}
          onClick={toggleAccordion}
        >
          <h2>{question}</h2>
          <span></span>
          <Image src={arrow} alt="Arrow" />
        </div>
        <div
          className="accordion-content"
          ref={contentRef}
          style={{
            maxHeight:
              isOpen && contentRef.current ? `${contentRef.current?.scrollHeight + 35}px` : "0",
            padding: isOpen ? "1.2rem 1rem" : "0px 1rem",
            borderColor: isOpen ? "var(--button-bg)" : "transparent",
          }}
        >
          <p className={manrope.className}>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
