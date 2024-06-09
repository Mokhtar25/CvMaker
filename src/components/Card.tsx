import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FormEvent,
  FormEventHandler,
} from "react";
import { useState } from "react";

interface Props {
  inputs: string[];
  isActive?: any;
}
interface Data {
  uniName: string;
  endYear: number;
  subject: string;
  notes: string;
}

const defaultData: Data = {
  uniName: "",
  subject: "",
  endYear: 2024,
  notes: "",
};
// you can also use typescript like this {cardName, type} : { cardName: string, type:number}
const Card: FC<Props> = (props) => {
  const [data, setData] = useState<Data>(defaultData);
  const inputStyle = "outline-black border-4 border-black block rounded-lg";
  const handelChange = (
    type: string,
    value: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (type === "name") {
      return setData({ ...data, uniName: value.target.value });
    }
    if (type === "subject") {
      return setData({ ...data, subject: value.target.value });
    }
  };
  const rest = () => {
    setData(defaultData);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="border-2 border-red-500 flex flex-col gap-4 pl-6">
      <form onSubmit={handleSubmit}>
        <label className="block">
          {"University"}
          <input
            value={data.uniName}
            type="text"
            className="outline-black border-4 border-black block rounded-lg"
            onChange={(e) => handelChange("name", e)}
          />
        </label>
        <label className="block">
          {"Subject"}
          <input
            value={data.subject}
            type="text"
            className="outline-black border-4 border-black block rounded-lg"
            onChange={(e) => handelChange("subject", e)}
          />
        </label>
        {props.inputs.map((e) => (
          <label className="block">
            {e}
            <input
              value={data.subject}
              type="text"
              className={inputStyle}
              onChange={(e) => handelChange("subject", e)}
            />
          </label>
        ))}

        <button type="submit"> submit </button>
        <button type="reset" onClick={rest}>
          Rest
        </button>
      </form>
    </div>
  );
};

export default Card;
