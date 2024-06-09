import { FC, useState } from "react";

interface Props {
  text: string;
  children: React.ReactNode;
}

const Section: FC<Props> = (props: Props) => {
  const [open, setOpen] = useState(true);

  const handelOpen = () => {
    setOpen(!open);
  };

  if (open) {
    return (
      <div className="Border-2 border-black rounded h-24 w-52">
        <h2>{props.text}</h2>
        <button onClick={handelOpen}>-</button>
        {props.children}
      </div>
    );
  } else {
    return (
      <div className="Border-2 border-black rounded h-24 w-52">
        <h2>{props.text}</h2>
        <button onClick={handelOpen}>+</button>
      </div>
    );
  }
};

export default Section;
