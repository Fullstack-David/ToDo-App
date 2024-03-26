// DENNA KOMPONENTS ÄR BARA TILL MIN TODO-LISTA
import { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";
import {format} from "date-fns"

   
export default function ListItem({ items, setItems, setIsOpen, setActiveItem, headerTitle }) {
        
    const [newItem, setNewItem] = useState("");
   
    function handleAddNewItem(e) {
        if (newItem !== "") {
            setItems([...items, newItem])
            setNewItem(""); 
        }
    }

    function handleListItemClick(item) {
        console.log(item)
        setActiveItem(item)    
        setIsOpen(true); // Öppnar modalen när en li-element klickas
    }
   
    function handleSubmit(e){
        const datetime = format(new Date(), "MMMM dd, yyyy - H:m");
    }

    return (
        <ul>
            {items.map((item, index) => (
                <li
                    className="li-list"
                    id="liItem"
                    key={index}
                    onClick={handleListItemClick}>
                    
                    {/* här vill jag skapa en h1 och en p-tagg till min li */}
                    {
                        <h1>{headerTitle}</h1>
                        
                    }
                    {
                        <p>{item}</p>
                    }
                
                </li>))}
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <div className="add-list">
                <BiPlusMedical style={{ marginLeft: "1rem" }} />
                <button onClick={handleAddNewItem}>
                    Skapa ny uppgift
                </button>
            </div>
        </ul>
    );
}

 