import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import ContactUsCard from "@components/cards/contact-us-card";
import usefulLinks from "@components/data/footer-data";

import Logo from "@assets/logo.svg";
import LocationIcon from "@assets/location.svg";
import PhoneIcon from "@assets/phone.svg";
import MailIcon from "@assets/mail.svg";
import FacebookIcon from "@assets/facebook-white.svg";
import FacebookIcon2 from "@assets/facebook-black.svg";
import TwitterIcon from "@assets/twitter-white.svg";
import TwitterIcon2 from "@assets/twitter-black.svg";
import LinkedInIcon from "@assets/linkedIn-white.svg";
import LinkedInIcon2 from "@assets/linkedIn-black.svg";
import GithubIcon from "@assets/github-white.svg";
import GithubIcon2 from "@assets/github-black.svg";

import stl from "./Footer.module.scss";

const Footer = ({ contactCardHeading, showContactCard }) => {
  const [animation, setAnimation] = useState(false);

  return (
    <div className={stl.footerContainer} id="footer">
      {showContactCard && (
        <div className={stl.section}>
          <ContactUsCard
            heading={contactCardHeading}
            customClass={stl.contCard}
          />
        </div>
      )}
      <motion.div
        onViewportEnter={() => setAnimation(true)}
        className={stl.footer}
      >
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{
            x: animation ? 0 : -500,
            opacity: animation ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          className={stl.section1}
        >
          <div onClick={() => (location.href = "/")} className={stl.logo}>
            <Logo />
          </div>
          <span onClick={() => (location.href = "")} className={stl.location}>
            <LocationIcon />
            <span className={stl.address}>
              <span>Akshya Nagar 1st Block 1st Cross</span>
              <span>Rammurthy nagar</span> <span>Bangalore-560016</span>
            </span>
          </span>
          <span className={stl.contact}>
            <PhoneIcon />
            +1-202-555-0128
          </span>
          <span
            onClick={() => (location.href = "mailto:support@company.com")}
            className={stl.email}
          >
            <MailIcon />
            support@company.com
          </span>
          <span className={stl.company}>Codeline Consulting &copy; 2023</span>
        </motion.div>
        <motion.div
          initial={{ y: 500, opacity: 0 }}
          animate={{
            y: animation ? 0 : 500,
            opacity: animation ? 1 : 0,
          }}
          className={stl.section2}
        >
          {usefulLinks.map((item, i) => (
            <div key={i} className={stl.col}>
              <span onClick={() => (location.href = "")} className={stl.head}>
                {item.name}
              </span>
              {item.childs.map((item, i) => (
                <span key={i} onClick={() => (location.href = "")}>
                  {item.childName}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{
            x: animation ? 0 : 500,
            opacity: animation ? 1 : 0,
          }}
          className={stl.section3}
        >
          <h2 className={stl.heading}>About us</h2>
          <p className={stl.desc}>
            Our team of experienced web developers is dedicated to helping
            businesses grow by providing high-quality consultation services. We
            offer a range of services including web design, development, and
            maintenance, as well as e-commerce solutions and web hosting. Our
            mission is to help businesses achieve their goals through customized
            and innovative web development solutions. Thank you for visiting our
            website and we look forward to helping your business succeed!"
          </p>
          <div className={stl.social}>
            <button
              onClick={() => (location.href = "")}
              className={clsx(stl.socialBtn, stl.btn1)}
            >
              <FacebookIcon2 className={stl.iconPrimary} />
              <FacebookIcon className={stl.iconSecondary} />
            </button>
            <button
              onClick={() => (location.href = "")}
              className={clsx(stl.socialBtn, stl.btn2)}
            >
              <TwitterIcon2 className={stl.iconPrimary} />
              <TwitterIcon className={stl.iconSecondary} />
            </button>
            <button
              onClick={() => (location.href = "")}
              className={clsx(stl.socialBtn, stl.btn3)}
            >
              <LinkedInIcon2 className={stl.iconPrimary} />
              <LinkedInIcon className={stl.iconSecondary} />
            </button>
            <button
              onClick={() => (location.href = "")}
              className={clsx(stl.socialBtn, stl.btn4)}
            >
              <GithubIcon2 className={stl.iconPrimary} />
              <GithubIcon className={stl.iconSecondary} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

Footer.defaultProps = {
  showContactCard: true,
};

Footer.propTypes = {
  showContactCard: PropTypes.bool,
  contactCardHeading: PropTypes.string,
};

export default Footer;
