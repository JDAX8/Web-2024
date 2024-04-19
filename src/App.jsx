import './App.css';
import 'h8k-components';
import { Body } from './components/Body';
const title = "Customer Search";

const App = () => {
  return (
    <div className="App">
      <h1>{title}</h1>
      <Body />
    </div>
  );
}

export default App;
