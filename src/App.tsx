import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/Card";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Header />

      <Section key={2} text={"Education"}>
        <Card key={1} cardName={"Education"} />
      </Section>

      <Footer />
    </>
  );
}

export default App;
