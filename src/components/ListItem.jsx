// DENNA KOMPONENTS ÄR BARA TILL MIN TODO-LISTA
import { useState } from "react";
import { BiPlusMedical, BiTrash } from "react-icons/bi";
import { format } from "date-fns"
import { sv } from "date-fns/locale";

   
export default function ListItem({ title, items, setItems, setIsOpen, setActiveItem, handleDeleteItem, handleEdit}) {
        
    const [newItem, setNewItem] = useState("");
    const [newDescription, setNewDescription] = useState("");
    
 
    function handleAddNewItem() {
        if (title === "Todo" && newItem !== "") {           
            const newItemObject = {  
                // skapar ett unik id med Math.random
                id: Math.random().toString(),
                cardId: 0,
                text: newItem,
                description: newDescription,
                createdAt: format(new Date(), "MMMM dd, yyyy - H:mm",
                    { locale: sv })
            };
            setItems([...items, newItemObject]);
        } 
        setNewItem("");
        setNewDescription("");
    }
    
    
    function handleListItemClick(item) { 
            setActiveItem(item)    
            setIsOpen(true); // Öppnar modalen när en li-element klickas
            
    }
       
    return (
        <ul>
            {/* li ska bara läggas i min Todo */}
            {items.map((item, id) => (
                <li
                    className="li-list"
                    id="liItem"
                    key={item.id}
                    onClick={() => handleListItemClick(item)}
                >
                    <h3 className="modal-para">{item.text}</h3>
                    <p className="item-description">{item.description}</p> {/* Lägg till detta */}
                    <p className="modal-date" style={{ fontFamily: "Times" }}>{item.createdAt}</p>

                    {/* <BiTrash
                        className="delete-icon"
                        style={{ cursor: "pointer" }}
                        onClick={handleDeleteItem}
                    /> */}
                </li>))
            }

            {/* Conditional rendering för att visa element baserat på Title */}
            {title === "Todo" && (
                <div className="input-group">
                    
                    <input
                        style={{border:"none"}}
                            name="newItem"
                            placeholder="Titel"
                            type="text"
                            value={newItem}
                            onChange={(e) => setNewItem(e.target.value)}
                    />
                    <hr />
                    <textarea
                        style={{marginBottom:"10px", padding:"10px", border: "none", width:"100%", marginLeft:0}}
                            cols={53}
                            rows={5}
                            name="newDescription"
                            placeholder="Beskrivning..."
                            type="text"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                        />
                        <div className="add-list">
                            <BiPlusMedical style={{color:"white", cursor: "pointer" }}
                                onClick={handleAddNewItem}
                            />
                            <span style={{color:"white",margin:"0 auto", cursor:"pointer"}} onClick={handleAddNewItem}>Skapa ny uppgift</span>
                        </div>
                    
                </div>
            )}
        </ul>
    );   
}


