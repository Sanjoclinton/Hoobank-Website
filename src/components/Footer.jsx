import styles from "../styles";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10 ">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72px] object-contain "
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap mt-10 md:mt-0">
          {footerLinks.map((footerlink, index) => (
            <div
              key={index}
              className="flex flex-col my-4 ss:my-0 min-w-[150px]"
            >
              <h4 className="text-[18px] leading-[32px] font-medium">
                {footerlink.title}
              </h4>
              <ul className="mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`text-dimWhite hover:text-secondary ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center flex-col md:flex-row justify-between w-full pt-6 border-t-[1px] border-t-[#3f3e45] ">
        <p className=" text-center text-[18px] leading-[32px] text-dimWhite ">
          Copyright 2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row mt-6 md:mt-0 items-center">
          {socialMedia.map((social, index) => (
            <a key={social.id} href={social.link}>
              <img
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-4" : "mr-0"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
