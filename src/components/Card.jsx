import { BiPlusMedical, BiTrash } from "react-icons/bi";
import { useContext, useState } from "react";
import { format } from "date-fns"
import { sv } from "date-fns/locale";
import { Link } from "react-router-dom";
import DraggableListItem from "./DraggableListItem";
import CardContext from "../context/CardContext";

export default function Card({cardId, title,cardItems, titles}) {
  const [newDescription, setNewDescription] = useState("");
  const [newItem, setNewItem] = useState("");
  const { setItems, items} = useContext(CardContext);


  function handleAddNewItem() {
    if (newItem !== "") {
      const newItemObject = {
        id: Math.random().toString(),
        cardId: 0, 
        text: newItem,
        description: newDescription,
        createdAt: format(new Date(), "yyyy-MM-dd HH:mm:ss", { locale: sv })
      };
      setItems(prevItems => [...prevItems, newItemObject]);
      setNewItem("");
      setNewDescription("");
    }
  }

  function handleDrop(e, title) {
    e.preventDefault();
    const id = e.dataTransfer.getData("id").toString();
    const item = items.find(item => item.id === id);
    const newColoumnId = titles.indexOf(title)
    const updatedItem = { ...item, cardId: newColoumnId }
    const updatedItems = items.map(task => { 
      return task.id === updatedItem.id ? updatedItem : task;
    })
    setItems(updatedItems);
  }
  
  return (
    <div
      className={`card ${title.toLowerCase()}-card`}
      onDragOver={(e) => { e.preventDefault() }}
      onDrop={(e) => {handleDrop(e, title)}}   
    >
    
      <div className="card-content">
        <Link to={`/${title}`}>       
          <h2 style={{
            backgroundColor: title === "Todo" ? "#D3D3D3" : title === "Doing" ? "#fcb711" : "#00873D",
            color: title === "Todo" ? "black" : "white"
          }}>{title}</h2>       
        </Link>

        {title === "Todo" && (
          <div className="input-group">
            <input
              style={{ border: "none"}}
              name="newItem"
              placeholder="Title"
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <hr />
            <textarea
              className="textarea-box"
              cols={53}
              rows={5}
              name="newDescription"
              placeholder="Description..."
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />           
            <div className="add-list">
              <BiPlusMedical style={{ color: "white", cursor: "pointer" }}
                onClick={() => handleAddNewItem(cardId)} // Modifierad för att skicka cardId
              />
              <span
                className="create-task"
                onClick={() => handleAddNewItem(cardId)}>
                Create a new task
              </span>
            </div>
          </div>
        )}
        {cardItems.map(item => (
          <DraggableListItem
            key={item.id}
            item={item}           
          />
        ))}
      </div>     
    </div> 
  );
}
 