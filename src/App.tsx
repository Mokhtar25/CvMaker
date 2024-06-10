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
      <Section text={"Education"}>
        <Card submit={() => console.log("3")} />
      </Section>
      <DisplayEdu
        uniName="uniName"
        subject="scince"
        endYear="2023"
        notes="Lorem ipsum dolor sit amet, qui Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderitvelit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. minim labore adipisicing minim sint cillum sint consectetur cupidatat."
      />
      <Footer />
    </>
  );
}

export default App;
