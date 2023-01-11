import { ClassType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import image1 from "@/assets/assets/Payment-Information.svg";
import image2 from "@/assets/assets/Office-Manage.svg";
import image3 from "@/assets/assets/Revenue-bro.svg";
import image4 from "@/assets/assets/Time-Mange.svg";
import image5 from "@/assets/assets/Credit card-bro.svg";
import image6 from "@/assets/assets/Add to Cart-amico.svg";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Manage subscription payments",
    description:
      "Lorem dolor non deserunt ut nostrud ullamco exercitation sint ipsum irure eiusmod velit. Cillum veniam in fugiat adipisicing adipisicing exercitation ex aute reprehenderit cupidatat. Sint laborum ea do labore officia eu consectetur do.",
    image: image1,
  },
  {
    name: "Budger also provides non-budget related services",
    description:
      "Lorem dolor non deserunt ut nostrud ullamco exercitation sint ipsum irure eiusmod velit. Cillum veniam in fugiat adipisicing adipisicing exercitation ex aute reprehenderit cupidatat. Sint laborum ea do labore officia eu consectetur do.",
    image: image2,
  },
  {
    name: "Create an saving strategy for investing",
    description:
      "Lorem dolor non deserunt ut nostrud ullamco exercitation sint ipsum irure eiusmod velit. Cillum veniam in fugiat adipisicing adipisicing exercitation ex aute reprehenderit cupidatat. Sint laborum ea do labore officia eu consectetur do.",
    image: image3,
  },
  {
    name: "Budger never stops working, save money while your calm",
    description:
      "Lorem dolor non deserunt ut nostrud ullamco exercitation sint ipsum irure eiusmod velit. Cillum veniam in fugiat adipisicing adipisicing exercitation ex aute reprehenderit cupidatat. Sint laborum ea do labore officia eu consectetur do.",
    image: image4,
  },
  {
    name: "Create credit card repayment strategies",
    description:
      "Lorem dolor non deserunt ut nostrud ullamco exercitation sint ipsum irure eiusmod velit. Cillum veniam in fugiat adipisicing adipisicing exercitation ex aute reprehenderit cupidatat. Sint laborum ea do labore officia eu consectetur do.",
    image: image5,
  },
  {
    name: "Give shoping tips!",
    description:
      "Lorem dolor non deserunt ut nostrud ullamco exercitation sint ipsum irure eiusmod velit. Cillum veniam in fugiat adipisicing adipisicing exercitation ex aute reprehenderit cupidatat. Sint laborum ea do labore officia eu consectetur do.",
    image: image6,
  },
];

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = (props: Props) => {
  const selectedPage = props.setSelectedPage;

  return (
    <section id="ourclasses" className="py-17 w-full bg-primary-100">
      <motion.div onViewportEnter={() => selectedPage(SelectedPage.OurClasses)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Ad do tempor est commodo aute commodo ea ut nostrud aute nulla
              magna Lorem. Cupidatat aliquip esse Lorem voluptate labore
              occaecat laboris cupidatat. Aute dolor labore in nisi incididunt
              commodo sint.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
