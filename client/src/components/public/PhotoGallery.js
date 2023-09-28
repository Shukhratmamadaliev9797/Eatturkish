import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";

export default function PhotoGallery() {
  return (
    <div className="photoGallery">
      <div className="photoGallery__container">
        <div className="photoGallery__text">
          <div className="photoGallery__textBox">
            <span>Instagram</span>
            <div>
              <i class="fa-solid icon fa-spoon"></i>
            </div>
            <h1>Photo Gallery</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus perspiciatis enim ea explicabo odio suscipit
            </p>
            <div>
              <a href="/">View More</a>
            </div>
          </div>
        </div>
        <div className="photoGallery__photos">
          <Swiper
            slidesPerView={3.5}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode]}
            className="photoGallery__swiper"
          >
            <SwiperSlide className="photoGallery__slide">
              <div className="photoGallery__slide-hover">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <img src="/image/image1.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="photoGallery__slide">
              <div className="photoGallery__slide-hover">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <img src="/image/image2.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="photoGallery__slide">
              <div className="photoGallery__slide-hover">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <img src="/image/image1.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="photoGallery__slide">
              <div className="photoGallery__slide-hover">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <img src="/image/image1.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="photoGallery__slide">
              <div className="photoGallery__slide-hover">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <img src="/image/image1.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="photoGallery__slide">
              <div className="photoGallery__slide-hover">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <img src="/image/image1.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="photoGallery__slide">
              <div className="photoGallery__slide-hover">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <img src="/image/image1.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="photoGallery__slide">
              <div className="photoGallery__slide-hover">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <img src="/image/image1.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="photoGallery__slide">
              <div className="photoGallery__slide-hover">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <img src="/image/image1.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="photoGallery__slide">
              <div className="photoGallery__slide-hover">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <img src="/image/image1.jpeg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
