"use client";
import { Footer } from "flowbite-react";
import React from 'react';
import { BsLinkedin, BsFacebook, BsGithub, BsInstagram, BsTwitterX} from "react-icons/bs";

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
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/dev.mulkalwar/" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/dev_mulkalwar/?fbclid=IwZXh0bgNhZW0CMTAAAR2Qdj7W6Qxq9oc0bQwQanVSGBkf6ps0_R09Wz6daHbM4LswA2EFW5f3EKc_aem_ZmFrZWR1bW15MTZieXRlcw" icon={BsInstagram} />
            <Footer.Icon href="https://x.com/dev_mulkalwar" icon={BsTwitterX} />
            <Footer.Icon href="https://github.com/devmulkalwar" icon={BsGithub} />
            <Footer.Icon href="https://www.linkedin.com/in/dev-mulkalwar-b2745a258/" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default Footerr