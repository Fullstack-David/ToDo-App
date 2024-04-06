import { useState, useEffect } from 'react'
import { HTML5Backend } from "react-dnd-html5-backend"
import { DndProvider, } from 'react-dnd'
import { CardProvider } from './context/CardContext';
import ShowCards from './components/ShowCards';
import Header from './components/Header';
import "./index.css";

export default function App() {
  
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

  const handleDrop = (itemId, newCardId) => {
    let currentCardId, currentItem;
  // Hitta det nuvarande cardId och item
    for (const cardId in cards) {
       const foundItem = cards[cardId].find(item => item.id === itemId);
      // const foundItem = cards[cardId].find(item => item.id === Number(itemId));
      if (foundItem) {
        currentCardId = cardId;
        currentItem = foundItem;
        break;
      }
    }
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
        <CardProvider>
          <ShowCards/>
        </CardProvider>
      </div>
    </DndProvider>
  );
}
