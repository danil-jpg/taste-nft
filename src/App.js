import "./assets/styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Header from "./components/Header";
import ArtworkPage from "./components/pages/ArtworkPage";

function App() {
  return (
    <div id="app">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main></Main>}></Route>
          <Route path="artwork" element={<ArtworkPage></ArtworkPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
