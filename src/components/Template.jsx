import React, { useState, useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbFileDollar } from "react-icons/tb";
import { AiOutlineRight } from "react-icons/ai";

const Template = () => {
  const mainMenuRef = useRef();

  const leftMenuData = [
    {
      button_title: "Contract Templates 1",
      icon: <AiOutlineRight size={20} />,
      rightMenuData: {
        title: "Featured Proposal Templates 1",
        options: [
          {
            title: "Free Contract Maker",
            link: "#",
          },
          {
            title: "Free Contract Maker",
            link: "#",
          },
          {
            title: "Free Contract Maker",
            link: "#",
          },
          {
            title: "Free",
            link: "#",
          },
        ],
      },
    },
    {
      button_title: "Contract Templates 2",
      icon: <AiOutlineRight size={20} />,
      rightMenuData: {
        title: "Featured Proposal Templates 2",
        options: [
          {
            title: "Free Contract Maker",
            link: "#",
          },
          {
            title: "Frhghg",
            link: "#",
          },
          {
            title: "Free Contract Maker",
            link: "#",
          },
          {
            title: "Free Contract Maker",
            link: "#",
          },
        ],
      },
    },
    {
      button_title: "Contract Templates 3",
      icon: <AiOutlineRight size={20} />,
      rightMenuData: {
        title: "Featured Proposal Templates 3",
        options: [
          {
            title: "Free Contract",
            link: "#",
          },
          {
            title: "Free Contract Maker",
            link: "#",
          },
          {
            title: "Free Contract Maker",
            link: "#",
          },
          {
            title: "Free Contract Maker",
            link: "#",
          },
        ],
      },
    },
    {
      button_title: "Contract Templates 4",
      icon: <AiOutlineRight size={20} />,
      rightMenuData: {
        title: "Featured Proposal Templates 4",
        options: [
          {
            title: "Free Contract Maker",
            link: "#",
          },
          {
            title: "Free Contract Maker",
            link: "#",
          },
          {
            title: "Free Contract",
            link: "#",
          },
          {
            title: "Free Contract Maker",
            link: "#",
          },
        ],
      },
    },
    {
      button_title: "Contract Templates 5",
      icon: <AiOutlineRight size={20} />,
      rightMenuData: {
        title: "Featured Proposal Templates 5",
        options: [
          {
            title: "Free Contract Maker",
            link: "#",
          },
          {
            title: "Free Contract Maker",
            link: "#",
          },
          {
            title: "Free Contract Maker",
            link: "#",
          },
          {
            title: "Free ",
            link: "#",
          },
        ],
      },
    },
    
    {
      button_title: "Contract Templates 7",
      icon: <AiOutlineRight size={20} />,
      rightMenuData: {
        title: "Featured Proposal Templates 7",
        options: [
          {
            title: "Free ",
            link: "#",
          },
          {
            title: "Free Contract Maker",
            link: "#",
          },
          {
            title: "Free Contract Maker",
            link: "#",
          },
          {
            title: "Free Contract Maker",
            link: "#",
          },
        ],
      },
    },
  ];

  const [productMenu, setProductMenu] = useState(false);
  const [rightMenuNumber, setRightMenuNumber] = useState(0);

  useEffect(() => {
    mainMenuRef?.current?.addEventListener("mouseenter", () =>
      setProductMenu(true)
    );
    mainMenuRef?.current?.addEventListener("mouseleave", () =>
      setProductMenu(false)
    );
  }, []);

  return (
    <div className="navbar1__template" ref={mainMenuRef}>
      <li>
        <a href="#">Templates</a>
        <RiArrowDropDownLine
          style={{ fontWeight: 100 }}
          size={30}
          color="gray"
        />
      </li>
      <div
        className={`navbar1__template-menu ${
          productMenu ? "active:" : "non-active"
        }`}
      >
        <div className="navbar1__template-left-menu">
          {leftMenuData.map((item, index) => {
            return (
              <TemplateItem
                item={item}
                index={index}
                setRightMenuNumber={setRightMenuNumber}
              />
            );
          })}
        </div>
        <div className="navbar1__template-right-menu">
          <div className="navbar1__template-right-menu-title">
            <h3>{leftMenuData[rightMenuNumber].rightMenuData.title}</h3>
          </div>
          <div className="navbar1__template-right-menu-options">
            {leftMenuData[rightMenuNumber].rightMenuData.options.map((item) => {
              return (
                <div className="navbar1__template-right-menu-option">
                  <a href={`${item.link}`}>{item.title}</a>
                </div>
              );
            })}
          </div>
          <div className="all-templates-option">
            <a href="#">See All Templates</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TemplateItem = ({ item, index, setRightMenuNumber }) => {
  const itemRef = useRef();
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    itemRef?.current?.addEventListener("mouseenter", () => {
      console.log(index, "entered");
      setShowIcon(true);
      setRightMenuNumber(index);
    });

    itemRef?.current?.addEventListener("mouseleave", () =>
      setShowIcon(false)
    );
  }, []);

  return (
    <div className="navbar1__template-left-menu-item" ref={itemRef}>
      <div className="navbar1__template-left-menu-item-box">
        <div className={`navbar1__template-left-menu-item-box-icon`}>
          <TbFileDollar size={25} color="gray" />
        </div>
        <h3>{item.button_title}</h3>
      </div>
      <div className={`${showIcon ? "active" : "non-active"}`}>{item.icon}</div>
    </div>
  );
};

export default Template;
