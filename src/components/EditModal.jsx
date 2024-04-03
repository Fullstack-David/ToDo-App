import {useEffect, useState} from 'react'   


export default function EditModal({ 
    items,
    setItems,
    editTitle,
    setEditTitle,
    editBody,
    setEditBody

}) {
    // const { index } = useParams();
    const item = items.find((item) => item.cardId === index) || {};
    
    useEffect(() => {
      if (item) {
        setEditTitle(item.title);
        setEditBody(item.body);
      }
    }, [item, setEditTitle, setEditBody]);

    function handleEdit(id) {
        // const datetime = format(new Date(), "MMMM dd, yyyy - HH:m");

        // const updateItem = { id, title: editTitle, datetime, body: editBody };

        setEditTitle("");
        setEditBody("");
        console.log("Ska redigera")
      }
    
    return (
        <main>
            EditModal
            <input
                type="text"
                id="itemTitle"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder='Titel...' />
            
            <textarea
                type="text"
                id="itemBody"
                value="itemBody"
                onChange={(e) => setEditBody(e.target.value)}
                placeholder='Text här...'>{editBody}</textarea> 
                        
            <button onClick={()=> handleEdit(item-id)}>Redigera</button> 
          
          </main>

          
    );
}
