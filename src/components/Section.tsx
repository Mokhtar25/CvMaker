import { FC, useState } from "react";

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
          <button onClick={handelOpen}>-</button>
        </div>

        {props.children}
      </div>
    );
  } else {
    return (
      <div className={style + " " + styleBanner}>
        <h2>{props.text}</h2>
        <button onClick={handelOpen}>+</button>
      </div>
    );
  }
};

export default Section;
