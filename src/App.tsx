import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/Card";
import Section from "./components/Section";

// you can passdown functions to help with passing and moving around data that might change and
// also to rint inthe other field and when submit
function App() {
  return (
    <>
      <Header />
      <Section text={"Education"}>
        <Card
          uniName="s"
          subject="ad"
          endYear="2025"
          submit={() => console.log("3")}
          notes="no notes"
        />
      </Section>
      <Footer />
    </>
  );
}

export default App;
