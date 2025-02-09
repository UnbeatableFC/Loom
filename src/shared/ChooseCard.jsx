const ChooseCard = ({ color, icon, title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-5 lg:p-7 border border-gray-300/20 shadow-lg rounded-lg">
      <div className="flex justify-center items-center">
        <div className={`${color} p-4 rounded-full`}>
          <img width={25} height={25} src={icon} alt={title} />
        </div>
      </div>
      <div className="flex flex-col">
        <h5 className="text-lg font-semibold text-center mb-2 ">
          {title}
        </h5>
        <p className="text-[12px] max-w-50 text-center text-black/45">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ChooseCard;
