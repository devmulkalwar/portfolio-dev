"use client";
import { Footer } from "flowbite-react";
import React from "react";
import {
  BsLinkedin,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitterX,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footerr = () => {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
          />
          <Footer.LinkGroup>
            <Footer.Link
              as={Link}
              to="/about"
              active={location.pathname === "/about"}
            >
              About
            </Footer.Link>
            <Footer.Link
              as={Link}
              to="/contact"
              active={location.pathname === "/contact"}
            >
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Made with love by Dev™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              target="_blank"
              href="https://www.facebook.com/dev.mulkalwar/"
              icon={BsFacebook}
            />
            <Footer.Icon
              target="_blank"
              href="https://www.instagram.com/dev_mulkalwar/?fbclid=IwZXh0bgNhZW0CMTAAAR2Qdj7W6Qxq9oc0bQwQanVSGBkf6ps0_R09Wz6daHbM4LswA2EFW5f3EKc_aem_ZmFrZWR1bW15MTZieXRlcw"
              icon={BsInstagram}
            />
            <Footer.Icon
              target="_blank"
              href="https://x.com/dev_mulkalwar"
              icon={BsTwitterX}
            />
            <Footer.Icon
              target="_blank"
              href="https://github.com/devmulkalwar"
              icon={BsGithub}
            />
            <Footer.Icon
              target="_blank"
              href="https://www.linkedin.com/in/dev-mulkalwar-b2745a258/"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footerr;
