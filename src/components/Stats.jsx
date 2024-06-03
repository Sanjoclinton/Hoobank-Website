import { stats } from "../constants";
import styles from "../styles";


const Stats = () =>  (
    <section className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20 justify-between gap-3`} >
      {stats.map((stat) => (
        <div key={stat.id } className="flex items-center flex-1">
          <h4 className="font-semibold text-[30px] xs:text-[40px] leading-[43px] xs:leading-[53px] ">{stat.value}</h4>
          <p className="font-semibold text-[15px] xs:text-[20px] leading-[21px] xs:leading-[26px] uppercase ml-3 text-dimWhite " >{stat.title}</p>
        </div>
      ))}
    </section>
)

export default Stats