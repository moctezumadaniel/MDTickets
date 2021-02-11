import './App.css';
import MainForm from "./MainForm"
import MainTicket from "./MainTicket"
import ItemTemplate from "./ItemTemplate"
import MainButtons from "./MainButtons";
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
      <MainForm/>
      <Total/>
      <MainButtons/>
    </div>
  );
}

export default App;
