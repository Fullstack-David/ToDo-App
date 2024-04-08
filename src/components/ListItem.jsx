import { BiPlusMedical, BiTrash } from "react-icons/bi";
import DraggableListItem from "./DraggableListItem";
   
export default function ListItem({ title, items,handleAddNewItem, newDescription, setNewDescription, newItem, setNewItem}) {
             
    return (
        <ul>
            {/* li ska bara läggas i min Todo */}
            {items.map((item) => ( 
                 <DraggableListItem 
                 key={item.id} 
                 item={item} 
                 handleListItemClick={handleListItemClick}
               />
               ))}

            {/* Conditional rendering för att visa element baserat på Title */}
            {title === "Todo" && (
                <div className="input-group">
                    
                    <input
                        style={{border:"none", borderBottom:"1px solid"}}
                            name="newItem"
                            placeholder="Titel"
                            autoComplete="off"
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
                            <span style={{color:"white", margin:"0 auto", cursor:"pointer"}} onClick={handleAddNewItem}>Skapa ny uppgift</span>
                        </div>                    
                </div>
            )}
        </ul>
    );   
}
