const Logos = ({ logo, title }) => {
  return (
    <div className={`flex items-center justify-center px-4 py-2`}>
      <img
        src={logo}
        alt={title}
        className="h-12 w-20 object-contain " // Fixed width and height
      />
    </div>
  );
};

export default Logos;
