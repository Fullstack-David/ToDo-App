import Card from "./Card"
import Column from "./Column"
import Modal from "./Modal";
import ListItem from "./ListItem";



export default function ShowCards({ items, setItems, isOpen, setIsOpen, activeItem, setActiveItem, itemContext, setItemContext}) {

  // const [headerTitle, setHeaderTitle] = useState("")
  return (
    <>
      <div className='div-container'>
        <Card
          title="Todo"
          bgColor="#D3D3D3"
          items={items}
          setItems={setItems}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          
        />
        <Column
          title="Doing"
          bgColor="#FCB711"
          color="white"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Column
          title="Done"
          bgColor="#00873D"
          color="white"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      
      </div>
      {/* denna ska visa min modal */}
      
      <Modal
        activeItem={activeItem}
        itemContext={itemContext}
        setItemContext={setItemContext}
        value={false}
        isOpen={isOpen}
        setIsOpen={setIsOpen} /> 

    </>
  );
}
