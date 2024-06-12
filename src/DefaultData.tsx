import { Info } from "./components/PersonalInfo";
import { WorkInfo } from "./components/workInfo";
import { Data } from "./components/Card";

export const defaultPersonalInfo: Info = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  birthDate: "",
  jobTitle: "",
  website: "",
};

export const defaultWorkInfo: WorkInfo = {
  location: "",
  company: "Startbucks",
  startDate: "",
  finishDate: "",
  notes: "",
  jobTitle: "",
};

export const defaultData: Data = {
  uniName: "Paderborn",
  subject: "",
  endYear: "",
  notes: "",
};
