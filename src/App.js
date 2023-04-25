import "./assets/styles/main.scss";
import Header from "./components/Header";
import AuthorPreview from "./components/pages/AuthorPreview";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AuthorPreview></AuthorPreview>
    </div>
  );
}

export default App;
