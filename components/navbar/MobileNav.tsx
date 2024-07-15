"use client";

import { useState } from "react";
import "./menu-style.scss";
import "./mobile-nav-style.scss";
import Link from "next/link";
const MobileNav = () => {
  const [isMobileNavOpen, setOpenOption] = useState(false);

  return (
    <div className="md:hidden block">
      <div className="nav-open-close-btn  md:hidden flex">
        <div
          className={`burger ${isMobileNavOpen ? "burger-active" : ""}`}
          onClick={() => setOpenOption(!isMobileNavOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav
        className={`md:hidden block mobile-nav ${
          !isMobileNavOpen ? "translate-y-[-150%]" : "translate-y-0"
        }`}
      >
        <ul className="mobile-nav-ul">
          <li onClick={() => setOpenOption(!isMobileNavOpen)}>
            <Link href="/">Home</Link>
          </li>
          <span className="horizontal-border"></span>
          <li onClick={() => setOpenOption(!isMobileNavOpen)}>
            <Link href="/course">Courses</Link>
          </li>
          <span className="horizontal-border"></span>
          <li onClick={() => setOpenOption(!isMobileNavOpen)}>
            <Link href="/carrier">Carrier</Link>
          </li>
          <span className="horizontal-border"></span>
          <li onClick={() => setOpenOption(!isMobileNavOpen)}>
            <Link href="/event">Events</Link>
          </li>
          <span className="horizontal-border"></span>
          <li onClick={() => setOpenOption(!isMobileNavOpen)}>
            <Link href="/contacts">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
