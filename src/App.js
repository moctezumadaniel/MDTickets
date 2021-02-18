import './App.css';
import MainForm from "./MainForm"
import MainTicket from "./MainTicket"
import ItemTemplate from "./ItemTemplate"
import MainButtons from "./MainButtons";
import Total from "./Total"
import AddButton from './AddButton'
import DeleteButton from './DeleteButton'

function App() {
  return (
    <div className="App">
      <MainButtons/>
      <MainTicket/>
      <ItemTemplate/>
      <MainForm/>
      <Total/>
      <DeleteButton/>
      <AddButton/>
    </div>
  );
}

export default App;
