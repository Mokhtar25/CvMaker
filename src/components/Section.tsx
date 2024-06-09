import { FC, useState } from "react";
import DropDown from "../assets/dropdown.svg";
import DropUp from "../assets/dropup.svg";

interface Props {
  text: string;
  children: React.ReactNode;
}

const Section: FC<Props> = (props: Props) => {
  const [open, setOpen] = useState(false);

  const style =
    "border-2 border-black rounded flex w-[25%] transition-[height] ";
  const styleBanner = "items-center justify-between  px-8 py-2 ";
  const handelOpen = () => {
    setOpen(!open);
  };

  if (open) {
    return (
      <div className={style + " flex-col "}>
        <div className={styleBanner + " flex "}>
          <h2>{props.text}</h2>
          <button onClick={handelOpen}>
            <img
              src={DropDown}
              alt="Close Pop up"
              width={22}
              height={22}
              className="rotate-180"
            ></img>
          </button>
        </div>

        {props.children}
      </div>
    );
  } else {
    return (
      <div className={style + " " + styleBanner}>
        <h2>{props.text}</h2>
        <button onClick={handelOpen}>
          <img src={DropDown} alt="dropdown" width={22} height={22}></img>
        </button>
      </div>
    );
  }
};

export default Section;
