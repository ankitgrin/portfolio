import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../images/profile1.jpg";
import profilePic2 from "../../images/profile2.jpg";
import profilePic3 from "../../images/profile3.jpg";
import profilePic4 from "../../images/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sint quam similique nesciunt labore esse nihil natus corporis dolor a asperiores eum nulla quos aspernatur sit veniam porro amet recusandae!",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sint quam similique nesciunt labore esse nihil natus corporis dolor a asperiores eum nulla quos aspernatur sit veniam porro amet recusandae!",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sint quam similique nesciunt labore esse nihil natus corporis dolor a asperiores eum nulla quos aspernatur sit veniam porro amet recusandae!",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sint quam similique nesciunt labore esse nihil natus corporis dolor a asperiores eum nulla quos aspernatur sit veniam porro amet recusandae!",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work</span>
        <span> from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
