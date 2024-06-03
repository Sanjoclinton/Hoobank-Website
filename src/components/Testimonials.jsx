import { feedback } from "../constants";
import styles from "../styles";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      {/* TODO */}
      <div className="absolute z-0 w-3/5 h-3/5 -right-1/2 rounded-full blue__gradient "/>
      <div className="w-full flex justify-between items-start md:items-center flex-col md:flex-row mb-6 sm:mb-16 relative z-[1]">
        <h1 className={styles.heading2}>
          What people are <br className="hidden sm:block" />
          saying about us
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-6 `}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center sm:justify-between feedback-container relative z-[1]">
        {feedback.map((card, index) => (
          <FeedbackCard key={card.id} content={card.content} name={card.name} title={card.title} img={card.img} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
