import logo from './logo.svg';
import './App.css';
import MainForm from "./MainForm"
import MainTicket from "./MainTicket"
import ItemTemplate from "./ItemTemplate"
import ItemPairTemplate from "./ItemPairTemplate"
import Total from "./Total"

function App() {
  return (
    <div className="App">
      <MainTicket/>
      <ItemTemplate/>
      <ItemPairTemplate/>
      <Total/>
      <MainForm/>
      
    </div>
  );
}

export default App;
