import React from "react";
import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30">
      <Title
        title="what Our Guests Say"
        subTitle="Discover why discerning travelers consistently choose QuickStay for their ecxlusive and luxurious accommodations around the world."
      />
      <div className="flex flex-wrap justify-center gap-6 mt-20">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col md:flex-row items-start gap-4"
          >
            <img
              className="h-60 rounded-lg"
              src={testimonial.image}
              alt={testimonial.name}
            />
            <div className="flex flex-col justify-between h-60">
              <div>
                <div className="flex items-center gap-1">
                  <StarRating rating={testimonial.rating} />
                </div>
                <p className="max-w-[280px] text-gray-500 mt-6">
                  {testimonial.review}
                </p>
              </div>
              <p className="text-lg font-medium">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
