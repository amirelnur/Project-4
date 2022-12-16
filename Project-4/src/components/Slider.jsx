import React from "react";
import "./Slider.css";

const Slider = () => {

  return (
    <div class="slider">
      <span id="slide-1"></span>
      <span id="slide-2"></span>
      <span id="slide-3"></span>
      <div class="image-container">
        <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/c02e3c5c-7df6-45d3-bcbb-2a545262f2ae/300x450" class="slide" width="500" height="300" />
        <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/c25d2f78-83ab-4157-8f4b-458de395c4e4/600x900" class="slide" width="500" height="300" />
        <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/de97ca1f-aa9e-4452-97cb-fb7c49407600/300x450" class="slide" width="500" height="300" />
      </div>
      <div class="buttons">
        <a href="#slide-1"></a>
        <a href="#slide-2"></a>
        <a href="#slide-3"></a>
      </div>
    </div>
  );
};

export default Slider;
