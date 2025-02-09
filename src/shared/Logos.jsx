const Logos = ({ logo, title }) => {
  return (
    <div className="flex p-3 items-center justify-center">
      <img
        className="object-contain w-2xl h-16 md:w-28 md:h-20 lg:w-32 lg:h-24"
        width={300}
        height={200}
        src={logo}
        alt={title}
      />
    </div>
  );
};

export default Logos;
