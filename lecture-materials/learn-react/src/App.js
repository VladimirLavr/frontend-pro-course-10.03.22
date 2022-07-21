import './App.scss';

import {Header} from "./components";
import {TodoModule} from "./modules/TodoModule";

function App() {
  return (
    <div>
      <Header />
      <TodoModule showSearchField showCreationForm />
    </div>
  );
}

export default App;
