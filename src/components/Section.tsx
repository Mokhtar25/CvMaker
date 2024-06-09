import { FC, useState } from "react";
import DropDown from "../assets/dropdown.svg";

interface Props {
  text: string;
  children: React.ReactNode;
}

const Section: FC<Props> = (props: Props) => {
  const [open, setOpen] = useState(true);

  const style =
    "border-2 border-black rounded flex w-[25%] transition-[height] ";
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
        <h2 className="text-xl">{props.text}</h2>
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
      <div className={open ? "" : "hidden"}>{props.children}</div>
    </div>
  );
};

export default Section;
