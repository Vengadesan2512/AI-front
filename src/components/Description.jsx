import React from "react";
import { assestsImg } from "../assets/assets";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Generate Stunning AI Art
      </h1>
      <p className="text-gray-500 mb-8">
        Transform your imagination into breathtaking visuals with AI magic!
      </p>
      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          className="w-80 xl:w-96 rounded-lg"
          src={assestsImg.crocodile}
          alt=""
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Unveiling the AI-Powered Text-to-Image Generator: Transform Your
            Words into Stunning Visuals!
          </h2>
          <p className="text-gray-600 mb-4">
            Turn your imagination into reality with our powerful AI image
            generator—completely free! Whether you need breathtaking visuals or
            one-of-a-kind artwork, our tool instantly transforms your words into
            stunning images. Just describe it, and watch your vision come to
            life effortlessly.
          </p>
          <p className="text-gray-600">
            Enter a text prompt, and let our cutting-edge AI craft high-quality
            images in seconds. From product mockups to character designs and
            visionary concepts, bring ideas to life like never before. With
            advanced AI at your fingertips, creativity knows no limits!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
