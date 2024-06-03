import { clients } from "../constants";
import styles from "../styles";

const Clients = () => {
  return (
    <section id="clients" className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full gap-10`}>
        {clients.map((client, index) => (
          <div key={client.id} className={`${styles.flexCenter} w-[120px] sm:min-w-[192px]`}>
            <img src={client.logo} alt="client" className="w-[100px] sm:w-[192px] object-contain hover:filter-white " />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
