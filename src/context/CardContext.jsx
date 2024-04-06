import { createContext, useEffect, useState } from "react";

const CardContext = createContext({});

export function CardProvider({children}) {
    const [items, setItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
   
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
        // hittar vilken card och position item har för tillfället    
        let currentCardId, currentItem;   
        // Hitta det nuvarande cardId och item
        for (const cardId in cards) {
    
           const foundItem = cards[cardId].find(item => item.id === itemId);
     
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
        <CardContext.Provider
            value={{                
                items,
                setItems,                
                isOpen,
                setIsOpen,
                activeItem,
                setActiveItem,              
                handleDrop,              
                cards,
                setCards            
            }}>
            {children}
        </CardContext.Provider>
    );
}

export default CardContext;
