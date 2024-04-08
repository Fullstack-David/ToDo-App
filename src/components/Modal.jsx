import { RiCloseLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { useContext } from "react";
import CardContext from "../context/CardContext";

export default function Modal() {
  const {activeItem,isOpen, setIsOpen, items, setItems } = useContext(CardContext);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("")

  useEffect(() => {
    if (activeItem) {
      setEditTitle(activeItem.text); 
      setEditBody(activeItem.description); 
    }
  }, [activeItem]); 
 if (!isOpen) return null;
   
  function handleCloseBtn(e) {
    e.stopPropagation(); 
    setIsOpen(false);   
  }


   // Delete-funktion för att ta bort en uppgift från listan
   function handleDeleteItem(itemId) {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems); // Uppdatera listan
    setIsOpen(false); // Stänger modalen

   }
  
   const handleEdit = (updatedItem) => {
    // Uppdatera items listan med det nya värdet baserat på activeItem.id
    const updatedItems = items.map((item) => {
      if (item.id === activeItem.id) {
        return { ...item, text: updatedItem.text, description: updatedItem.description };
    }
      return item;
   });

    setItems(updatedItems);
    setIsOpen(false); // Stänger modalen
  }
  
  return (
    <div className="darkBG" onClick={() => setIsOpen(false)}>
      <div className="centered" onClick={(e) => e.stopPropagation()}>
        <div className="modal">
          <button className="closeBtn" onClick={handleCloseBtn} >
            <RiCloseLine />
          </button>
          <div className="modalContent">
            <input
              className="titleInput"
              placeholder="Title"
              type="text"
              autoComplete="off"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <textarea
              cols={30}
              rows={10}
              className="bodyTextarea"
              placeholder="Description..."
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            ></textarea>
          </div>
          <div className="modal-Btn">
            <button className="delete-Btn" type="button" onClick={() => handleDeleteItem(activeItem.id)}>Delete</button>
            {/* lägga till EDIT-FUNKTIONEN */}
            <button className="edit-Btn" type="button" onClick={() => handleEdit({
              id: activeItem.id,
              text: editTitle,
              description: editBody
            })}>Edit</button>
          </div>
        </div>
      </div>
    </div>
    
  );
  
}
