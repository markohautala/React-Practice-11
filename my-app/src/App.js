import css from "./App.css";
import NavBarForm from "./components/NavBarForm";
import Content from "./components/Content";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      <Content />
    </div>
  );
}

export default App;