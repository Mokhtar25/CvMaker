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
        <Card inputs={["subject", "name", "what"]} />
      </Section>
      <Footer />
    </>
  );
}

export default App;
