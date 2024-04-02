import { useState } from 'react'
import { format } from "date-fns";
import "./components/Card.css"
import "./index.css"
import ShowCards from './components/ShowCards';
import Header from './components/Header';


import { BrowserRouter as Router, Routes, Route, useNavigate , Link, useParams} from "react-router-dom";


export default function App() {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  
  return (
    
    <div className='App'>
      <Header title="The Board App" />
         
      <ShowCards
        items={items}
        setItems={setItems}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeItem={activeItem}
        setActiveItem={setActiveItem} />    
    </div>   
  );
}
