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
  
  useEffect(() => {
    console.log(items);
  }, [items]);
  


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
        />
      </div>
    </DndProvider>
  );
}
