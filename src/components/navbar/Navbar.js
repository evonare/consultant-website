import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import Logo from "@assets/logo.svg";
import ArrowDown from "@assets/arrow-down.svg";
import ArrowNext from "@assets/arrow-right.svg";

import stl from "./Navbar.module.scss";

const Navbar = () => {
  const [dropDownItems, setDropDownItems] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  const [dropDownName, setDropDownName] = useState("");
  const [dropDownMenu, setDropDownMenu] = useState({
    careers: false,
    services: false,
    how_we_work: false,
  });

  const openDropDown = (name) => {
    if (name) {
      dropDownMenu[dropDownName] = true;
      setDropDown(true);
    } else {
      setDropDownName("");
      setDropDown(false);
    }
  };

  const { careers, services, how_we_work } = dropDownMenu;

  const handleHover = (name) => {
    getDropDownData(name);
    openDropDown(name);
  };

  const handleHoverOut = () => {
    setDropDown(false);
    dropDownMenu[dropDownName] = false;
    setDropDownItems([]);
  };

  const getDropDownData = (name) => {
    setDropDownName(name);

    const services = [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Design", href: "/services/design" },
      { name: "Fintech", href: "/services/fintech" },
      { name: "Machine Learning", href: "/services/machine-learning" },
      { name: "DevOps", href: "/services/devOps" },
      { name: "Mobile Development", href: "/services/mobile-development" },
      { name: "MLOps", href: "/services/mlOps" },
      { name: "Blockchain", href: "/services/blockchain" },
      { name: "Testing", href: "/services/testing" },
    ];

    const how_we_work = [
      { name: "Product Delivery", href: "/how-we-work/product-delivery" },
      { name: "Staff Augmentation", href: "/how-we-work/staff-augmentation" },
      { name: "Agile Playbook", href: "/how-we-work/agile-playbook" },
    ];

    const careers = [
      { name: "We are Hiring", href: "/careers/we-are-hiring" },
      {
        name: "Candidate Referral Program",
        href: "/careers/candidate-referral",
      },
    ];

    if (name === "services") {
      setDropDownItems(services);
    } else if (name === "how_we_work") {
      setDropDownItems(how_we_work);
    } else if (name === "careers") {
      setDropDownItems(careers);
    }
  };

  const getPathName = () => {
    let pathname = location.pathname;
    handleHoverOut;
    return pathname;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ type: "spring", stiffness: 50 }}
      style={{ originY: 0 }}
      className={clsx(stl.navbar, dropDown ? stl.hideShadow : stl.showShadow)}
    >
      <div className={stl.main}>
        <div
          onClick={() => {
            if (getPathName() !== "/") {
              location.href = "/";
            }
          }}
          className={stl.left}
        >
          <Logo />
        </div>
        <ul id="mainList" className={stl.right}>
          <li
            id="careers"
            onMouseOver={() => handleHover("careers")}
            onClick={() => console.log("Clicked...")}
            className={careers ? stl.rotateCar : stl.undoRotate}
          >
            Careers <ArrowDown />
          </li>
          <li
            onMouseOver={() => setDropDown(false)}
            onClick={() => console.log("Clicked...")}
          >
            Case Studies
          </li>
          <li
            id="services"
            onMouseOver={() => handleHover("services")}
            onClick={() => console.log("Clicked...")}
            className={services ? stl.rotateSer : stl.undoRotate}
          >
            Services <ArrowDown />
          </li>
          <li
            id="how_we_work"
            onMouseOver={() => handleHover("how_we_work")}
            onClick={() => console.log("Clicked...")}
            className={how_we_work ? stl.rotateHow : stl.undoRotate}
          >
            How We Work <ArrowDown />
          </li>
          <li
            onMouseOver={() => setDropDown(false)}
            onClick={() => console.log("Clicked...")}
          >
            Blog
          </li>
        </ul>
      </div>
      <motion.div
        onMouseLeave={handleHoverOut}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: dropDown ? 1 : 0, scaleY: dropDown ? 1 : 0 }}
        style={{ originY: 0 }}
        transition={{ duration: 0.3 }}
        className={stl.dropDownContainer}
      >
        <ul
          id="dropDown"
          className={clsx(
            stl.dropDown,
            dropDown ? stl.showDropDown : stl.hideDropDown
          )}
        >
          {dropDownItems.map((list, i) => (
            <li
              onClick={() => console.log("Clicked...")}
              key={i}
              className={stl.dropDownItem}
            >
              {list.name} <ArrowNext />
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
