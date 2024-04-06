import { useState, useEffect } from 'react'
import { HTML5Backend } from "react-dnd-html5-backend"
import { DndProvider, } from 'react-dnd'
import { format } from "date-fns"
import { sv } from "date-fns/locale";



import "./index.css"
import ShowCards from './components/ShowCards';
import Header from './components/Header';

export default function App() {
  
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [newDescription, setNewDescription] = useState("")
  
  // useEffect(() => {
  //   console.log(items);
  // }, [items]);
  


  const [cards, setCards] = useState({
    todo: [{ id: 'item1', text: 'Göra läxor' }],
    doing: [],
    done: []
  });

  function moveItem(itemId, newCardId) {
    setItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === itemId) {
          return { ...item, cardId: newCardId };
        }
        return item;
      });
    });
  }


  function handleAddNewItem() {
    if (newItem !== "") {
      const newItemObject = {
        id: Math.random().toString(),
        cardId: 0, // eller annan logik för att bestämma cardId
        text: newItem,
        description: newDescription,
        createdAt: format(new Date(), "yyyy-MM-dd HH:mm:ss", { locale: sv })
      };
      setItems(prevItems => [...prevItems, newItemObject]);
      setNewItem("");
      setNewDescription("");
    }
  }


  function handleListItemClick(item) { 
    setActiveItem(item)    
    setIsOpen(true); // Öppnar modalen när en li-element klickas
    
  }


  const handleDrop = (itemId, newCardId) => {
    // hittar vilken card och position item har för tillfället
    // console.log(itemId)

    let currentCardId, currentItem;


    // console.log("Current cards:", cards);
    // console.log("Dropping itemId:", itemId);

    // Hitta det nuvarande cardId och item
    for (const cardId in cards) {

      // console.log("Type of dropping itemId:", typeof itemId);
      // cards[cardId].forEach(item => console.log(item.id)); // Logga varje item's ID

       const foundItem = cards[cardId].find(item => item.id === itemId);
      // const foundItem = cards[cardId].find(item => item.id === Number(itemId));

      if (foundItem) {
        // if (cards[cardId].length > 0) {
        // console.log("Found item in:", cardId); // Bekräfta när och var ett objekt hittas
        // console.log("Type of item.id in cards:", typeof cards[cardId][0].id);

        currentCardId = cardId;
        currentItem = foundItem;
        break;
      }
    }

    // console.log(typeof currentCardId);
    // console.log(typeof newCardId);

      if (currentCardId && currentItem && currentCardId !== newCardId) {
      setCards(prevCards => {
        // Ta bort item från dess nuvarande kolumn
        const newSourceColumn = prevCards[currentCardId].filter(item => item.id !== itemId);
        // Lägg till item i den nya kolumnen
        const newTargetColumn = [...prevCards[newCardId], currentItem];
        
        return {
          ...prevCards,
          [currentCardId]: newSourceColumn,
          [newCardId]: newTargetColumn,
        };
      });
    }
    
  }


  return (
    <DndProvider backend={HTML5Backend}>
      <div className='App' >
        <Header title="The Board App" />
        <ShowCards
          cards={cards}
          setCards={setCards}
          items={items}
          setItems={setItems}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          moveItem={moveItem}
          newItem={newItem}
          setNewItem={setNewItem}
          handleAddNewItem={handleAddNewItem}
          newDescription={newDescription}
          setNewDescription={setNewDescription}
          handleListItemClick={handleListItemClick}
          handleDrop={handleDrop}
        />
      </div>
    </DndProvider>
  );
}
