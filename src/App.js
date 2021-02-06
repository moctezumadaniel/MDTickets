import logo from './logo.svg';
import './App.css';
import MainForm from "./MainForm"
import MainTicket from "./MainTicket"
import ItemTemplate from "./ItemTemplate"
import ItemPairTemplate from "./ItemPairTemplate"

function App() {
  return (
    <div className="App">
      <MainTicket/>
      <ItemTemplate/>
      <ItemPairTemplate/>
      <MainForm/>
      
    </div>
  );
}

export default App;
