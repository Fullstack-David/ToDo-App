import Card from "./Card"
import Modal from "./Modal";
import CardContext from "../context/CardContext";
import { useContext } from "react";

import { Routes, Route } from "react-router-dom";



export default function ShowCards() {

  const { items} = useContext(CardContext);
  const titles = ["Todo", "Doing", "Done"]

  return (

    <>
      <div className='div-container'>

        {titles.map((title, index,) => (
          <Card
            key={title} 
            title={title}
            cardId={index} 
            items={items.filter(item => item.cardId === index)}
          />
        ))}
      </div>
      <Modal  />
    </>
  );
}
