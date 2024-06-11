import { FC, ReactElement, cloneElement, useState } from "react";
import DropDown from "../assets/dropdown.svg";

interface Props {
  text: string;
  children: ReactElement<any>;
}

const Section: FC<Props> = ({ text, children }) => {
  const [open, setOpen] = useState(false);

  const childernwith = cloneElement(children, { hide: setOpen });

  const style = "border-2 border-black rounded flex  transition-[height] ";
  const styleBanner = "items-center justify-between  px-8 py-2 ";
  const handelOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={style + " " + `${open ? "flex-col" : styleBanner}`}>
      <div
        className={
          open
            ? styleBanner + " flex "
            : "flex w-full flex-row justify-between "
        }
      >
        <h2 className="text-xl">{text}</h2>
        <button onClick={handelOpen}>
          <img
            src={DropDown}
            alt={open ? "close pop up" : "open pop up"}
            width={26}
            height={26}
            className={open ? "rotate-180" : ""}
          ></img>
        </button>
      </div>
      <div className={open ? "" : "hidden"}>{childernwith}</div>
    </div>
  );
};

export default Section;
