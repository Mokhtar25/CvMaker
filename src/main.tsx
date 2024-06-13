import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import html2pdf from "html2pdf.js";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// const options = {
//   filename: "my-document.pdf",
//   margin: 1,
//   image: { type: "jpeg", quality: 0.98 },
//   html2canvas: { scale: 2 },
//   jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
// };
//
// const convertToPdf = () => {
//   let content = document.getElementById("display");
//   html2pdf().set(options).from(content).save();
// };
// // @ts-ignore
// function download() {
//   let a = document.getElementById("display");
//   let file = convertToPdf();
//   // @ts-ignore
//   a.href = URL.createObjectURL(file);
//   // @ts-ignore
//   a.download = "test.pdf";
// }
//
// setTimeout(download, 5000);
