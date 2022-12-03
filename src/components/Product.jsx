import React, { useState, useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineRight } from "react-icons/ai";
import { TbFileDollar } from "react-icons/tb";

const Product = () => {
  const [rightMenu, setRightMenu] = useState(false);
  const [productMenu, setProductMenu] = useState(false);

  const mainMenuRef = useRef();
  const rightMenuRef = useRef();
  const firstElementRef = useRef();

  const leftMenuData = [
    {
      title: "Bonsai Workflow",
      description:
        "Look professional, win more clients and manage your business from one place",
      icon: <AiOutlineRight size={30} color="gray" />,
      showArrow: true,
      ref: firstElementRef,
    },
    {
      title: "Bonsai Workflow",
      description:
        "Look professional, win more clients and manage your business from one place",
      icon: <AiOutlineRight size={30} color="gray" />,
      showArrow: false,
      ref: null,
    },
    {
      title: "Bonsai Workflow",
      description:
        "Look professional, win more clients and manage your business from one place",
      icon: <AiOutlineRight size={30} color="gray" />,
      showArrow: false,
      ref: null,
    },
  ];

  const rightMenuData = [
    {
      title: "Invoice Details",
      description:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit dolor sit Lorem ipsum  amet consequatur amet consequatur.",
      icon: <TbFileDollar size={25} />,
    },
    {
      title: "Invoice Details",
      description:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit amet consequatur amet consequatur sit Lorem ipsum.",
      icon: <TbFileDollar size={25} />,
    },
    {
      title: "Invoice Details",
      description:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit amet consequatur amet consequatur dolor sit Lorem ipsum  amet consequatur.",
      icon: <AiOutlineRight size={30} color="gray" />,
    },
    {
      title: "Invoice Details",
      description:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit amet consequatur amet consequatur.",
      icon: <TbFileDollar size={25} />,
    },
    {
      title: "Invoice Details",
      description:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit amet consequatur amet consequatur.",
      icon: <TbFileDollar size={25} />,
    },
    {
      title: "Invoice Details",
      description:
        "Lorem ipsum dolor sit Lorem ipsum dolor sit amet consequatur amet consequatur.",
      icon: <TbFileDollar size={25} />,
    },
    {
      title: "Invoice Details",
      description:
        "Lorem ipsum dolor sit Lorem ipsum amet consequatur  amet consequatur dolor sit amet consequatur amet consequatur.",
      icon: <TbFileDollar size={25} />,
    },
    {
      title: "Invoice Details",
      description:
        "Lorem ipsum dolor sit Lorem ipsum dolor amet consequatur  sit amet consequatur amet consequatur.",
      icon: <TbFileDollar size={25} />,
    },
  ];

  useEffect(() => {
    mainMenuRef?.current?.addEventListener("mouseenter", () =>
      setProductMenu(true)
    );
    mainMenuRef?.current?.addEventListener("mouseleave", () =>
      setProductMenu(false)
    );

    rightMenuRef?.current?.addEventListener("mouseenter", () =>
      setRightMenu(true)
    );
    rightMenuRef?.current?.addEventListener("mouseleave", () =>
      setRightMenu(false)
    );

    firstElementRef?.current?.addEventListener("mouseenter", () =>
      setRightMenu(true)
    );
    firstElementRef?.current?.addEventListener("mouseleave", () =>
      setRightMenu(false)
    );
  }, []);

  return (
    <div className="navbar1__product" ref={mainMenuRef}>
      <li>
        <a href="#">Product</a>
        <RiArrowDropDownLine
          style={{ fontWeight: 100 }}
          size={30}
          color="gray"
        />
      </li>
      <div
        className={`navbar1__product-menu ${
          productMenu ? "active" : "non-active"
        }`}
      >
        <div className="navbar1__product-left-menu">
          {leftMenuData.map((item) => {
            return (
              <div className="product-menu" ref={item.ref}>
                <div className="product-menu-item">
                  <div className="product-menu-item-text">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                  <div
                    className={`${
                      rightMenu && item.showArrow ? "active" : "non-active"
                    } product-right-icon`}
                  >
                    {item.icon}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          ref={rightMenuRef}
          className={`${
            rightMenu ? "active" : "non-active"
          } navbar1__product-right-menu`}
        >
          {rightMenuData.map((item) => {
            return (
              <div className="product-right-menu-item">
                <div className="product-right-menu-item-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p style={{ fontSize: "0.9rem" }}>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
