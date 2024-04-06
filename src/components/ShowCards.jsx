

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
  moveItem,
  newItem,
  setNewItem,
  newDescription,
  setNewDescription,
  handleAddNewItem,
  handleListItemClick,
  handleDrop,
  cards,
   setCards
}) {
    // Delete-funktion för att ta bort en uppgift från listan
    function handleDeleteItem(itemId) {
      console.log("Försöker ta bort objekt med id:", itemId);
      const updatedItems = items.filter((item) => item.id !== itemId);
      console.log(updatedItems); // Kollar den uppdaterade listan
      setItems(updatedItems); // Uppdatera listan
  
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

    <>
      <div className='div-container'>

        {titles.map((title, index,) => (
          <Card
            key={title} //Om dina titlar alltid är unika och oföränderliga för varje kort, kan du överväga att använda title som nyckel istället.
            title={title}
            cardId={index} // Lägger till ett unikt ID för varje Card baserat på dess titel
            items={items.filter(item => item.cardId === index)}
            setItems={setItems}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            handleSubmit={handleSubmit}
            handleEdit={handleEdit}
            handleDeleteItem={handleDeleteItem}
            moveItem={moveItem}
            newItem={newItem}
            setNewItem={setNewItem}
            handleAddNewItem={handleAddNewItem}
            setNewDescription={setNewDescription}
            newDescription={newDescription}
            handleListItemClick={handleListItemClick}
            handleDrop={handleDrop}
            cards={cards}
            setCards={setCards}

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
