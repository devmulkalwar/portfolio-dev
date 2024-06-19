"use client";
import React, { useState } from "react";
import { Navbar, ToggleSwitch } from "flowbite-react";
import { Link } from "react-router-dom";

const NavBarr = () => {
  const [isToggled, setIsToggled] = useState(false);

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
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <ToggleSwitch
          checked={isToggled}
          label="Toggle me (checked)"
          onChange={handleToggleChange}
        />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about">
          About
        </Navbar.Link>
        <Navbar.Link as={Link} to="/services">
          Services
        </Navbar.Link>
        <Navbar.Link as={Link} to="/projects">
          Projects
        </Navbar.Link>
        <Navbar.Link as={Link} to="/contact">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarr;
