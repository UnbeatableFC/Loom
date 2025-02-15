import ActionButton from "../shared/ActionButton";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Hero = ({ setSelectedPage }) => {
  const handleScroll = () => {
    document
      .getElementById("services")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      id="home"
      className="gap-16 justify-center items-center mt-10 py-10 md:py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND HEADER */}
      <motion.div
        onViewportEnter={() => setSelectedPage("home")}
        className="md:pt-24 md:pb-10 px-10 lg:px-48 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* MAIN HEADER */}
        <div className="flex flex-col gap-8">
          {/* HEADINGS */}
          <motion.div
            initial={{ opacity: 0 }} // Start fully transparent
            animate={{ opacity: 1 }} // Fade to fully visible
            exit={{ opacity: 0 }} // Fade out when unmounting
            transition={{ duration: 4 }} // Smooth transition
            className=""
          >
            <div className="flex flex-col gap-4 justify-center items-center md:items-start">
              <div className="flex flex-col gap-3">
                <h2 className="text-7xl text-center lg:text-start lg:text-5xl md:text-4xl font-bold">
                  Leverage AI to Build
                </h2>
                <h2 className="text-5xl  text-center lg:text-start text-[#20A5E6] md:text-4xl font-bold">
                  Smart Solutions
                </h2>
              </div>
              <p className="mt-2 md:mt-5 text-md md:text-[12px] lg:pr-20 leading-5 text-center md:text-start">
                Being a leading AI development company, we are top
                choice for well-known organisations looking for
                innovative ways to advance their business.
              </p>
            </div>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-center lg:items-start justify-center lg:justify-start gap-3"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Get Free Consultation
            </ActionButton>
            <button
              className="rounded-2xl w-fit text-[12px] hover:text-white hover:bg-[#19AAF2] px-4 sm:px-7 py-1 sm:py-2 cursor-pointer border-2 border-blue-200 :bg-white text-[#19AAF2] transition duration-500"
              onClick={handleScroll}
            >
              View Services
            </button>
          </motion.div>
          <div className="flex items-center justify-center md:justify-start md:items-start gap-8">
            <motion.div
              initial={{ opacity: 0 }} // Start fully transparent
              animate={{ opacity: 1 }} // Fade to fully visible
              exit={{ opacity: 0 }} // Fade out when unmounting
              transition={{ duration: 3 }} // Smooth transition
              className="flex items-center md:items-start flex-col"
            >
              <p className="font-semibold text-[25px] md:text-[28px]">
                200+
              </p>
              <p className="text-[11px] md:text-[14px] md:-mt-2">
                Projects Done
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} // Start fully transparent
              animate={{ opacity: 1 }} // Fade to fully visible
              exit={{ opacity: 0 }} // Fade out when unmounting
              transition={{ duration: 3, delay: 0.7 }} // Smooth transition
              className=""
            >
              <p className="font-semibold text-[25px] md:text-[28px]">
                150+
              </p>
              <p className="text-[11px] md:text-[14px] md:-mt-2">
                Happy Clients
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} // Start fully transparent
              animate={{ opacity: 1 }} // Fade to fully visible
              exit={{ opacity: 0 }} // Fade out when unmounting
              transition={{ duration: 3, delay: 1.2 }} // Smooth transition
              className=""
            >
              <p className="font-semibold text-[25px] md:text-[28px]">
                30+
              </p>
              <p className="text-[11px] md:text-[14px] md:-mt-2">
                Team Members
              </p>
            </motion.div>
          </div>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="md:absolute md:top-28 md:right-0 pt-5 lg:right-0 lg:top-0 lg:w-[800px] items-center"
        >
          {/* star svg */}
          <div className="w-24 hidden md:flex md:absolute md:left-20 md:top-0 lg:top-20 lg:left-38 opacity-15">
            <img src="/assets/star-2-svgrepo-com.svg" alt="star" />
          </div>
          <div className="w-10 hidden md:flex md:absolute md:top-11 md:left-19 lg:top-33 lg:left-32 opacity-15">
            <img src="/assets/star-2-svgrepo-com.svg" alt="star" />
          </div>
          <div className="w-24 hidden md:flex md:absolute md:bottom-0 md:right-10 lg:bottom-20 lg:left-28 opacity-15">
            <img src="/assets/star-2-svgrepo-com.svg" alt="star" />
          </div>
          <div className="w-10 hidden md:flex md:absolute md:bottom-0 md:right-22 lg:bottom-20 lg:left-24 opacity-20">
            <img src="/assets/star-2-svgrepo-com.svg" alt="star" />
          </div>

          <img
            src="/assets/heropic.png"
            alt="Hero Photo"
            className="md:w-[500px] lg:w-[800px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
Hero.propTypes = {
  setSelectedPage: PropTypes.func.isRequired,
};

export default Hero;
