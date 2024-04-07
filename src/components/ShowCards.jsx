import Card from "./Card"
import Modal from "./Modal";
import CardContext from "../context/CardContext";
import { useContext } from "react";
import { useParams} from "react-router-dom";

export default function ShowCards() {
  const { items} = useContext(CardContext);
  const titles = ["Todo", "Doing", "Done"];
  const { columnName } = useParams();
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
          cardItems={items.filter(item => item.cardId === titles.indexOf(colomn[0]))}
          titles={titles}/>
        
          )
        
        ) : (
          titles.map((title, index) => (
            <Card
              key={title}
              title={title}
              cardId={index}
              cardItems={items.filter(item => item.cardId === index)}
              titles={titles}
            />
          ))
        )
        }
      </div>
      <Modal />
    </>
  );
}
