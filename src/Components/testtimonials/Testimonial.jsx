import React from "react";
import "./Testimonial.css";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";
import profilePic6 from "../../img/profile6.jpg";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const clients = [
    {
      img: profilePic1,
      reviwe:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laborum optio sit iusto ducimus corporis at maxime sequi aut eaque maiores, sapiente nihil. Nisi aspernatur earum a aut! Nihil, ratione.",
    },
    {
      img: profilePic2,
      reviwe:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laborum optio sit iusto ducimus corporis at maxime sequi aut eaque maiores, sapiente nihil. Nisi aspernatur earum a aut! Nihil, ratione.",
    },
    {
      img: profilePic3,
      reviwe:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laborum optio sit iusto ducimus corporis at maxime sequi aut eaque maiores, sapiente nihil. Nisi aspernatur earum a aut! Nihil, ratione.",
    },
    {
      img: profilePic4,
      reviwe:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laborum optio sit iusto ducimus corporis at maxime sequi aut eaque maiores, sapiente nihil. Nisi aspernatur earum a aut! Nihil, ratione.",
    },
    {
      img: profilePic5,
      reviwe:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laborum optio sit iusto ducimus corporis at maxime sequi aut eaque maiores, sapiente nihil. Nisi aspernatur earum a aut! Nihil, ratione.",
    },
    {
      img: profilePic6,
      reviwe:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laborum optio sit iusto ducimus corporis at maxime sequi aut eaque maiores, sapiente nihil. Nisi aspernatur earum a aut! Nihil, ratione.",
    },
  ];
  return (
    <div className="t-wrapper" id="testimonials">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>from me......</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <img src={client.img} alt="" />
                <span style={{color: darkMode ? "var(--darkText)" : ''}}>{client.reviwe}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Testimonial;
