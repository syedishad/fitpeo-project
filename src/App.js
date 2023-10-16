import { Title } from "./components/title";
import { List } from "./components/list";
import { Header } from "./components/header";
import { Profile } from "./components/profile/profile";

import "./App.css";
import { Cards } from "./components/cards";

function App() {
  return (
    <div className="container">
      <div className="navigationSection">
        <Title />
        <List />
        <Profile />
      </div>

      <div className="viewSection">
        <Header username="John Doe" />
        <Cards />
      </div>
    </div>
  );
}

export default App;
