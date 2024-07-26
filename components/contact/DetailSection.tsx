"use client";

import { ntr, manrope } from "@/utils/fonts/fonts";
import "@/components/contact/DetailSection.scss";
import { useState, useEffect } from "react";
import { ContactForm } from "./contactComponent/ContactForm";
import Image from "next/image";
import dummyImage from "@/public/assets/images/course/dummy2jpg.jpg";

type Tab = "chaipat" | "goura" | "bhatora";

const iframeSources: { [key in Tab]: string } = {
  chaipat:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471585.95678806584!2d87.19760608906248!3d22.5691792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02a0fa9e6984e1%3A0xf4b490e043fa4046!2sChaipat%20Youth%20Computer%20Training%20Centre!5e0!3m2!1sen!2sin!4v1720554473602!5m2!1sen!2sin",
  goura:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117933.4692275951!2d87.59345079726562!3d22.52590009999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02a7e820215ab3%3A0x76c293945c54cdbb!2sGoura%20Rastriya%20Youth%20Computer!5e0!3m2!1sen!2sin!4v1720556756132!5m2!1sen!2sin",
  bhatora:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3745430.0100830705!2d85.3746349!3d23.5452137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02a18ab0ff5e17%3A0xff4d8d26e2950809!2sBHATORA%20RASTRIYA%20YOUTH%20COMPUTER%20TRAINING%20ACADEMY!5e0!3m2!1sen!2sin!4v1721730426217!5m2!1sen!2sin",
};

const contactDetails: {
  [key in Tab]: { address: string; email: string; phone: string };
} = {
  chaipat: {
    address: "Chaipat,near beldanga ,721148",
    email: "chaipat@contact.com",
    phone: "+911234567890",
  },
  goura: {
    address: "456 Goura Rd.",
    email: "goura@contact.com",
    phone: "+911234567891",
  },
  bhatora: {
    address: "789 Bhatora Ln.",
    email: "bhatora@contact.com",
    phone: "+911234567892",
  },
};

export const DetailSection = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>("chaipat");
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [dummyImage, dummyImage, dummyImage, dummyImage];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="contact-svg">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#0099ff', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      fill="url(#gradient)"
      d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,181.3C840,192,960,192,1080,181.3C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    />
  </svg>
      <div id="header">
        <h1 className={ntr.className}>CONTACT US</h1>
      </div>
      <div id="about">
        <p>We&apos;re Here to Help, Get in Touch!</p>
      </div>
      <div id="map-tab" className={ntr.className}>
        <div
          className={`map-tab-container ${
            selectedTab === "chaipat" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("chaipat")}
        >
          <p>CHAIPAT</p>
        </div>
        <div
          className={`map-tab-container ${
            selectedTab === "goura" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("goura")}
        >
          <p>GOURA</p>
        </div>
        <div
          className={`map-tab-container ${
            selectedTab === "bhatora" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("bhatora")}
        >
          <p>BHATORA</p>
        </div>
      </div>
      <div id="detail-address" className={ntr.className}>
        <div className="map">
          <iframe
            src={iframeSources[selectedTab]}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="detail">
          <h1 className={ntr.className}>Details</h1>
          <h2>Address</h2>
          <p>{contactDetails[selectedTab].address}</p>
          <h2>Email</h2>
          <p>{contactDetails[selectedTab].email}</p>
          <h2>Phone</h2>
          <p>{contactDetails[selectedTab].phone}</p>
        </div>

        <div className="slider">
          <div
            className="slides"
            style={{ transform: `translateX(${-currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div className="slide" key={index}>
                <Image
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="contact-form">
        <div className="form-header">
          <p>Share Your Thoughts</p>
        </div>
        <div className="form-container">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
