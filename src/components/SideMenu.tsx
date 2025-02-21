"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerIcon from "../assets/hamburger-menu-icon.svg";
import CloseIcon from "../assets/close-icon.svg";
import ResumeIcon from "../assets/resume-icon.svg";
import EmailIcon from "../assets/email-icon.svg";
import GithubIcon from "../assets/github-mark-white.svg";

import "./SideMenu.css";

export const SideMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="side-menu-wrapper">
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
      <div className="side-menu-title">
        <button onClick={toggleMenu} id="menu-button">
          <Image src={HamburgerIcon} alt="Hamburger Icon" />
        </button>
      </div>
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-header">
          <button onClick={toggleMenu}>
            <Image src={CloseIcon} alt="Close Icon" />
          </button>
        </div>
        <div className="menu-content">
          <ul>
            <li>
              <Link href="/" className="menu-link" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="menu-link" onClick={toggleMenu}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/realtimemap" className="menu-link" onClick={toggleMenu}>
                Real Time Map
              </Link>
            </li>
            <li>
              <Link href="/videos" className="menu-link" onClick={toggleMenu}>
                Videos
              </Link>
            </li>
          </ul>
          <ul>
            <li><a className="link-socials" href="/portfolio/Resume-Michael-Kovacsik.pdf" download={true}>Resume <Image src={ResumeIcon} alt="Resume Icon" /></a></li>
            <li><Link className="link-socials" href="https://github.com/kovacsikdev/portfolio">Github <Image src={GithubIcon} alt="Github Icon" /></Link></li>
            <li><Link className="link-socials" href="mailto:kovacsikdev@gmail.com">kovacsikdev@gmail.com <Image src={EmailIcon} alt="Email Icon" /></Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
