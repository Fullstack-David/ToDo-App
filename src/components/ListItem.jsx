// DENNA KOMPONENTS ÄR BARA TILL MIN TODO-LISTA
import { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";
import {format} from "date-fns"

   
export default function ListItem({ items, setItems, setIsOpen, setActiveItem}) {
        
    const [newItem, setNewItem] = useState("");
    const [itemContext, setItemContext] = useState("")
  
      
   
    function handleAddNewItem(e) {
        if (newItem !== "") {
            setItems([...items, newItem])
            setNewItem(""); 
        }
    }



    function handleListItemClick(item) {
        console.log(item)
        setActiveItem(item)    
        setIsOpen(true); // Öppnar modalen när en li-element klickas
    }
   
    // function handleSubmit(e){
    //     const datetime = format(new Date(), "MMMM dd, yyyy - H:m");
    // }

    return (
        <ul>
            {items.map((item, index) => (
                <li
                    className="li-list"
                    id="liItem"
                    key={index}
                    onClick={() => handleListItemClick(item)}>
                    
                    {/* här vill jag skapa en h1 och en p-tagg till min li */}
                    {/* {headerTitle && <h1>{headerTitle}</h1>} */}
                    {item}              
                </li>))}
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <div className="add-list">
                <BiPlusMedical style={{ marginLeft: "1rem" }} />
                <button onClick={handleAddNewItem}>
                    Skapa ny uppgift
                </button>
            </div>
        </ul>
    );
}

// import { useState } from "react";
// import { BiPlusMedical } from "react-icons/bi";
// import { format } from "date-fns";

// export default function ListItem({ items, setItems, setIsOpen, setActiveItem }) {
//   const [newItem, setNewItem] = useState("");
//   const [itemText, setItemText] = useState("");
//   const [itemContext, setItemContext] = useState("");
  
  
//   function handleAddNewItem(e) {
//     if (newItem !== "") {
//       setItems([...items, { text: newItem, context: "" }]);
//       setNewItem("");
//     }
//   }

//   function handleItemTextChange(text) {
//     const updatedItems = [...items];
//     updatedItems[index].text = text;
//     setItems(updatedItems);
//   }

//   function handleItemContextChange(context) {
//     const updatedItems = [...items];
//     updatedItems[index].context = context;
//     setItems(updatedItems);
//   }

//   function handleListItemClick(item) {
//     setActiveItem(item);
//     setIsOpen(true);
//   }

//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li
//           className="li-list"
//           id="liItem"
//           key={index}
//           onClick={() => handleListItemClick(item)}>
//           <h1>{item.text}</h1>
//           <textarea
//             placeholder="Ange innehåll"
//             value={item.context}
//             onChange={(e) => handleItemContextChange(e.target.value)}
//           />
//         </li>
//       ))}
//       <input
//         type="text"
//         placeholder="Ange ny uppgift"
//         value={newItem}
//         onChange={(e) => setNewItem(e.target.value)}
//       />
//       <div className="add-list">
//         <BiPlusMedical style={{ marginLeft: "1rem" }} />
//         <button onClick={handleAddNewItem}>Skapa ny uppgift</button>
//       </div>
//     </ul>
//   );
// }
