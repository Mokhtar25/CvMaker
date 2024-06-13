import { FC } from "react";
import { WorkInfo } from "./workInfo";

interface Props {
  data: WorkInfo;
}
const DisplayWork: FC<Props> = ({ data }) => {
  return (
    <div className="display-card border-black w-full p-10 gap-2">
      <h2 className="display-subject text-3xl">{data.jobTitle}</h2>
      <h5 className="display-uniName text-xl text-gray-600">{data.company}</h5>
      <span className="display-endYear  text-gray-600 text-xl">
        {data.startDate} - {data.finishDate}
      </span>
      <span className="display-endYear relative top-10 right-1 text-gray-600 text-xl">
        &#9908; {data.location}
      </span>
      <p className="display-notes">{data.notes}</p>
    </div>
  );
};

export default DisplayWork;
