import ListItem from "./ListItem";


export default function Card({ 
  title,
  color,
  items,
  setItems,
  isOpen,
  setIsOpen,
  activeItem,
  setActiveItem,
  handleDeleteItem,
  editTitle,
  setEditTitle,
  editBody,
  setEditBody,
  handleEdit
}) {
  
  return (
    <div className={`card ${title.toLowerCase()}-card`}>
      <div className="card-content">
   
        <h2
          style={{
            backgroundColor:
              title === "Todo" ? "#D3D3D3" :
                title === "Doing" ? "#fcb711" :
                  title === "Done" ? "#00873D" : "#00873D",
            color: title === "Todo" ? color : "white"
            
          }}>{title}
        </h2>
        
        <ListItem
          key={items.id}
          title={title}
          items={items}
          setItems={setItems}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          handleDeleteItem={handleDeleteItem}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          editBody={editBody}
          setEditBody={setEditBody}
          handleEdit={handleEdit}
          
        />
     
      </div>
      
    </div>
  );
}

 