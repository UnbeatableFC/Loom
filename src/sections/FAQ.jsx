import { FaqData, LogoData } from "../data";
import ActionButton from "../shared/ActionButton";
import FaqItem from "../shared/FaqItem";
import { motion } from "framer-motion";
import Logos from "../shared/Logos";

const FAQ = () => {
  return (
    <section className="flex bg-[#F4F8FB] pt-10 lg:pt-20 pb-20 flex-col">
      <div className="flex flex-col md:flex-row gap-10 px-10 lg:px-48">
        <div className="flex justify-center flex-col gap-5  flex-[1.5]">
          <h3 className="text-[28px] font-semibold">
            Frequently Asked <br />{" "}
            <span className="text-[#20A5E6] drop-shadow-lg">
              Questions
            </span>
          </h3>
          <p className="text-[14px] max-w-80 text-black/55 leading-6">
            Find answers to common questions about LoomAi services and
            products below. Our FAQ section is designed to help you
            understand how LoomAi can assist you in achieving your
            goals with ease and efficiency. Whether you are looking
            for information on our AI capabilities, pricing, or
            support, we have compiled a comprehensive list of
            questions and answers to help you get the most out of our
            offerings.
          </p>
          <ActionButton>See More Questions</ActionButton>
        </div>
        <div id="faq-accord" className="md:flex hidden flex-col gap-1 flex-2">
          {FaqData.map(({ question, answer }, index) => (
            <FaqItem
              key={index}
              question={question}
              answer={answer}
            />
          ))}
        </div>
      </div>
      <div className="overflow-hidden hidden md:flex relative bg-blue-500 mt-10 py-2">
      <motion.div
        className="flex font-bold whitespace-nowrap "
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: 15, // Increased duration for smoother animation
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ display: "inline-flex" }}
      >
        {LogoData.map(({ logo, title }, index) => (
          <Logos key={index} title={title} logo={logo} className="mx-4" />
        ))}
      </motion.div>
    </div>
    </section>
  );
};

export default FAQ;
