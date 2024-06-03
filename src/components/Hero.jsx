import React from "react";
import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row  ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discout" className="w-[32px] h-[32px]" />
          <p>
            20% <span className="text-dimWhite">DISCOUNT FOR</span> 1 MONTH{" "}
            <span className="text-dimWhite">ACCOUNT</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-semibold ss:text-[72px] ss:leading[100px] text-[52px]">
            The Next <br className="hidden sm:block" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="hidden ss:flex">
            <GetStarted />
          </div>
        </div>
        <h1 className=" font-semibold ss:text-[68px] ss:leading-[75px] text-[52px]">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-full h-full z-[5]" />
        <div className="absolute z-0 w-2/5 h-[35%] top-0 pink__gradient" />
        <div className="absolute bottom-40 z-[1] w-4/5 h-4/5 rounded-full white__gradient " />
        <div className="absolute z-0 w-1/2 h-1/2 right-20 bottom-20 blue__gradient " />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
