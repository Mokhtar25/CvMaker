import React, { ChangeEvent, FC } from "react";
import { defaultPersonalInfo } from "../DefaultData";

export type Info = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  birthDate: string;
  jobTitle: string;
  website: string;
};

type Props = {
  show?: (E: boolean) => void;
  set: React.Dispatch<Info>;
  data: Info;
};

const PersonalInfo: FC<Props> = ({ show, set, data }) => {
  const handelSubmit = (e: React.FormEvent) => {
    console.log("worked");
    e.preventDefault();
    if (show) show(false);
  };

  const handelOnChange = (type: string, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    switch (type) {
      case "firstName":
        return set({ ...data, firstName: value });
      case "lastName":
        return set({ ...data, lastName: value });
      case "email":
        return set({ ...data, email: value });
      case "website":
        return set({ ...data, website: value });
      case "phoneNumber":
        return set({ ...data, phoneNumber: value });
      case "birthDate":
        return set({ ...data, birthDate: value });
      case "jobTitle":
        return set({ ...data, jobTitle: value });
    }
  };
  const rest = () => {
    return set(defaultPersonalInfo);
  };

  return (
    <form
      onSubmit={handelSubmit}
      className="border-2 border-black gap-x-6 gap-y-4 font-bold bg-slate-200 text-lg flex flex-wrap p-6"
    >
      <Input
        value={data.firstName}
        label={"First Name"}
        type={"text"}
        onChange={(e) => handelOnChange("firstName", e)}
      />
      <Input
        value={data.lastName}
        label={"Last Name"}
        type={"text"}
        onChange={(e) => handelOnChange("lastName", e)}
      />
      <Input
        value={data.email}
        label={"Email"}
        type={"text"}
        onChange={(e) => handelOnChange("email", e)}
      />

      <Input
        value={data.phoneNumber}
        label={"Phone Number"}
        type={"tel"}
        onChange={(e) => handelOnChange("phoneNumber", e)}
      />

      <Input
        value={data.jobTitle}
        label={"Job Title"}
        type={"text"}
        onChange={(e) => handelOnChange("jobTitle", e)}
      />

      <Input
        value={data.website}
        label={"Website"}
        type={"text"}
        onChange={(e) => handelOnChange("website", e)}
      />

      <Input
        value={data.birthDate}
        label={"Date of Birth"}
        type={"date"}
        onChange={(e) => handelOnChange("birthDate", e)}
      />
      <Button
        title="Reset"
        type="reset"
        style=" mt-6 w-20 h-14"
        onClick={() => rest()}
      />
      <Button title="Submit" style=" mt-6 ml-auto mr-20 h-14" type="submit" />
    </form>
  );
};

type ButtonProps = {
  title: string;
  style?: string;
  onClick?: () => void;
  type?: buttonType;
};

type buttonType = "button" | "submit" | "reset" | undefined;

export const Button = ({ title, onClick, style, type }: ButtonProps) => {
  const typeButton: buttonType = "button";
  let buttonStyle =
    "rounded-xl text-white p-2 hover:bg-slate-500 active:bg-slate-400 bg-slate-700";
  if (style) buttonStyle += " " + style;
  return (
    <button
      className={buttonStyle}
      type={type ? type : typeButton}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

type PropsInput = {
  label: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: any;
};
export const Input = ({ label, type, onChange, value }: PropsInput) => {
  const inputStyle =
    "outline-black font-medium border-4 w-56  p-1 h-10 border-black block rounded-lg";
  return (
    <label className="block">
      {label}
      <input
        value={value}
        type={type}
        className={inputStyle + " hover:outline-slate-500"}
        onChange={onChange}
      />
    </label>
  );
};

export default PersonalInfo;
