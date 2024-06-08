import React, { ChangeEvent, ChangeEventHandler, FC } from "react";
import { useState } from "react";

interface Props {
  cardName: string;
}
interface Data {
  uniName: string;
  endYear: number;
  Subject: string;
  notes: string;
}

// you can also use typescript like this {cardName, type} : { cardName: string, type:number}
const Card: FC<Props> = (props) => {
  const [data, setData] = useState<Data>({ uniName: "University" } as Data);

  const handelChange = (
    type: string,
    value: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (type === "name") {
      setData({ ...data, uniName: value.target.value });
    }
  };
  return (
    <div className="border-4 size-64 border-black flex flex-col items-center gap-4 m-4">
      <h2 className="text-xl">{props.cardName}</h2>

      <form>
        <label className="block">
          {"University"}
          <input
            value={data.uniName}
            type="text"
            className="outline-black border-4 border-black block rounded-lg"
            onChange={(e) => handelChange("name", e)}
          />
        </label>
      </form>
    </div>
  );
};

export default Card;
