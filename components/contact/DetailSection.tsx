"use client"

import { ntr, manrope } from "@/utils/fonts/fonts";
import "@/components/contact/DetailSection.scss";
import { useState } from "react";

type Tab = "chaipat" | "goura" | "bhatora";

const iframeSources: { [key in Tab]: string } = {
    chaipat: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471585.95678806584!2d87.19760608906248!3d22.5691792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02a0fa9e6984e1%3A0xf4b490e043fa4046!2sChaipat%20Youth%20Computer%20Training%20Centre!5e0!3m2!1sen!2sin!4v1720554473602!5m2!1sen!2sin",
    goura: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117933.4692275951!2d87.59345079726562!3d22.52590009999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02a7e820215ab3%3A0x76c293945c54cdbb!2sGoura%20Rastriya%20Youth%20Computer!5e0!3m2!1sen!2sin!4v1720556756132!5m2!1sen!2sin",
    bhatora: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.703947470254!2d85.51129547576915!3d23.252180211899313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4f01c098f47a1%3A0x8428b9f8ec747e59!2sBhatora%20Youth%20Computer%20Training%20Centre!5e0!3m2!1sen!2sin!4v1720554473602!5m2!1sen!2sin",
};

const contactDetails: { [key in Tab]: { address: string; email: string; phone: string } } = {
    chaipat: { address: "Chaipat,near beldanga ,721148", email: "chaipat@contact.com", phone: "+911234567890" },
    goura: { address: "456 Goura Rd.", email: "goura@contact.com", phone: "+911234567891" },
    bhatora: { address: "789 Bhatora Ln.", email: "bhatora@contact.com", phone: "+911234567892" },
};

export const DetailSection = () => {
    const [selectedTab, setSelectedTab] = useState<Tab>("chaipat");

    return (
        <>
            <div id="header">
                <h1 className={`${ntr.className}`}>Contact Us</h1>
            </div>
            <div id="about">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ea
                    vero suscipit obcaecati numquam ad blanditiis quis, deserunt quaerat
                    soluta fugit, a nesciunt distinctio odio praesentium aliquid. Animi ut
                    quae ullam magni libero minus mollitia quos cum quidem incidunt, rem
                    voluptatum voluptas laboriosam iusto corrupti consequuntur, earum,
                    dolorem assumenda ad.
                </p>
            </div>
            <div id="map-tab" className={`${ntr.className}`}>
                <div
                    className={`map-tab-container ${
                        selectedTab === "chaipat" ? "active" : ""
                    }`}
                    onClick={() => setSelectedTab("chaipat")}
                >
                    <p>CHAIPAT RYCTA</p>
                </div>
                <div
                    className={`map-tab-container ${
                        selectedTab === "goura" ? "active" : ""
                    }`}
                    onClick={() => setSelectedTab("goura")}
                >
                    <p>GOURA RYCTA</p>
                </div>
                <div
                    className={`map-tab-container ${
                        selectedTab === "bhatora" ? "active" : ""
                    }`}
                    onClick={() => setSelectedTab("bhatora")}
                >
                    <p>BHATORA RYCTA</p>
                </div>
            </div>
            <div id="detail-address" className={`${ntr.className}`}>
                <div className="map">
                    <iframe
                        src={iframeSources[selectedTab]}
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="detail">
                    <h1 className={`${ntr.className}`}>Details</h1>
                    <h2>Address</h2>
                    <p>{contactDetails[selectedTab].address}</p>
                    <h2>Email</h2>
                    <p>{contactDetails[selectedTab].email}</p>
                    <h2>Phone</h2>
                    <p>{contactDetails[selectedTab].phone}</p>
                </div>
            </div>
        </>
    );
};
