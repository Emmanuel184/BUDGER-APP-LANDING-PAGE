import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface Props {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Link = (props: Props) => {
  const lowerCasePage = props.page
    .toLowerCase()
    .replace(/ /g, "") as SelectedPage;
  const selectedPage = props.selectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-[#FFBF00]" : ""}
      transition duration-300 hover:text-white 
    `}
      href={`#${lowerCasePage}`}
      onClick={() => props.setSelectedPage(lowerCasePage)}
    >
      {props.page}
    </AnchorLink>
  );
};

export default Link;
