import { useState } from 'react'

import "./index.css"
import ShowCards from './components/ShowCards';
import Header from './components/Header';

export default function App() {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  console.log(items)
  
  return (
    
    <div className='App' >
      <Header title="The Board App" />
     
      <ShowCards
        items={items}
        setItems={setItems}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      
                
      />
     
    </div>
  );
}
