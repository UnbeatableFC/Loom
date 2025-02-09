import { TestimonialData } from "../data";
import TestimonialCard from "../shared/TestimonialCard";

const Testimonials = () => {
  return (
    <section className="mx-48 my-40">
      <h3 className="text-2xl font-semibold mb-16 text-center">
        What Our{" "}
        <span className="text-[#20A5E6] drop-shadow-lg">
          Clients Say
        </span>
      </h3>

      <div className="grid grid-cols-3 gap-10 mx-10">
        {TestimonialData.map(
          ({ id, name, job, photo, testimony, rating }) => (
            <TestimonialCard
              key={id}
              name={name}
              job={job}
              photo={photo}
              testimony={testimony}
              rating={rating}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Testimonials;
