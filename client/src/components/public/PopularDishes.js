import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { listMenu, listMenuPopular } from "../../actions/menuActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Food from "../../modals/public/Food";

export default function PopularDishes() {
  const dispatch = useDispatch();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [nextActive, setNextActive] = useState(true);
  const [prevActive, setPrevActive] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [food, setFood] = useState();

  const menuPopular = useSelector((state) => state.menuPopular);
  const { loading: listLoading, error: listError, popularDishes } = menuPopular;

  useEffect(() => {
    dispatch(listMenuPopular());
  }, [dispatch]);

  const nextActiveHandler = () => {
    if (prevActive) {
      setPrevActive(false);
      setNextActive(true);
    }
  };
  const prevActiveHandler = () => {
    if (nextActive) {
      setNextActive(false);
      setPrevActive(true);
    }
  };

  return (
    <div className="popularDishes">
      <Food show={modalShow} onHide={() => setModalShow(false)} food={food} />
      <div className="popularDishes__container">
        <div className="popularDishes__title">
          <span>Popular Dishes</span>
          <div className="popularDishes__swiperNavigation">
            <div
              className={`popularDishes__swiperNavigation-button ${
                prevActive ? "popularDishes__swiperNavigation-active" : ""
              }`}
              ref={prevRef}
              onClick={prevActiveHandler}
            >
              <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div
              className={`popularDishes__swiperNavigation-button ${
                nextActive ? "popularDishes__swiperNavigation-active" : ""
              }`}
              ref={nextRef}
              onClick={nextActiveHandler}
            >
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div>
          {listLoading ? (
            "Loading"
          ) : listError ? (
            listError
          ) : (
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              className="popularDishes__swiper"
            >
              {popularDishes.map((menu) => {
                return (
                  <>
                    <SwiperSlide
                      className="popularDishes__slide"
                      onClick={() => {
                        setModalShow(true);
                        setFood(menu);
                      }}
                    >
                      <img src={menu.image} alt="" />
                      <h4>{menu.name}</h4>
                      <div className="popularDishes__slide-star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                      <span>£ {menu.price}</span>
                    </SwiperSlide>
                  </>
                );
              })}{" "}
            </Swiper>
          )}
        </div>
        <Link to="/cart" className="popularDishes__cart">
          <i class="fa-solid fa-basket-shopping"></i>
        </Link>
      </div>
    </div>
  );
}
