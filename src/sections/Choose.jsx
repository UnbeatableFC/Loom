import { ChooseData } from "../data";
import ChooseCard from "../shared/ChooseCard";

const Choose = () => {
  return (
    <section className="mb-48 pb-20 px-48">
      <h3 className="text-3xl font-semibold mb-16">
        <span className="text-[#20A5E6] drop-shadow-lg">Why</span>{" "}
        Choose Us?
      </h3>

      <div className="grid grid-cols-3 gap-6">
        {ChooseData.map(({ color, icon, title, description, id }) => (
          <ChooseCard
            key={id}
            color={color}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default Choose;
