import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitsInterface, SelectedPage } from "@/shared/types";
import eWalletBro from "@/assets/assets/E-Wallet-bro.svg"
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const benefits: Array<BenefitsInterface> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Easily configure your profile",
    description:
      "Laborum nostrud labore est sint enim commodo. Est officia occaecat incididunt cupidatat id nulla nulla duis culpa duis laborum. Non consequat Lorem enim dolor ut ex laborum aute ad elit ad do. Irure pariatur pariatur elit veniam id.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100% FREE",
    description:
      "Laborum nostrud labore est sint enim commodo. Est officia occaecat incididunt cupidatat id nulla nulla duis culpa duis laborum. Non consequat Lorem enim dolor ut ex laborum aute ad elit ad do. Irure pariatur pariatur elit veniam id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Delete your info at any time!",
    description:
      "Laborum nostrud labore est sint enim commodo. Est officia occaecat incididunt cupidatat id nulla nulla duis culpa duis laborum. Non consequat Lorem enim dolor ut ex laborum aute ad elit ad do. Irure pariatur pariatur elit veniam id.",
  },
];

const Benefits = (props: Props) => {
  const setSelectedPage = props.setSelectedPage;

  return (
    <section id="benefits" className="mx-auto mt-[-12rem] min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST BUDGET MANAGER.</HText>
          <p className="my-5 text-sm">
            We provide a multitude of different services using the latest technology
            to help you better manager your money, by allowing you to keep track
            of your spendings
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-10 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitsInterface) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphics & Description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto h-[35rem] w-auto"
            alt="benefits-page-graphic"
            src={eWalletBro}
          />
          <div>
            <div className="relative ">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                >
                  <HText>
                    MILLIONS OF HAPPY PEOPLE{" "}
                    <span className="text-primary-500">USING BUDGER</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
            >
              <p className="my-5">
                Tempor dolore laboris qui elit cupidatat qui magna voluptate
                consectetur reprehenderit in esse. Non dolore deserunt magna
                nostrud incididunt mollit sit enim excepteur tempor est
                consectetur eu. Anim cupidatat id do voluptate eiusmod occaecat
                duis irure aliquip. Voluptate id aliqua exercitation ipsum ut
                minim.
              </p>
              <p className="mb-5">
                Elit exercitation voluptate laborum minim laborum sint cillum
                officia duis. Ullamco minim enim exercitation eu mollit esse
                sint ut aliquip. Magna culpa laboris et occaecat irure officia
                velit aliqua est.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-[20rem] before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
