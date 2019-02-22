import * as React from "react";
import { render } from "react-dom";
import TegArray from "./TegArray";
import { Attribut } from "./interface";
import shortid from "shortid";

const arrayTeg: Attribut[] = [
  {
    teg: "span",
    text: "1",
    key: shortid.generate(),
    style: { textAlign: "center" },
  },
  {
    teg: "span",
    text: "2",
    key: shortid.generate(),
    style: { textAlign: "center" }
  },
  {
    teg: "span",
    text: "3",
    key: shortid.generate(),
    style: { textAlign: "center" }
  }
];

function App() {
  return (
    <div className="App">
      <TegArray array={arrayTeg} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
