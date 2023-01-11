import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import eWallet from "@/assets/assets/E-Wallet-amico.svg";

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 pt-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => props.setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <p className="mt-8 text-sm">
                Aliqua veniam culpa anim est amet minim occaecat quis. Deserunt
                ea ipsum magna adipisicing cupidatat non consectetur quis
                incididunt et reprehenderit. Et nisi ullamco fugiat incididunt
                voluptate. Commodo adipisicing voluptate mollit magna eu quis.
                Incididunt aliquip eu ex ad cupidatat eiusmod nulla esse enim ex
                in labore.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <ActionButton setSelectedPage={props.setSelectedPage}>
                Join Now
              </ActionButton>
              <AnchorLink
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-400"
                onClick={() => props.setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                <p>Learn More</p>
              </AnchorLink>
            </div>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="HomeImage" src={eWallet} />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
