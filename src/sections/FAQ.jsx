import { FaqData, LogoData } from "../data";
import ActionButton from "../shared/ActionButton";
import FaqItem from "../shared/FaqItem";
import { motion } from "framer-motion";
import Logos from "../shared/Logos";

const FAQ = () => {
  return (
    <section className="flex bg-[#F4F8FB] py-20 flex-col">
      <div className="flex gap-10 px-48">
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
        <div className="flex flex-col gap-3 flex-2">
          {FaqData.map(({ question, answer }, index) => (
            <FaqItem
              key={index}
              question={question}
              answer={answer}
            />
          ))}
        </div>
      </div>
      <div className="overflow-hidden w-full h-16 mt-12 bg-blue-400 py-8 md:py-16 flex items-center">
        <motion.div
          className="flex font-bold"
          animate={{ x: ["-10%", "-100%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ display: "inline-flex" }}
        >
          {LogoData.map(({ logo, title }, index) => (
            <Logos
              key={index}
              title={title}
              logo={logo}
              className=""
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
