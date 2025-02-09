import { ServiceData } from "../data";
import ServiceCard from "../shared/ServiceCard";

const Services = () => {
  return (
    <section id="services" className="my-48 pb-20 px-48 bg-[#F4F8FB]">
      <div className="flex items-center justify-center py-16">
        <h5 className="text-[33px] font-semibold">
          Our Intelligence{" "}
          <span className="text-[#20A5E6] drop-shadow-lg">
            Services
          </span>
        </h5>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {ServiceData.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            color={service.color}
            description={service.description}
            title={service.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
