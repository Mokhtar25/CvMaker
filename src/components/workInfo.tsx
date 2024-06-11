import { ChangeEvent, FC } from "react";
import { Button, Input } from "./PersonalInfo";

type WorkInfo = {
  location: string;
  startDate: string;
  company: string;
  finishDate: string;
  jobTitle: string;
  notes: string;
};

interface Props {
  set: React.SetStateAction<WorkInfo>;
  show?: (type: boolean) => void;
  data: WorkInfo;
}

const workInfo: FC<Props> = ({ set, show, data }) => {
  const handelChange = (type: string, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
  };

  const reset = () => {
    // to do
    set();
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
