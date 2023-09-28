import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { listMenu, listMenuCategories } from "../../actions/menuActions";

export default function RegularMenu() {
  const dispatch = useDispatch();
  const [name, setName] = useState("All");
  const [category, setCategory] = useState("All");

  const [activeCategory, setActiveCategory] = useState(0);

  const menuList = useSelector((state) => state.menuList);
  const { loading: listLoading, error: listError, menuLists } = menuList;

  const menuCategories = useSelector((state) => state.menuCategories);
  const {
    loading: categoriesLoading,
    error: categoriesError,
    categories,
  } = menuCategories;

  useEffect(() => {
    dispatch(listMenuCategories());
    dispatch(
      listMenu({
        name: name !== "All" ? name : "",
        category: category !== "All" ? category : "",
      })
    );
  }, [dispatch, name, category]);

  return (
    <div className="regularMenu">
      <div className="regularMenu__container">
        <div className="regularMenu__title">
          <h1>Our Regular Menu Pack</h1>
        </div>
        <div className="regularMenu__filter">
          <Swiper
            slidesPerView={8}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            slideActiveClass
            modules={[FreeMode]}
            className="regularMenu__categories"
          >
            <SwiperSlide
              className={`regularMenu__category ${
                activeCategory === 0 ? "regularMenu__category-active" : ""
              }`}
              onClick={() => {
                setActiveCategory(0);
                setCategory("All");
              }}
            >
              All
            </SwiperSlide>
            {categoriesLoading
              ? "loading"
              : categoriesError
              ? categoriesError
              : categories.map((category, index) => {
                  return (
                    <SwiperSlide
                      onClick={() => {
                        setActiveCategory(index + 1);
                        setCategory(category);
                      }}
                      className={`regularMenu__category ${
                        activeCategory === index + 1
                          ? "regularMenu__category-active"
                          : ""
                      }`}
                    >
                      {category}
                    </SwiperSlide>
                  );
                })}
          </Swiper>
        </div>
        <div className="regularMenu__foods">
          {listLoading
            ? "Loading... "
            : listError
            ? listError
            : menuLists.map((menu) => {
                return (
                  <div className="regularMenu__food">
                    <div className="regularMenu__food-favourite">
                      <i class="fa-regular fa-heart"></i>
                    </div>
                    <img src={menu.image} alt="" />
                    <h4>{menu.name}</h4>
                    <span>£ {menu.price}</span>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
