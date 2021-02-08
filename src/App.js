import './App.css';
import MainForm from "./MainForm"
import MainTicket from "./MainTicket"
import ItemTemplate from "./ItemTemplate"
import Total from "./Total"

function App() {
  return (
    <div className="App">
      <MainTicket/>
      <ItemTemplate/>
      <ItemTemplate/>
      <ItemTemplate/>
      <ItemTemplate/>
      <ItemTemplate/>
      <ItemTemplate/>
      <Total/>
      <MainForm/>
      
    </div>
  );
}

export default App;
