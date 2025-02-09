import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';

const Link = ({page, setSelectedPage,selectedPage}) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${selectedPage === lowerCasePage ? "text-blue-500 font-semibold" : ""}
        transition duration-200 hover:text-blue-500 text-sm  
    `}
    >
      {page}
    </AnchorLink>
  );
};

Link.propTypes = {
  page: PropTypes.string.isRequired,
  setSelectedPage: PropTypes.func.isRequired,
  selectedPage: PropTypes.string.isRequired,
};

export default Link;

