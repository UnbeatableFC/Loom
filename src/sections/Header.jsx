import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from "../shared/Link";
import ActionButton from "../shared/ActionButton";
import { motion } from "framer-motion";

const Header = ({ selectedPage, setSelectedPage }) => {
  const flexBetween = "flex justify-between items-center";
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0); // Check if user is at top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navbarBackground = isTop
    ? "bg-transparent"
    : "bg-blue-200 drop-shadow";

  return (
    <nav>
      <div
        className={` ${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full px-2 `}
      >
        <div
          className={`${flexBetween} mx-auto w-full px-10 lg:px-48`}
        >
          <div className={`${flexBetween} w-full gap-16`}>
            <div className="flex w-22 md:w-28 items-center gap-4">
              <img
                width={200}
                height={55}
                src="/assets/loomlogo.png"
                alt="Logo"
              />
            </div>

            {isAboveMediumScreens ? (
              <div
                className={`flex justify-end items-center gap-24 w-full`}
              >
                <>
                  <div className={`${flexBetween} gap-8 text-lg`}>
                    <Link
                      page="Home"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />

                    <Link
                      page="About"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />

                    <Link
                      page="Services"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />

                    <Link
                      page="Careers"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                  <div className={`${flexBetween} gap-8 text-sm`}>
                    <ActionButton setSelectedPage={setSelectedPage}>
                      Contact Us
                    </ActionButton>
                  </div>
                </>
              </div>
            ) : (
              <>
                <div className="">
                  <button
                    title="Menu-Bar"
                    className="w-10 p-2 cursor-pointer"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    <img
                      width={100}
                      height={20}
                      src="/assets/menubar.svg"
                      alt="menu-bar"
                      className=" "
                    />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      {!isAboveMediumScreens && isMenuToggled && (
        <motion.div
          initial={{ x: "100%" }} // Start offscreen (right side)
          animate={{ x: 0 }} // Slide into view
          exit={{ x: "100%" }} // Slide back offscreen
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed right-0 bottom-0 z-40 h-full w-[150px] md:w-[250px] bg-blue-300 drop-shadow-xl"
        >
          <div className="flex justify-end p-12">
            <button
              title="Close-Icon"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img
                width={20}
                height={20}
                src="/assets/closebar.svg"
                alt="close"
              />
            </button>
          </div>

          <div>
            <div
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              className={`${flexBetween} flex-col gap-10 text-xl`}
            >
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              />

              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              />

              <Link
                page="Services"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              />

              <Link
                page="Career"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              />
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
Header.propTypes = {
  selectedPage: PropTypes.string.isRequired,
  setSelectedPage: PropTypes.func.isRequired,
  isTopPage: PropTypes.bool.isRequired,
};

export default Header;
