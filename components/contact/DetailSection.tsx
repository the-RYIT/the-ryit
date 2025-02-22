"use client";

import { ntr, manrope } from "@/utils/fonts/fonts";
import "@/components/contact/DetailSection.scss";
import { useState, useEffect } from "react";
import { ContactForm } from "./contactComponent/ContactForm";
import Image from "next/image";
import dummyImage from "@/public/assets/images/course/dummy2jpg.jpg";
import { useRef } from "react";

type Tab =
  | "chaipat"
  | "goura"
  | "bhatora"
  | "begri"
  | "Bargachia"
  | "PENRO"
  | "Jangipara";

const iframeSources: { [key in Tab]: string } = {
  chaipat:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471585.95678806584!2d87.19760608906248!3d22.5691792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02a0fa9e6984e1%3A0xf4b490e043fa4046!2sChaipat%20Youth%20Computer%20Training%20Centre!5e0!3m2!1sen!2sin!4v1720554473602!5m2!1sen!2sin",
  goura:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117933.4692275951!2d87.59345079726562!3d22.52590009999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02a7e820215ab3%3A0x76c293945c54cdbb!2sGoura%20Rastriya%20Youth%20Computer!5e0!3m2!1sen!2sin!4v1720556756132!5m2!1sen!2sin",
  bhatora:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3745430.0100830705!2d85.3746349!3d23.5452137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02a18ab0ff5e17%3A0xff4d8d26e2950809!2sBHATORA%20RASTRIYA%20YOUTH%20COMPUTER%20TRAINING%20ACADEMY!5e0!3m2!1sen!2sin!4v1721730426217!5m2!1sen!2sin",
  begri:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4224.354866507771!2d88.20684771031624!3d22.616736111420785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f88170817e7709%3A0xfc8b805fa22ce660!2sBegri%20Rastriya%20Youth%20Computer!5e0!3m2!1sen!2sin!4v1740208708790!5m2!1sen!2sin",
  Bargachia:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.658592485218!2d88.1321048752008!3d22.666514379424946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f87fd141a6e0ab%3A0xdaa743893449999b!2sBargachia%20Rastriya%20Youth%20Computer%20Tranning%20Academy!5e0!3m2!1sen!2sin!4v1740208841053!5m2!1sen!2sin",
  PENRO:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.12122531785744!2d88.0241679466206!3d22.656040295254613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f879ccd05788d3%3A0x9e88471271a7c052!2sPenro!5e0!3m2!1sen!2sin!4v1740209283140!5m2!1sen!2sin",
  Jangipara:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6173535978546!2d88.04786348789219!3d22.742459609527735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f87bad259fbd95%3A0xa532ca3b927e8c8f!2sJangipara%20Rural%20Hospital!5e0!3m2!1sen!2sin!4v1740209526083!5m2!1sen!2sin"
};

const contactDetails: {
  [key in Tab]: {
    address: string;
    email: string;
    phone: string;
    phone2?: string;
  };
} = {
  chaipat: {
    address: "Chaipat Beldanga     Chaipat,Daspur,Paschim Medinipur 721178",
    email: "theryit2024@gmail.com",
    phone: "+919679103253",
    phone2: "+919874159713",
  },
  goura: {
    address: "Uttar Gobindanagar   Goura,Daspur,Paschim Medinipur 721146",
    email: "theryit2024@gmail.com",
    phone: "+919679103253",
    phone2: "+919874159713",
  },
  bhatora: {
    address: "Bhatora Shibtola Bazar    Bhatora,Joypur,Howrah, 711303",
    email: "theryit2024@gmail.com",
    phone: "+919679103253",
    phone2: "+919874159713",
  },
  begri: {
    address: "Opposite Begri High School, Begri, Domjur, Howrah",
    email: "theryit2024@gmail.com",
    phone: "9874159713",
    // phone2: "+919874159713",
  },
  Bargachia: {
    address: "Near UCO bank, Bargachia , Howrah",
    email: "theryit2024@gmail.com",
    phone: "7003731873",
    // phone2: "+919874159713",
  },
  PENRO: {
    address: "PENRO Bus Stand, Bhadrokali Complex 2nd floor ",
    email: "theryit2024@gmail.com",
    phone: "+917003731873",
    // phone2: "+919874159713",
  },
  Jangipara: {
    address: "Jangipara Hospital Road, Mondal led Ghar",
    email: "theryit2024@gmail.com",
    phone: "+917003731873",
    // phone2: "+919874159713",
  },
};

export const DetailSection = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>("chaipat");
  const [currentSlide, setCurrentSlide] = useState(0);
  const TabRef = useRef<HTMLDivElement>(null);

  const slides = [dummyImage, dummyImage, dummyImage, dummyImage];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevTab = () => {
    TabRef.current?.scrollBy({
      top: 0,
      left: -150,
      behavior: "smooth",
    });
    
  }

  const nextTab = () => {
    TabRef.current?.scrollBy({
      top: 0,
      left: 150,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="contact-svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#0099ff", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ffffff", stopOpacity: 1 }}
            />
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
      <div id="Contact-about">
        <p>We&apos;re Here to Help, Get in Touch!</p>
      </div>
      <div
        id="Contact-Branch-header"
        className={`${ntr.className} flex justify-center items-center`}
      >
        <div className="border-conatainer flex justify-center items-center">
          <p>
            Our <span>Branches</span>
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center overflow-hidden w-full">
        <button className="tab-button-left" onClick={prevTab}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m15 5l-6 7l6 7"
            />
          </svg>
        </button>

        <div id="map-tab" className={ntr.className} ref={TabRef}>
          <div
            className={`map-tab-container ${selectedTab === "chaipat" ? "active" : ""}`}
            onClick={() => setSelectedTab("chaipat")}
          >
            <p>CHAIPAT</p>
          </div>
          <div
            className={`map-tab-container ${selectedTab === "goura" ? "active" : ""}`}
            onClick={() => setSelectedTab("goura")}
          >
            <p>GOURA</p>
          </div>
          <div
            className={`map-tab-container ${selectedTab === "bhatora" ? "active" : ""}`}
            onClick={() => setSelectedTab("bhatora")}
          >
            <p>BHATORA</p>
          </div>
          <div
            className={`map-tab-container ${selectedTab === "begri" ? "active" : ""}`}
            onClick={() => setSelectedTab("begri")}
          >
            <p>BEGRI</p>
          </div>
          <div
            className={`map-tab-container ${selectedTab === "Bargachia" ? "active" : ""}`}
            onClick={() => setSelectedTab("Bargachia")}
          >
            <p>BARGACHIA</p>
          </div>
          <div
            className={`map-tab-container ${selectedTab === "PENRO" ? "active" : ""}`}
            onClick={() => setSelectedTab("PENRO")}
          >
            <p>PENRO</p>
          </div>
          <div
            className={`map-tab-container ${selectedTab === "Jangipara" ? "active" : ""}`}
            onClick={() => setSelectedTab("Jangipara")}
          >
            <p>JANGIPARA</p>
          </div>
        </div>
          <button className="tab-button-right"  onClick={nextTab}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m9 5l6 7l-6 7"
              />
            </svg>
          </button>
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
          <p>{contactDetails[selectedTab].phone2}</p>
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
