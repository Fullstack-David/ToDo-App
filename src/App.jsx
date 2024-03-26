import { useState } from 'react'
import { format } from "date-fns";
import "./components/Card.css"
import "./index.css"
import NewPost from './components/NewPost';
import ShowCards from './components/ShowCards';


export default function App() {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null)


  return (
    <>
      <h1 className='div-container-header'>The Board App</h1>
      <ShowCards         
        items={items}
        setItems={setItems}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeItem={activeItem}
        setActiveItem={setActiveItem}        
      />
    
      
    </>
  );
}


