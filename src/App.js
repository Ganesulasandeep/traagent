import React from "react";
import Travel from "./Travel";
import Header from "./Header";
import data from "./data";
import "./App.css";

export default function App() {
  const cardElement = data.map((item) => {
    return (
      <Travel
        key={item.id}
        title={item.title}
        location={item.location}
        map={item.map}
        dateStart={item.dateStart}
        dateEnd={item.dateEnd}
        description={item.description}
        img={item.img}
      />
    );
  });
  return (
    <>
      <Header />
      {cardElement}
    </>
  );
}
