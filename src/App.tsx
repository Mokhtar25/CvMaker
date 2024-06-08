import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header />

      <Card cardName={"Education"} />

      <Footer />
    </>
  );
}

export default App;
