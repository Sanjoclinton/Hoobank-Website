import React from "react";
import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className="rounded-full w-[140px] h-[140px] bg-blue-gradient p-0.5 cursor-pointer">
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>{" "}
          </p>
          <img
              src={arrowUp}
              alt="arrowUp"
              className="w-[23px] h-[23px] object-contain"
            />
        </div>
        <p className="font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
