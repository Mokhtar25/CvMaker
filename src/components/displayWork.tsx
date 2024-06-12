import { FC } from "react";
import { WorkInfo } from "./workInfo";

interface Props {
  data: WorkInfo;
}
const DisplayWork: FC<Props> = ({ data }) => {
  return (
    <div className="display-card border-2 border-black bg-slate-300 p-10 gap-2">
      <h2 className="display-subject text-3xl">{data.jobTitle}</h2>
      <h5 className="display-uniName text-xl text-gray-600">{}</h5>
      <span className="display-endYear pl-[70%] text-gray-600 text-xl">{}</span>
      <p className="display-notes">{}</p>
    </div>
  );
};

export default DisplayWork;
