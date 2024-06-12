import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FormEvent,
  FormEventHandler,
} from "react";
import { useState } from "react";
import { defaultData } from "../DefaultData";

interface Props {
  submit: React.Dispatch<React.SetStateAction<Data>>;
  show?: (e: boolean) => void;
}
export interface Data {
  uniName: string;
  endYear: string;
  subject: string;
  notes: string;
}

// you can also use typescript like this {cardName, type} : { cardName: string, type:number}
const CardEduc: FC<Props> = (props) => {
  const [data, setData] = useState<Data>(defaultData);
  const inputStyle =
    "outline-black font-medium border-4 w-[75%] p-1 h-10 border-black block rounded-lg";
  const buttonStyle =
    " rounded-xl text-white p-2 hover:bg-slate-500 active:bg-slate-400 bg-slate-700 w-full";

  const handelChange = (
    type: string,
    value:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    switch (type) {
      case "uniName":
        return setData({ ...data, uniName: value.target.value });

      case "subject":
        return setData({ ...data, subject: value.target.value });

      case "endYear":
        return setData({ ...data, endYear: value.target.value });
      case "notes":
        return setData({ ...data, notes: value.target.value });
    }
  };
  const rest = () => {
    setData(defaultData);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (props.show) props.show(false);
    props.submit(data);
  };
  return (
    <div className="border-2    bg-slate-200 font-bold flex flex-col gap-4 pl-6 ">
      <form onSubmit={handleSubmit}>
        <label className="block">
          {"University"}
          <input
            value={data.uniName}
            type="text"
            className={inputStyle}
            onChange={(e) => handelChange("uniName", e)}
            required
          />
        </label>
        <label className="block">
          {"Subject"}
          <input
            value={data.subject}
            type="text"
            className={inputStyle}
            required
            onChange={(e) => handelChange("subject", e)}
          />
        </label>

        <label className="block">
          {"Year"}
          <input
            value={data.endYear}
            required
            min={1970}
            max={2040}
            type="number"
            className={inputStyle}
            onChange={(e) => handelChange("endYear", e)}
          />
        </label>

        <label className="block">
          {"Notes"}
          <textarea
            value={data.notes}
            className={inputStyle + " h-fit min-h-20 max-h-72"}
            onChange={(e) => handelChange("notes", e)}
            required
          />
        </label>
        <div className="flex gap-6 py-4 pr-4">
          <button type="reset" className={buttonStyle} onClick={rest}>
            Rest
          </button>
          <button className={buttonStyle} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardEduc;
