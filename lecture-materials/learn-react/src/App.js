import './App.scss';
import {Header} from "./components/Header/Header";
import {Counter} from "./components/Counter/Counter";
import {Toggler} from "./components/Toggler/Toggler";

function App() {
  const initialCount = 0;
  return (
    <div>
      <Header />
      <Counter initialCount={initialCount} />
      <Toggler />
    </div>
  );
}

export default App;
