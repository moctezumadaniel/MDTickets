import logo from './logo.svg';
import './App.css';
import MainForm from "./MainForm"
import MainTicket from "./MainTicket"
import ItemTemplate from "./ItemTemplate"

function App() {
  return (
    <div className="App">
      <MainTicket/>
      <ItemTemplate/>
      <MainForm/>
      
    </div>
  );
}

export default App;
