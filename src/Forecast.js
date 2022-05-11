import React, { useState } from "react";
import facts from "./sample.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import cloudy from "./cloudy.png";
import clear from "./clear-sky.png";
import snow from "./snow.png";
import rain from "./rain.png";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const celsius = "\u2103";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { temp, weather } = facts[index];

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex > 3) newIndex = 0;
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) newIndex = 3;
      return newIndex;
    });
  };

  const getDay = (index) => {
    const d = new Date();
    let da = d.getDay();
    da = da + index + 1;
    if (da < 7) return days[da];
    else return days[da - 7];
  };
  const checkIc = (text) => {
    if (text.includes("clear")) return clear;
    else if (text.includes("cloudy") || text.includes("clouds")) return cloudy;
    else if (text.includes("snow")) return snow;
    else if (text.includes("rain")) return rain;
  };
  return (
    <>
      <article className="review">
        <div className="rev">
          <h2>{getDay(index)}</h2>
          <h3>Minimum</h3>
          <h3>
            {temp.min}
            {celsius}
          </h3>
          <h3>Maximum</h3>
          <h3>
            {temp.max}
            {celsius}
          </h3>
          <h3>{weather[0].description}</h3>
          <img src={checkIc(weather[0].description)} height="80" alt=""></img>
          <div className="button-container">
            <button className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default Review;
