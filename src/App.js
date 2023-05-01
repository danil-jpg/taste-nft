import "./assets/styles/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Header from "./components/Header";
import ArtworkPage from "./components/pages/ArtworkPage";
import CreatorPage from "./components/pages/CreatorPage";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route index element={<Main></Main>}></Route>
          <Route path="artwork" element={<ArtworkPage></ArtworkPage>}></Route>
          <Route path="creator" element={<CreatorPage></CreatorPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
