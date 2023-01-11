import React from "react";
import { SelectedPage } from "./types";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface props {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
