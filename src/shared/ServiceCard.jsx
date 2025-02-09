const ServiceCard = ({ icon, title, description, color }) => {
  return (
    <div className="flex justify-center items-center gap-5 py-4 bg-white rounded-xl">
      <div className="flex justify-center items-center">
        <div className={`${color} p-4 rounded-full`}>
          <img width={35} height={40} src={icon} alt={title} />
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        <h5 className="text-md font-semibold mb-1 ">{title}</h5>
        <p className="text-[12px] max-w-70 text-black/45 leading-5">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
