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
    
  
    return (
        <CardContext.Provider
            value={{                
                items,
                setItems,                
                isOpen,
                setIsOpen,
                activeItem,
                setActiveItem,                           
                cards,
                setCards,                               
            }}>
            {children}
        </CardContext.Provider>
    );
}

export default CardContext;
