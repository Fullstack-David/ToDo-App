import Card from "./Card"
import Modal from "./Modal";
import CardContext from "../context/CardContext";
import { useContext } from "react";
import { useParams} from "react-router-dom";



export default function ShowCards() {
  const { items} = useContext(CardContext);
  const titles = ["Todo", "Doing", "Done"];
  const { columnName } = useParams();

  console.log(typeof columnName);

  const colomn = titles.filter(title => title === columnName);
  
  return (    
    <>
      <div className='div-container'>

        {colomn.length === 1 ? (
          
          colomn.map((title) => 
          <Card
          key={title}
          title={title}
          cardId={titles.indexOf(colomn[0])}
          items={items.filter(item => item.cardId === titles.indexOf(colomn[0]))}
        />
          )
        
        ) : (
          titles.map((title, index) => (
            <Card
              key={title}
              title={title}
              cardId={index}
              items={items.filter(item => item.cardId === index)}
            />
          ))
        )
        }
      </div>
      <Modal />
    </>
  );
}
