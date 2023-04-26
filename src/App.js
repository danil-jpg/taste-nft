import "./assets/styles/styles.scss";
import AuthorCard from "./components/common/AuthorCard";
import Header from "./components/Header";
import AuthorPreview from "./components/pages/AuthorPreview";
import Selects from "./components/UI/Selects";
import Timer from "./components/Timer";

import cardImg1 from "./assets/img/cards/card1.png";
import cardImg2 from "./assets/img/cards/card2.png";
import cardImg3 from "./assets/img/cards/card3.png";
import cardImg4 from "./assets/img/cards/card4.png";
import cardImg5 from "./assets/img/cards/card5.png";
import cardImg6 from "./assets/img/cards/card6.png";

import authorImg1 from "./assets/img/cards/smallAvatar.png";
import authorImg2 from "./assets/img/cards/author2.png";
import authorImg3 from "./assets/img/cards/author3.png";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AuthorPreview></AuthorPreview>
      <div className="main-page__author-block container">
        <Selects style={{ width: "170px" }} className="select1" options={["WFH - art name1", "WFH - art name2", "WFH - art name3"]} defOpt="Recently added"></Selects>
        <Selects style={{ width: " 121px" }} className="select2" options={["WFH - art name1", "WFH - art name2", "WFH - art name3"]} defOpt="Auctions"></Selects>
        <AuthorCard obj={{ authorName: "Ian X", titleImg: cardImg1, authorImg: authorImg1, authorNick: "@IanXxx", title: "WFH - art", price: "1.7m", date: "01.05.23" }}></AuthorCard>
        {/* <AuthorCard obj={{ authorName: "Lisa S", titleImg: cardImg2, authorImg: authorImg2, authorNick: "@Lisass", title: "Special art", price: "2.7m" }}></AuthorCard>
        <AuthorCard obj={{ authorName: "In X", titleImg: cardImg3, authorImg: authorImg3, authorNick: "@InXxx", title: "New - art", price: "3.7m" }}></AuthorCard> */}
        {/* <Timer></Timer> */}
      </div>
    </div>
  );
}

export default App;
