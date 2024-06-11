import { ChangeEvent, FC } from "react";
import { Button, Input } from "./PersonalInfo";
import { defaultWorkInfo } from "../DefaultData";

export type WorkInfo = {
  location: string;
  startDate: string;
  company: string;
  finishDate: string;
  jobTitle: string;
  notes: string;
};

interface Props {
  set: React.Dispatch<WorkInfo>;
  show?: (type: boolean) => void;
  data: WorkInfo;
}

const WorkInput: FC<Props> = ({ set, show, data }) => {
  const handelChange = (type: string, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    switch (type) {
      case "location":
        return set({ ...data, location: value });
      case "startDate":
        return set({ ...data, startDate: value });
      case "finishDate":
        return set({ ...data, finishDate: value });
      case "company":
        return set({ ...data, company: value });
      case "notes":
        return set({ ...data, notes: value });
      case "jobTitle":
        return set({ ...data, jobTitle: value });
    }
  };

  const reset = () => {
    set(defaultWorkInfo);
  };
  const handelSubmit = () => {
    if (show) show(true);
  };
  return (
    <form onSubmit={handelSubmit}>
      <Input
        type="string"
        label="Company Name"
        value={data.company}
        onChange={(e) => handelChange("company", e)}
      />
      <Input
        type="string"
        label="Job Title"
        value={data.jobTitle}
        onChange={(e) => handelChange("jobTitle", e)}
      />
      <Input
        type="string"
        label="Start Date"
        value={data.startDate}
        onChange={(e) => handelChange("startDate", e)}
      />
      <Input
        type="string"
        label="End date"
        value={data.finishDate}
        onChange={(e) => handelChange("finishDate", e)}
      />
      <Input
        type="string"
        label="Location"
        value={data.location}
        onChange={(e) => handelChange("location", e)}
      />
      <Input
        type="string"
        label="Desription"
        value={data.notes}
        onChange={(e) => handelChange("notes", e)}
      />

      <Button title="Reset" type="reset" onClick={() => reset()} />
      <Button title="Submit" type="submit" onClick={() => handelSubmit()} />
    </form>
  );
};
export default WorkInput;
