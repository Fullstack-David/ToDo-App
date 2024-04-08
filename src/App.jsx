import { CardProvider } from './context/CardContext';
import ShowCards from './components/ShowCards';
import Header from './components/Header';
import "./index.css";

export default function App() {

  return (    
      <div className='App' >
        <Header title="The Board App" />
        <CardProvider>
          <ShowCards/>
        </CardProvider>
      </div>    
  );
}
