import { BiPlusMedical, BiTrash } from "react-icons/bi";
import { useDrop } from "react-dnd";
import DraggableListItem from "./DraggableListItem";
import { useEffect } from "react";

export default function Card({
  cardId, // Lägg till detta prop för att få kolumnens unika identifierare
  title,
  color,
  items,
  newItem,
  setNewItem,
  handleAddNewItem,
  newDescription,
  setNewDescription,
  handleListItemClick,
  handleDrop
 
}) {


  // useEffect(() => {
  //   console.log(cards);
  // }, [cards]);

  // console.log(cardId)

  // Min översättningsfunktion
  function translateCardId(cardId) {
    const cardMapping = {
      0: 'todo',
      1: 'doing',
      2: 'done'
    };
  
    return cardMapping[cardId] || null; // Returnerar null om inget matchar
  }
  
  // console.log("Current cardId:", cardId); // Denna bör vara numerisk
  // const newCardKey = translateCardId(cardId); // Översätt till sträng
  // console.log("Translated cardId:", newCardKey); // Kontrollera översättningen
  const [, dropRef] = useDrop(() => ({
    accept: "item",
    drop: (item, monitor) => {
      // Använd `cardId` direkt här. Anta att `cardId` är 'todo', 'doing', eller 'done'.
      console.log("Dropping item with ID:", item.id, "to card:", cardId);
      handleDrop(item.id, cardId);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  

  // const [, dropRef] = useDrop(() => ({
  //   accept: "item",
  //   drop: (item, monitor) => {
  //     const targetCardId = translateCardId(cardId); 
  //     console.log("Dropping item with ID:", item.id, "to cardId:", cardId);

  //     handleDrop(item.id, targetCardId); // Antag att `cardId` är 'todo', 'doing', eller 'done'
  //   },
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // }));

  // console.log(handleDrop)
  // console.log(cards)
  // console.log("Current cards structure:", cards);

 
  

  return (
    <div ref={dropRef} className={`card ${title.toLowerCase()}-card`}>
      <div className="card-content">
        <h2 style={{
          backgroundColor: title === "Todo" ? "#D3D3D3" : title === "Doing" ? "#fcb711" : "#00873D",
          color: title === "Todo" ? color : "white"
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
            handleListItemClick={handleListItemClick}
          />
        ))}
      </div>
      
    </div>
    
  );
}
 