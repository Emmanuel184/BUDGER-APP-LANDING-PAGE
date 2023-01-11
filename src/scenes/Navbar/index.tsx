import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import Logo from "@/assets/assets/logo.png";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

interface Props {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
}

const Navbar = (props: Props) => {
  const selectedPage = props.selectedPage;
  const setSelectedPage = props.setSelectedPage;
  const isTopOfPage = props.isTopOfPage;
  const navbarBackground = isTopOfPage ? "text-[#000000]" : "bg-[#00D632] drop-shadow";

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img alt="logo" src={Logo} className="h-[3.5rem] w-auto"/>
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}            
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}            
                  />
                  <Link
                    page="Our Services"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}            
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}            
                  />
                </div>
                <div className={`${flexBetween} gap-6`}>
                  <p>Sign in</p>
                  <div className={`${isTopOfPage ? "bg-[white]" : "bg-[white]"}`}>
                    <ActionButton setSelectedPage={setSelectedPage}>
                      Try Budger
                    </ActionButton>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <button
                  className="rounded-full bg-secondary-500 p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-[#00D632] drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Services"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
