import React, { FC } from "react";

import "./style/DisplayEdu.css";
import { Data } from "./Card";

export const DisplayEdu: FC<Data> = ({ uniName, endYear, notes, subject }) => {
  return (
    <div className="display-card border-2 border-black bg-slate-300 p-10">
      <h2 className="display-subject">{subject}</h2>
      <h5 className="display-uniName">{uniName}</h5>
      <span className="display-endYear">{endYear}</span>
      <p className="display-notes">{notes}</p>
    </div>
  );
};
