import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-full h-full object-contain relative z-[5] "
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient " />
        <div className="absolute z-0 -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient " />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Esily control your <br className="hidden sm:block" />
          billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
          <img src={apple} alt="apple play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer " />
          <img src={google} alt="google play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer " />
        </div>
      </div>
    </section>
  );
};

export default Billing;
