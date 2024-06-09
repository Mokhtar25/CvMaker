import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FormEvent,
  FormEventHandler,
} from "react";
import { useState } from "react";

interface Props {
  uniName: string;
  subject: string;
  endYear: number;
  notes: string;
  submit: () => void;
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
  const inputStyle = "outline-black border-4 border-black block rounded-lg";

  const handelChange = (
    type: string,
    value: React.ChangeEvent<HTMLInputElement>,
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
            onChange={(e) => handelChange("uniName", e)}
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

        <label className="block">
          {"Year"}
          <input
            value={data.endYear}
            type="date"
            className="outline-black border-4 border-black block rounded-lg"
            onChange={(e) => handelChange("endYear", e)}
          />
        </label>

        <label className="block">
          {"Notes"}
          <input
            value={data.notes}
            type="text"
            className="outline-black border-4 border-black block rounded-lg"
            onChange={(e) => handelChange("notes", e)}
          />
        </label>
        <button type="submit"> submit </button>
        <button type="reset" onClick={rest}>
          Rest
        </button>
      </form>
    </div>
  );
};

export default CardEduc;
