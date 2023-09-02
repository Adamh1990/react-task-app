import { Header } from "./components/Header";
import { Tasklist } from "./components/Tasklist";
import { NewTask } from "./components/NewTask";
import { Footer } from "./components/Footer";
import './App.css';


function App() {

  return (
    <div className="App">
      <Header />
      <NewTask />
      <Tasklist />
      <Footer />
    </div>
  );
}

export default App;
