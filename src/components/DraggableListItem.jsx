//Skapar en ny komponent för mina draggbara listelement:
import CardContext from "../context/CardContext";
import { useContext } from "react";

function DraggableListItem({ item}) {

  const { setActiveItem, setIsOpen } = useContext(CardContext); 

  function handleListItemClick(item) { 
    setActiveItem(item)    
    setIsOpen(true); // Öppnar modalen när en li-element klickas
    console.log(item)
  }

  return (
    <li
      draggable
      onDragStart={(e) => {e.dataTransfer.setData("id", item.id)}}
      className="li-list"
      onClick={() => {
        if (typeof handleListItemClick === 'function') {
          handleListItemClick(item);
        } else {
          console.log('handleListItemClick is not a function');
        }
      }}      
    >
      <h3 className="modal-para">{item.text}</h3>
      <p className="item-description">{item.description}</p>
      <p className="modal-date" style={{ fontFamily: "Times" }}>{item.createdAt}</p>
    </li>
  );
}

export default DraggableListItem;
