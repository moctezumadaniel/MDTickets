import './App.css';
import MainForm from "./MainForm"
import MainTicket from "./MainTicket"
import ItemTemplate from "./ItemTemplate"
import MainButtons from "./MainButtons";
import Total from "./Total"
import AddButton from './AddButton'

function App() {
  return (
    <div className="App">
      <MainButtons/>
      <MainTicket/>
      <ItemTemplate/>
      <ItemTemplate/>
      <ItemTemplate/>
      <ItemTemplate/>
      <ItemTemplate/>
      <ItemTemplate/>
      <MainForm/>
      <Total/>
      <AddButton/>
    </div>
  );
}

export default App;
