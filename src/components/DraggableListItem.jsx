//Skapar en ny komponent för mina draggbara listelement:

import { useDrag } from 'react-dnd';

function DraggableListItem({ item, handleListItemClick }) {

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'item',
    item: { id: item.id }, // Objektet du vill passa när detta dras
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  

  return (
    <li
      ref={dragRef}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="li-list"
      // onClick={() => handleListItemClick(item)}
      onClick={() => {
        if (typeof handleListItemClick === 'function') {
          handleListItemClick(item);
        } else {
          console.log('handleListItemClick is not a function');
        }
      }}
      
    >
      <h3 className="modal-para">{item.text}</h3>
      <p className="item-description">{item.description}</p>
      <p className="modal-date" style={{ fontFamily: "Times" }}>{item.createdAt}</p>
    </li>
  );
}

export default DraggableListItem;
