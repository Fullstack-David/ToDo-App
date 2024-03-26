import "./Card.css"
import ListItem from "./ListItem";

export default function Card({ title, bgColor, color, items, setItems, isOpen, setIsOpen, activeItem, setActiveItem, headerTitle}) {
  //console.log('setActiveItem i App:', setActiveItem);
  return (
    <div className="card">   
      <div className="card-content">
        <h2 
          style={{ backgroundColor: bgColor, color: color }}>{title}
        </h2>         
        
        <ListItem
          items={items}
          setItems={setItems}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          
        />
        
      </div>
    </div>
  );
}

 