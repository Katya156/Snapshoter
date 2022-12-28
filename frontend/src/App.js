import MenuAppBar from "./components/MenuAppBar";
import * as React from "react";
import MiddleDividers from "./components/MiddleDividers";
import FullWidthGrid from "./components/FullWidthGrid";
import "./App.css";
export default function App() {
  const titles = [
    {
      id: "title1",
      name: "Изображение на экране",
    },
    {
      id: "title2",
      name: "Board Snapshoter",
    },
    {
      id: "title3",
      name1: "Setting 1",
      name2: "Setting 2",
      name3: "Setting 3",
    },
  ];
  return (
    <div className="App">
      <MenuAppBar items={titles} />
      <MiddleDividers />
      <FullWidthGrid items={titles} />
    </div>
  );
}
