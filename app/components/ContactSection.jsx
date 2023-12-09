"use client";
import Link from "next/link";
import React from "react";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="my-12 md:my-12 py-24 gap-4 ">
      <div className="z-10">
        <h5 className="text-xl font-bold my-2">Let&apos;s Connect</h5>
        <p className="mb-4 max-w--md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"/"}>
            <FaGithubAlt />
          </Link>
          <Link href={"/"}>
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
