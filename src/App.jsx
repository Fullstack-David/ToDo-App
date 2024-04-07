import { HTML5Backend } from "react-dnd-html5-backend"
import { DndProvider, } from 'react-dnd'
import { CardProvider } from './context/CardContext';
import ShowCards from './components/ShowCards';
import Header from './components/Header';
import "./index.css";

export default function App() {
  

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='App' >
        <Header title="The Board App" />
        <CardProvider>
          <ShowCards/>
        </CardProvider>
      </div>
    </DndProvider>
  );
}
