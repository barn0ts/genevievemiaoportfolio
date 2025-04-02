"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { useRouter } from 'next/navigation';
import ContactModal from './ContactModal';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function NavbarSection() {
  const menuItems = ["Home", "About Me", "Projects", "Resume", "Contact"];
  const router = useRouter();
  const resumeURL = "https://drive.google.com/file/d/12HttbvLdsHKNo67kQEx8WaK0KhzZAw5a/view?usp=sharing";

  const pathname = usePathname();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleContactModalClose = () => {
    setIsContactModalOpen(false);
  };

  const handleNavigation = (item: string) => {
    switch (item) {
      case "Home":
        router.push("/");
        break;
      case "About Me":
        router.push("/aboutme");
        break;
      case "Projects":
        router.push("/projects");
        break;
      case "Resume":
        window.open(resumeURL, "_blank");
        break;
      case "Contact": //Open Contact Modal
        handleContactClick();
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative">
      <Navbar
        disableAnimation
        isBordered
        className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl bg-white shadow-lg rounded-2xl px-6 py-3 z-50 border border-gray-300"
      >
        {/* Profile Section */}
        <NavbarContent>
          <NavbarBrand className="flex items-center gap-3">
            <img
              src="/genicon.jpg"
              alt="Profile"
              className="w-11 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-bold text-inherit">Genevieve N. Miao</p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <p className="text-sm text-inherit">available for work</p>
              </div>
            </div>
          </NavbarBrand>
        </NavbarContent>

        {/* Navigation Links */}
        <NavbarContent className="hidden sm:flex gap-6 ml-auto" justify="end">
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              {item === "Contact" ? (
                <Link color="foreground" href="#" onClick={handleContactClick}>
                  {item}
                </Link>
              ) : (
                <Link color="foreground" href="#" onClick={() => handleNavigation(item)}>
                  {item}
                </Link>
              )}
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Mobile Menu Toggle */}
        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle />
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu className="z-[100] mt-16">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                className="w-full"
                color={
                  index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href="#"
                size="lg"
                onClick={item === "Contact" ? handleContactClick : () => handleNavigation(item)}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <ContactModal isOpen={isContactModalOpen} onClose={handleContactModalClose} />
    </div>
  );
}