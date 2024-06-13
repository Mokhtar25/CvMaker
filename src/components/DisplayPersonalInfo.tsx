import { FC } from "react";
import { Info } from "./PersonalInfo";

interface Props {
  data: Info;
}
const DisplayPersonalInfo: FC<Props> = ({ data }) => {
  const infoStyle = "text-xl text-slate-600 font-light";
  return (
    <div className="bg-cyan-50 w-full p-8">
      <h2 className="after:w-full after:block after:bg-slate-600 after:content-[''] after:h-2  text-6xl font-bold pt-8">
        {data.firstName + " "} {data.lastName}
      </h2>

      <div className="flex justify-between">
        <span className="text-4xl text-slate-600">{data.jobTitle}</span>
        <span className="text-slate-700 text-xl">{data.website}</span>
      </div>
      <div className="pt-16 text-2xl text-slate-500">Personal Information</div>
      <div className="flex flex-col">
        <span className={infoStyle}>Email : {data.email}</span>
        <span className={infoStyle}>Phone Number : {data.phoneNumber}</span>
        <span className={infoStyle}>Date of Birth : {data.birthDate}</span>
      </div>
    </div>
  );
};

export default DisplayPersonalInfo;
