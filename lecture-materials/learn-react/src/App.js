import './App.scss';

import {Header} from "./components";
import {TodoModule} from "./modules/TodoModule";
import {ContactsListModule} from "./modules/ContactsListModule/ContactsListModule";

function App() {
  return (
    <div>
      <Header />
      <ContactsListModule />
      <TodoModule showSearchField showCreationForm />
    </div>
  );
}

export default App;
