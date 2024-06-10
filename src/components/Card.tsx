import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FormEvent,
  FormEventHandler,
} from "react";
import { useState } from "react";

interface Props {
  submit: () => void;
  hide: (e: boolean) => void;
}
interface Data {
  uniName: string;
  endYear: string;
  subject: string;
  notes: string;
}

const defaultData: Data = {
  uniName: "",
  subject: "",
  endYear: "",
  notes: "",
};
// you can also use typescript like this {cardName, type} : { cardName: string, type:number}
const CardEduc: FC<Props> = (props) => {
  const [data, setData] = useState<Data>(defaultData);
  const inputStyle =
    "outline-black font-medium border-4 w-[75%] p-1 h-10 border-black block rounded-lg";
  const buttonStyle =
    " rounded-xl text-white p-2 hover:bg-slate-500 active:bg-slate-400 bg-slate-700";

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
    props.hide(false);
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
          />
        </label>
        <label className="block">
          {"Subject"}
          <input
            value={data.subject}
            type="text"
            className={inputStyle}
            onChange={(e) => handelChange("subject", e)}
          />
        </label>

        <label className="block">
          {"Year"}
          <input
            value={data.endYear}
            type="date"
            className={inputStyle}
            onChange={(e) => handelChange("endYear", e)}
          />
        </label>

        <label className="block">
          {"Notes"}
          <textarea
            value={data.notes}
            className={inputStyle + " h-28 "}
            onChange={(e) => handelChange("notes", e)}
          />
        </label>
        <div className="flex justify-between pr-4 flex-row-reverse  py-2">
          {" "}
          <button className={buttonStyle} type="submit">
            Submit
          </button>
          <button type="reset" className={buttonStyle} onClick={rest}>
            Rest
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardEduc;
