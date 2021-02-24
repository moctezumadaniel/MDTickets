import './App.css';
import MainForm from "./MainForm"
import MainTicket from "./MainTicket"
import ItemTemplate from "./ItemTemplate"
import MainButtons from "./MainButtons";
import Total from "./Total"
import AddButton from './AddButton'
import DeleteEditeButtons from './DeleteEditeButtons'
import ConfirmEditing from './ConfirmEdit'

function App() {
  return (
    <div className="App">
      <MainButtons/>
      <MainTicket/>
      <ItemTemplate/>
      <MainForm/>
      <Total/>
      <DeleteEditeButtons/>
      <AddButton/>
      <ConfirmEditing/>
    </div>
  );
}

export default App;
