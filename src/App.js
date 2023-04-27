import "./assets/styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import ArtworkPage from "./components/pages/ArtworkPage";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Main></Main>}></Route>
          <Route path="artwork">{<ArtworkPage></ArtworkPage>}</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
