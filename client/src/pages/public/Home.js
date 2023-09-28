import React from "react";
import Footer from "../../components/public/Footer";
import Header from "../../components/public/Header";
import News from "../../components/public/News";
import PhotoGallery from "../../components/public/PhotoGallery";
import PopularDishes from "../../components/public/PopularDishes";
import RegularMenu from "../../components/public/RegularMenu";
import Video from "../../components/public/Video";

export default function Home() {
  return (
    <div>
      <Header />
      <PopularDishes />
      <RegularMenu />
      <News />
      <Video />
      <PhotoGallery />
      <Footer />
    </div>
  );
}
