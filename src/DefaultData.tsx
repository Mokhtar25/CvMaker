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
  location: "New york city",
  company: "Startbucks",
  startDate: "2021",
  finishDate: "2022",
  notes:
    "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  jobTitle: "Barista",
};

export const defaultData: Data = {
  uniName: "Paderborn",
  subject: "Computer Sciecne",
  endYear: "2021",
  notes:
    "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.§",
};
