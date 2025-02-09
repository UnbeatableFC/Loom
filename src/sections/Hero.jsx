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
      className="gap-16 justify-center items-center my-10 py-10 md:h-full md:pb-0"
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
            transition={{ duration: 3 }} // Smooth transition
            className=""
          >
            <div className="flex flex-col gap-4 justify-center items-center md:items-start">
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl text-center lg:text-start md:text-4xl font-bold">
                  Leverage AI to Build
                </h2>
                <h2 className="text-3xl text-center lg:text-start text-[#20A5E6] md:text-4xl font-bold">
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
          <div className="flex gap-8">
            <motion.div
              initial={{ opacity: 0 }} // Start fully transparent
              animate={{ opacity: 1 }} // Fade to fully visible
              exit={{ opacity: 0 }} // Fade out when unmounting
              transition={{ duration: 3 }} // Smooth transition
              className="flex flex-col"
            >
              <p className="font-semibold text-[25px] md:text-[28px]">200+</p>
              <p className="text-[11px] md:text-[14px] md:-mt-2">Projects Done</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} // Start fully transparent
              animate={{ opacity: 1 }} // Fade to fully visible
              exit={{ opacity: 0 }} // Fade out when unmounting
              transition={{ duration: 3, delay: 0.7 }} // Smooth transition
              className=""
            >
              <p className="font-semibold text-[25px] md:text-[28px]">150+</p>
              <p className="text-[11px] md:text-[14px] md:-mt-2">Happy Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} // Start fully transparent
              animate={{ opacity: 1 }} // Fade to fully visible
              exit={{ opacity: 0 }} // Fade out when unmounting
              transition={{ duration: 3, delay: 1.2 }} // Smooth transition
              className=""
            >
              <p className="font-semibold text-[25px] md:text-[28px]">30+</p>
              <p className="text-[11px] md:text-[14px] md:-mt-2">Team Members</p>
            </motion.div>
          </div>
        </div>

        {/* <div className="absolute  -z-50 right-0 clip-path-[polygon(25%_0%,100%_0%,75%_100%,0%_100%)]">
          <img
            width={700}
            className="[clip-path:polygon(0%_30%,_5%_20%,_15%_10%,_25%_5%,_35%_5%,_45%_10%,_55%_20%,_65%_30%,_75%_40%,_85%_45%,_95%_45%,_100%_50%,_100%_100%,_0%_100%)] "
            height={10}
            src="/assets/backg.png"
            alt=""
          />
        </div> */}

        {/* <div className="w-64 h-64 relative">
          <svg style="width:0;height:0;position:absolute;">
            <defs>
              <clipPath id="robotClip">
                <path
                  d="M0 35
                 C 10 20, 20 10, 35 10
                 S 50 20, 60 35
                 L 60 50
                 C 60 60, 50 70, 35 70
                 S 10 60, 0 50
                 Z"
                />
              </clipPath>
            </defs>
          </svg>
          <img
            src="/assets/backg.png"
            alt="Clipped Image"
            className="absolute w-full h-full object-cover [clip-path:url(#robotClip)]"
          />
        </div> */}
        {/* IMAGE */}
        <div className="">
          <img
            className="object-cover"
            width={1000}
            src=""
            alt="Hero Photo"
          />
        </div>
      </motion.div>
    </section>
  );
};
Hero.propTypes = {
  setSelectedPage: PropTypes.func.isRequired,
};

export default Hero;
