import { RiCloseLine } from "react-icons/ri";
import "./Modal.css"



export default function Modal({activeItem, isOpen, setIsOpen, handleDeleteItem, items}) {
 if (!isOpen) return null;
   
  function handleCloseBtn(e) {
    e.stopPropagation(); // Förhindrar event-bubbling
    setIsOpen(false);   
  }

  // Delete-funktion för att ta bort en uppgift från listan
  function handleDelete() {
    handleDeleteItem(activeItem.index); // Anropa handleDeleteItem med indexet på activeItem
  }

 

  return (
    
    <div className="darkBG" onClick={() => setIsOpen(false)}>
      <div className="centered" onClick={(e) => e.stopPropagation()}>
        <div className="modal">
          <div className="modalHeader">
            {/* <h5 className="heading">Hi there!</h5> */}
          </div>
          <button className="closeBtn" onClick={handleCloseBtn} >
            <RiCloseLine />       
          </button>        
          <div className="modalContent">
            <p>{activeItem.text}</p>
              
            <p className="date-para" style={{fontFamily:"cursive", marginTop:"20px"}}>{activeItem.createdAt}</p>
          </div>
          
          <div className="modal-Btn">
            <button className="delete-Btn" type="button" onClick={handleDelete}>Delete</button>
            {/* <button className="save-Btn" type="button" onClick={handleSave}>Save</button> */}
          </div>
        </div>
      </div>      
    </div>
    
  );
  
}

