import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/Card";
import Section from "./components/Section";
import { DisplayEdu } from "./components/DisplayEdu";
import PersonalInfo from "./components/PersonalInfo";
import WorkInput from "./components/workInfo";
import DisplayWork from "./components/displayWork";
import DisplayPersonalInfo from "./components/DisplayPersonalInfo";

import { WorkInfo } from "./components/workInfo";
import { defaultWorkInfo } from "./DefaultData";
import { defaultPersonalInfo } from "./DefaultData";
import { Info } from "./components/PersonalInfo";
import { Data } from "./components/Card";
import { defaultData } from "./DefaultData";

// you can passdown functions to help with passing and moving around data that might change and
// also to rint inthe other field and when submit

function App() {
  // if you wanna set up data or instlize data use 'useEffect() and with and empty array, that function get called only
  // on insital redreder'
  const [eduInfo, setEduInfo] = useState<Data>(defaultData);
  const [perInfo, setPerInfo] = useState<Info>(defaultPersonalInfo);
  const [workInfo, setWorkInfo] = useState<WorkInfo>(defaultWorkInfo);

  return (
    <div className="h-[100%] ">
      <Header />
      <div className="flex justify-between min-h-screen h-full ">
        <div className="info w-2/4 ">
          <Section text="Personal Information">
            <PersonalInfo set={setPerInfo} data={perInfo} />
          </Section>
          <Section text={"Education"}>
            <Card submit={setEduInfo} />
          </Section>

          <Section text="Work Experiance">
            <WorkInput data={workInfo} set={setWorkInfo} />
          </Section>
        </div>
        <div
          className="display w-full flex items-center flex-col bg-slate-100 "
          id="display"
        >
          <div className="w-full">
            <DisplayPersonalInfo data={perInfo} />
            <span className="text-4xl py-4 font-bold  flex justify-center">
              Education
            </span>
            {eduInfo.subject && (
              <DisplayEdu
                uniName={eduInfo.uniName}
                subject={eduInfo.subject}
                notes={eduInfo.notes}
                endYear={eduInfo.endYear}
              />
            )}
          </div>
          <span className="text-4xl py-4 font-bold  flex justify-center">
            Professional Experience
          </span>

          {workInfo.company && <DisplayWork data={workInfo} />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
