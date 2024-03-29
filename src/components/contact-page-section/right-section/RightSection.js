import { useState } from "react";
import { motion } from "framer-motion";

import SendIcon from "@assets/send.svg";

import stl from "./RightSection.module.scss";

const RightSection = () => {
  const [animationRight, setAnimationRight] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = () => {
    console.log({ Name: name, Email: email, Message: msg });
    setName("");
    setEmail("");
    setMsg("");
  };

  return (
    <motion.div
      onViewportEnter={() => setAnimationRight(true)}
      className={stl.right}
    >
      <motion.input
        initial={{ opacity: 0, x: 1000 }}
        animate={{
          opacity: animationRight ? 1 : 0,
          x: animationRight ? 0 : 1000,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        type="text"
        name="name"
        value={name}
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}
        className={stl.input}
      />
      <motion.input
        initial={{ opacity: 0, x: 1000 }}
        animate={{
          opacity: animationRight ? 1 : 0,
          x: animationRight ? 0 : 1000,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        type="email"
        name="email"
        value={email}
        placeholder="Your Email"
        onChange={(e) => setEmail(e.target.value)}
        className={stl.input}
      />
      <motion.textarea
        initial={{ opacity: 0, x: 1000 }}
        animate={{
          opacity: animationRight ? 1 : 0,
          x: animationRight ? 0 : 1000,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        placeholder="Tell us about your project and how we can help you achieve your goals..."
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        className={stl.msg}
      ></motion.textarea>
      <motion.button
        initial={{ opacity: 0, y: 500 }}
        animate={{
          opacity: animationRight ? 1 : 0,
          y: animationRight ? 0 : 500,
        }}
        transition={{ type: "spring", stiffness: 50 }}
        onClick={handleSubmit}
        className={stl.submitBtn}
      >
        <SendIcon />
        Send
      </motion.button>
    </motion.div>
  );
};

export default RightSection;
