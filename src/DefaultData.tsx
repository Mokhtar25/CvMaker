import { Info } from "./components/PersonalInfo";
import { WorkInfo } from "./components/workInfo";
import { Data } from "./components/Card";

export const defaultPersonalInfo: Info = {
  firstName: "Adam ",
  lastName: "Sandler",
  phoneNumber: "0158123213",
  email: "example@gamil.com",
  birthDate: "2004-21-12",
  jobTitle: "Software Devloper ",
  website: "Adamsandler.com",
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
