import { useState } from "react";

import CusHead from "@components/head";
import ProgressBar from "@components/progress-bar";
import Layout from "@components/layout";
import ContactPage from "@components/contact-page";
import ScrollToTop from "@components/scroll-to-top";

const Contact = () => {
  const [progress, setProgress] = useState(0);

  setTimeout(() => {
    const body = document.body;

    body.addEventListener("scroll", () => {
      const scrollPos = body.scrollTop;
      const scrollHeight = body.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollPos / scrollHeight) * 100;

      const progress = Math.round(scrollProgress);
      setProgress(progress);
    });
  }, 50);

  return (
    <>
      <CusHead />
      <main style={{ scrollBehavior: "smooth" }} id="main">
        <ScrollToTop />
        <ProgressBar progress={progress} />
        <Layout child={<ContactPage />} showContactCard={false} />
      </main>
    </>
  );
};

export default Contact;
