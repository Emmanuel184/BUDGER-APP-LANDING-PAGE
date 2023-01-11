import { SelectedPage } from "@/shared/types";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ContactUsPageGrahpic from "@/assets/ContactUsPageGrahpic.png";
import HText from "@/shared/HText";

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = (props: Props) => {
  const inputStyles =
    "mt-5 w-full rounded-lg bg-[#00D632] px-5 py-5 placeholder-white";
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="pb-22 mx-auto mt-[5rem] w-5/6 pb-24">
      <motion.div
        onViewportEnter={() => props.setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span>
            <span> TO START SAVING MONEY</span>
          </HText>
          <p>
            Reprehenderit anim aliquip nulla occaecat ea amet culpa fugiat
            proident ullamco elit non nulla. Duis sint proident exercitation
            quis non nulla Lorem consectetur deserunt pariatur qui. Commodo
            pariatur velit consectetur labore ullamco reprehenderit nisi
            proident.
          </p>
        </motion.div>
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/13202f6f2d6fe6d329960c86788f0a5f"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 50,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Please shorten your username (<50)"}
                </p>
              )}
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "Please shorten your message (<2000)"}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
