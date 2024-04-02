import Card from "./Card"
import Modal from "./Modal";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";


export default function ShowCards({
  titles = ["Todo", "Doing", "Done"],
  title,
  items,
  setItems,
  isOpen,
  setIsOpen,
  activeItem,
  setActiveItem,
  itemContext,
  setItemContext,
  handleSubmit,
  handleDeleteItem,
}) {

  
  return (
    <>
      <div className='div-container'>

      {titles.map((title, index) => (
          <Card
            key={index}
            title={title}
            items={items}
            setItems={setItems}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            handleSubmit={handleSubmit}
          />
        ))}
      </div>
      {/* denna ska visa min modal */}
      <Modal
        items={items}
        activeItem={activeItem}
        itemContext={itemContext}
        setItemContext={setItemContext}
        value={false}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleDeleteItem={handleDeleteItem}
        />
      

    </>
  );
}
