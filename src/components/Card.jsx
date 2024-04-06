import { BiPlusMedical, BiTrash } from "react-icons/bi";
import { useDrop } from "react-dnd";
import { useContext, useState } from "react";
import { format } from "date-fns"
import { sv } from "date-fns/locale";
import DraggableListItem from "./DraggableListItem";
import CardContext from "../context/CardContext";

export default function Card({
  cardId, 
  title,
  items,
}) {
  const [newDescription, setNewDescription] = useState("");
  const [newItem, setNewItem] = useState("");

  const {   
    handleDrop,
    setItems
  } = useContext(CardContext);


  const [, dropRef] = useDrop(() => ({
  accept: "item",
  drop: (item, monitor) => {
    console.log("Dropping item with ID:", item.id, "to card:", cardId);
    handleDrop(item.id, cardId);
  },
  collect: monitor => ({
    isOver: !!monitor.isOver(),
  }),
}));


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
  

  return (
    <div ref={dropRef} className={`card ${title.toLowerCase()}-card`}>
      <div className="card-content">
        <h2 style={{
          backgroundColor: title === "Todo" ? "#D3D3D3" : title === "Doing" ? "#fcb711" : "#00873D",
          color: title === "Todo" ? "black" : "white"
        }}>
          {title}
        </h2>

        {title === "Todo" && (
          <div className="input-group">
            <input
              style={{ border: "none", borderBottom: "1px solid" }}
              name="newItem"
              placeholder="Titel"
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <hr />
            <textarea
              style={{ marginBottom: "10px", padding: "10px", border: "none", width: "100%", marginLeft: 0 }}
              cols={53}
              rows={5}
              name="newDescription"
              placeholder="Beskrivning..."
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            
            <div className="add-list">
              <BiPlusMedical style={{ color: "white", cursor: "pointer" }}
                onClick={() => handleAddNewItem(cardId)} // Modifierad för att skicka cardId
              />
              <span style={{ color: "white", margin: "0 auto", cursor: "pointer" }} onClick={() => handleAddNewItem(cardId)}>
                Skapa ny uppgift
              </span>
            </div>
          </div>
        )}

        {items.map(item => (
          <DraggableListItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
      
    </div>
    
  );
}
 