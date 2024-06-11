import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/Card";
import Section from "./components/Section";
import { DisplayEdu } from "./components/DisplayEdu";
import PersonalInfo from "./components/PersonalInfo";
import { defaultPersonalInfo } from "./DefaultData";

import { Info } from "./components/PersonalInfo";
import { Data } from "./components/Card";
import { defaultData } from "./components/Card";

// you can passdown functions to help with passing and moving around data that might change and
// also to rint inthe other field and when submit

function App() {
  const [eduInfo, setEduInfo] = useState<Data>(defaultData);
  const [perInfo, setPerInfo] = useState<Info>(defaultPersonalInfo);

  return (
    <>
      <Header />
      <div className="content flex justify-between h-screen">
        <div className="info w-[35%] ">
          <Section text="Personal Information">
            <PersonalInfo set={setPerInfo} data={perInfo} />
          </Section>
          <Section text={"Education"}>
            <Card submit={setEduInfo} />
          </Section>
        </div>
        <div className="display w-[65%] flex items-center flex-col bg-slate-200">
          <DisplayEdu
            uniName="uniName"
            subject="scince"
            endYear="2023"
            notes="Lorem ipsum dolor sit amet, qui Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatatconsectetur cupidatat."
          />
          {eduInfo.subject && (
            <DisplayEdu
              uniName={eduInfo.uniName}
              subject={eduInfo.subject}
              notes={eduInfo.notes}
              endYear={eduInfo.endYear}
            />
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
