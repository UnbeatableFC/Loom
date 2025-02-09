import AnchorLink from "react-anchor-link-smooth-scroll";
import PropTypes from 'prop-types';


const ActionButton = ({ children, setSelectedPage }) => {
  return (
    <AnchorLink
      className="rounded-2xl w-fit text-[12px] text-white bg-[#19AAF2] px-4 sm:px-7 py-1 sm:py-2 hover:bg-white hover:text-[#19AAF2] transition duration-500"
      onClick={() => setSelectedPage('contact')}
      href="contact"
    >
      {children}
    </AnchorLink>
  );
};
ActionButton.propTypes = {
  children: PropTypes.node.isRequired,
  setSelectedPage: PropTypes.func.isRequired,
};

export default ActionButton;
