import { useState } from "react";

import CustomHead from "@components/head";
import ProgressBar from "@components/progress-bar";
import Layout from "@components/layout";
import CaseStudyPage from "@components/casestudy-page";
import ScrollToTop from "@components/scroll-to-top";

const CaseStudy = () => {
  const [progress, setProgress] = useState(0);

  if (typeof window !== "undefined") {
    const body = document.body;

    body.addEventListener("scroll", () => {
      const scrollPos = body.scrollTop;
      const scrollHeight = body.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollPos / scrollHeight) * 100;

      const progress = Math.round(scrollProgress);
      setProgress(progress);
    });
  }

  return (
    <>
      <CustomHead title="Codeline Consulting|Case Study" />
      <main style={{ scrollBehavior: "smooth" }} id="main">
        <ScrollToTop />
        <ProgressBar progress={progress} />
        <Layout
          contactCardHeading="Let's Discuss How We Can Help You Achieve Similar Results"
          child={<CaseStudyPage />}
        />
      </main>
    </>
  );
};

export default CaseStudy;
