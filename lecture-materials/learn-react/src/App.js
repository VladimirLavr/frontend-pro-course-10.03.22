import './App.scss';

import {Header} from "./components";
import {TodoModule} from "./modules/Todo";

function App() {
  return (
    <div>
      <Header />
      <TodoModule showSearchField showCreationForm />
    </div>
  );
}

export default App;
