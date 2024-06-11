import React, { ChangeEvent, FC } from "react";

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
  hide?: (E: boolean) => void;
  set: React.Dispatch<Info>;
};

const PersonalInfo: FC<Props> = (props: Props) => {
  const handelSubmit = (e: React.FormEvent) => {
    console.log("worked");
    e.preventDefault();
    if (props.hide) props.hide(false);
  };

  const handelOnChange = (type: string, e: ChangeEvent<HTMLInputElement>) => {
    const x = e.target.value;
  };
  const rest = () => {
    // to do
  };

  return (
    <form
      onSubmit={handelSubmit}
      className="border-2 border-black gap-x-6 gap-y-4 font-bold bg-slate-200 text-lg flex flex-wrap p-6"
    >
      <Input
        label={"First Name"}
        type={"text"}
        onChange={(e) => handelOnChange("firstName", e)}
      />
      <Input
        label={"Last Name"}
        type={"text"}
        onChange={(e) => handelOnChange("lastName", e)}
      />
      <Input
        label={"Email"}
        type={"text"}
        onChange={(e) => handelOnChange("email", e)}
      />

      <Input
        label={"Phone Number"}
        type={"tel"}
        onChange={(e) => handelOnChange("phoneNumber", e)}
      />

      <Input
        label={"Job Title"}
        type={"text"}
        onChange={(e) => handelOnChange("jobTitle", e)}
      />

      <Input
        label={"Website"}
        type={"text"}
        onChange={(e) => handelOnChange("Website", e)}
      />

      <Input
        label={"Date of Birth"}
        type={"date"}
        onChange={(e) => handelOnChange("dateOfBirth", e)}
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
