import Card from "./Card"
import Modal from "./Modal";

export default function ShowCards({
  titles = ["Todo", "Doing", "Done"],
  items,
  setItems,
  isOpen,
  setIsOpen,
  activeItem,
  setActiveItem,
  itemContext,
  setItemContext,
  handleSubmit,
  editTitle,
  setEditTitle,
  editBody,
  setEditBody,  
}) {
    // Delete-funktion för att ta bort en uppgift från listan
    function handleDeleteItem(itemId) {
      // const updatedItems = items.filter((item) => items[index] !== index);
      console.log("Försöker ta bort objekt med id:", itemId);
      const updatedItems = items.filter((item) => item.id !== itemId);
      console.log(updatedItems); // Kolla den uppdaterade listan
    setItems(updatedItems); // Uppdatera listan
  
    }
  // Exempel på en funktion som kan skickas ner till Modal som props för att hantera redigering
  const handleEdit = (updatedItem) => {
    // Uppdatera items listan med det nya värdet baserat på activeItem.id
    const updatedItems = items.map((item) => {
      if (item.id === activeItem.id) {
        // return { ...item, ...updatedItem}; 
        return { ...item, text: updatedItem.text, description: updatedItem.description };
      }
      return item;
    });

    setItems(updatedItems);
    setIsOpen(false); // Stäng modalen
  };


  return (

    <>
      <div className='div-container'>

        {titles.map((title, index) => (
          <Card
            key={index}
            title={title}
            items={items.filter(item => item.cardId === index)}
            setItems={setItems}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            handleSubmit={handleSubmit}
            handleEdit={handleEdit}
            handleDeleteItem={handleDeleteItem}
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
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        editBody={editBody}
        setEditBody={setEditBody}
        handleEdit={handleEdit}
        
      />
    </>
  );
}
