"use client";
import React, { useState } from "react";
import { Navbar, ToggleSwitch } from "flowbite-react";
import { Link,useLocation } from "react-router-dom";

const NavBarr = () => {
  const [isToggled, setIsToggled] = useState(false);
  const location = useLocation();

  const handleToggleChange = (checked) => {
    setIsToggled(checked);
  };

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="https://flowbite-react.com/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Portfolio
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <ToggleSwitch
          checked={isToggled}
          onChange={handleToggleChange}
        />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active={location.pathname === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/about"
          active={location.pathname === "/about"}
        >
          About
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/services"
          active={location.pathname === "/services"}
        >
          Services
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/projects"
          active={location.pathname === "/projects"}
        >
          Projects
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/contact"
          active={location.pathname === "/contact"}
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarr;
