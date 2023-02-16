import { useState } from "react";
import { motion } from "framer-motion";

import UpperSection from "@components/careerspage-sections/upper-section";
import ReadMoreBtn from "@components/read-more-btn";

import stl from "./CareersSection.module.scss";

const CareersSection = () => {
  const [animation, setAnimation] = useState(false);

  return (
    <div className={stl.careersSection}>
      <UpperSection />
      <motion.div
        onViewportEnter={() => setAnimation(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: animation ? 1 : 0,
          opacity: animation ? 1 : 0,
        }}
        className={stl.btnContainer}
      >
        <ReadMoreBtn link="/careers.html" variant="secondary" />
      </motion.div>
    </div>
  );
};

export default CareersSection;
