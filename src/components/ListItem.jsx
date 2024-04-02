// DENNA KOMPONENTS ÄR BARA TILL MIN TODO-LISTA
import { useState } from "react";
import { BiPlusMedical, BiTrash } from "react-icons/bi";
import { format } from "date-fns"
import { sv } from "date-fns/locale";

   
export default function ListItem({ title, items, setItems, setIsOpen, setActiveItem}) {
        
    const [newItem, setNewItem] = useState("");
 
    function handleAddNewItem() {
        if (title === "Todo" && newItem !== "") {
            
            const newItemObject = {
                text: newItem,                              
                createdAt: format(new Date(), "MMMM dd, yyyy - H:mm", { locale: sv })
            };
            setItems([...items, newItemObject]);
        } 
        setNewItem("");
    }
    console.log("setitems: " + setItems)
    
    function handleListItemClick(item) {
        console.log(item)
        setActiveItem(item)    
        setIsOpen(true); // Öppnar modalen när en li-element klickas
    }
   
  // Delete-funktion för att ta bort en uppgift från listan
  function handleDeleteItem(index) {
    const updatedItems = [...items];
    updatedItems.splice(index, 1); // Ta bort elementet från listan
    setItems(updatedItems); // Uppdatera listan
  }
    

    return (
        <ul>
            {items.map((item, index) => (
                <li
                    className="li-list"
                    id="liItem"
                    key={index}
                    onClick={() => handleListItemClick(item)}
                >
                    <p className="modal-para">{item.text}</p>
                    <p className="modal-date" style={{ fontFamily: "Times" }}>{item.createdAt}</p>                    
                    <BiTrash
                        className="delete-icon"
                        onClick={() => handleDeleteItem(index)}
                    />          
                </li>))
            }
            {/* Conditional rendering för att visa element baserat på Title */}
            {title === "Todo" && (
                <>
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
                </>
          
            )}
           
        </ul>
    );
   
}

