const TestimonialCard = ({ name, photo, job, testimony, rating }) => {
  return (
    <div className=" relative pt-4">
      <div className="flex flex-col gap-4 h-full border border-gray-300/45 shadow-xl rounded-lg px-5 py-5 ">
        <div className="absolute border bg-white border-gray-300/45 shadow-xl p-2 rounded-full right-9 top-0">
          <img
            width={20}
            src="/assets/quote-right.svg"
            alt="quotes"
          />
        </div>
        <div className="flex gap-1">
          <div className="rounded-full ">
            <img
              className="w-12 h-12 aspect-square rounded-full object-cover"
              src={photo}
              alt={name}
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-base font-medium text-black/85">
              {name}
            </h3>
            <p className="text-[12px] text-black/45 font-semibold">
              {job}
            </p>
          </div>
        </div>
        <div className="h-full pb-1">
          <p className="text-[13px] text-black/45">{testimony}</p>
        </div>
        <div className="flex justify-between py-1 px-1.5 border border-gray-300/20 shadow-sm rounded-lg items-center">
          <div className="flex gap-0.5">
            <img
              width={13}
              height={10}
              src="/assets/star.svg"
              alt="star"
            />
            <p className="text-[12px] text-black/45">{rating}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-[12px] text-black/45">
              Watch on Youtube
            </p>
            <img
              width={20}
              height={10}
              src="/assets/youtube.svg"
              alt="youtube"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
