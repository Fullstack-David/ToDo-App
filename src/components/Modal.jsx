import { RiCloseLine } from "react-icons/ri";
import "./Modal.css"


export default function Modal({item, isOpen, setIsOpen, itemContext, itemText}) {
 if (!isOpen) return null;
  
 
 
  
  function handleCloseBtn(e) {
    e.stopPropagation(); // Förhindrar event-bubbling
    setIsOpen(false);
    
  }
  // console.log('setActiveItem i App:', setActiveItem);
    

  return (
    
      <div className="darkBG" onClick={() => setIsOpen(false)}>
      <div className="centered" onClick={(e) => e.stopPropagation()}>
          <div className="modal">
            <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
            </div>
            <button className="closeBtn" onClick={handleCloseBtn} >
            <RiCloseLine />          
          </button>
          
            <div className="modalContent">
            {/* {item} */}
              {/* <h1>{item.text}</h1>
              <p>{item.context}</p> */}
     
              <h1>Här ska min li-context visas!!!!{item}</h1>
   
            </div>           
          </div>
        </div>
        
      </div>
    
  );
  
}
