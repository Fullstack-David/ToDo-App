import { BiPlusMedical, BiTrash } from "react-icons/bi";
import { useDrop } from "react-dnd";
import DraggableListItem from "./DraggableListItem";



export default function Card({
  cardId, // Lägg till detta prop för att få kolumnens unika identifierare
  title,
  color,
  items,
  cards,
  setCards,
  newItem,
  setNewItem,
  handleAddNewItem,
  newDescription,
  setNewDescription,
  handleListItemClick,
  
}) {

  

  // Filtrerar items baserat på cardId
  const filteredItems = items.filter(item => item.cardId === cardId);


  const [, drop] = useDrop(() => ({
    accept: "item",
    drop: (item, monitor) => {
      moveItem(item.id, cardId); // Antag att detta uppdaterar cardId korrekt
    },
  }));
  

  const handleDrop = (itemId, newCardId) => {
    // hittar vilken card och position item har för tillfället
    let currentCardId, currentItem;
     
    // Hitta det nuvarande cardId och item
    for (const cardId in cards) {
      const foundItem = cards[cardId].find(item => item.id === itemId);
      if (foundItem) {
        currentCardId = cardId;
        currentItem = foundItem;
        break;
      }
    }

    if (currentCardId && currentItem && currentCardId !== newCardId) {
      setCards(prevCards => {
        // Ta bort item från dess nuvarande kolumn
        const newSourceColumn = prevCards[currentCardId].filter(item => item.id !== itemId);
        // Lägg till item i den nya kolumnen
        const newTargetColumn = [...prevCards[newCardId], currentItem];
  
        return {
          ...prevCards,
          [currentCardId]: newSourceColumn,
          [newCardId]: newTargetColumn,
        };
      });
    }
  }


  
  return (
    <div ref={drop} className={`card ${title.toLowerCase()}-card`}>
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
 