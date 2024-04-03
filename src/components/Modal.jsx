import { RiCloseLine } from "react-icons/ri";
import { useState, useEffect } from "react";

export default function Modal({ activeItem, isOpen, setIsOpen, handleDeleteItem, newItem, handleEdit }) {

  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("")

  useEffect(() => {
    if (activeItem) {
      setEditTitle(activeItem.text); // Antag att text representerar titeln
      setEditBody(activeItem.description); // Lägg till en description egenskap i ditt objekt om det inte finns
    }
  }, [activeItem]); // Uppdatera dessa värden när activeItem ändras

 if (!isOpen) return null;
   
  function handleCloseBtn(e) {
    e.stopPropagation(); // Förhindrar event-bubbling
    setIsOpen(false);   
  }

  // Delete-funktion för att ta bort en uppgift från listan
  function handleDelete() {
    handleDeleteItem(activeItem.id); // Anropa handleDeleteItem med indexet på activeItem
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
            <button className="delete-Btn" type="button" onClick={handleDelete}>Delete</button>
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
