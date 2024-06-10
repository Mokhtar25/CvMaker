import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/Card";
import Section from "./components/Section";
import { DisplayEdu } from "./components/DisplayEdu";

// you can passdown functions to help with passing and moving around data that might change and
// also to rint inthe other field and when submit
function App() {
  return (
    <>
      <Header />
      <div className="content flex justify-between h-screen">
        <div className="info w-[35%] ">
          <Section text={"Education"}>
            <Card submit={() => console.log("3")} />
          </Section>
        </div>
        <div className="display w-[65%] flex justify-center">
          <DisplayEdu
            uniName="uniName"
            subject="scince"
            endYear="2023"
            notes="Lorem ipsum dolor sit amet, qui Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatatconsectetur cupidatat."
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
