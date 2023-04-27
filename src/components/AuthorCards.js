import AuthorCard from "./common/AuthorCard";

import cardImg1 from "../assets/img/cards/card1.png";
import cardImg2 from "../assets/img/cards/card2.png";
import cardImg3 from "../assets/img/cards/card3.png";
import cardImg4 from "../assets/img/cards/card4.png";
import cardImg5 from "../assets/img/cards/card5.png";
import cardImg6 from "../assets/img/cards/card6.png";
import cardImg7 from "../assets/img/cards/card7.png";
import cardImg8 from "../assets/img/cards/card8.png";
import authorImg1 from "../assets/img/cards/smallAvatar.png";
import authorImg2 from "../assets/img/cards/author2.png";
import authorImg3 from "../assets/img/cards/author3.png";
import authorImg4 from "../assets/img/cards/author4.png";
import authorImg5 from "../assets/img/cards/author5.png";
import authorImg6 from "../assets/img/cards/author6.png";
import authorImg7 from "../assets/img/cards/author7.png";
import authorImg8 from "../assets/img/cards/author8.png";

const AuthorCards = () => {
  return (
    <div className="authorCards-wr ">
      <AuthorCard obj={{ authorName: "Ian X", titleImg: cardImg1, authorImg: authorImg1, authorNick: "@IanXxx", title: "WFH - art", price: "1.7m", date: "5 01 23" }}></AuthorCard>
      <AuthorCard obj={{ authorName: "Liss", titleImg: cardImg2, authorImg: authorImg2, authorNick: "@Lissa", title: "Nxt - art", price: "1.2m", date: "7 01 23" }}></AuthorCard>
      <AuthorCard obj={{ authorName: "InkX", titleImg: cardImg3, authorImg: authorImg3, authorNick: "@InkXXX", title: "Brm - art", price: "1.4m", date: "8 01 23" }}></AuthorCard>
      <AuthorCard obj={{ authorName: "MarkM", titleImg: cardImg4, authorImg: authorImg4, authorNick: "@MarkMMM", title: "Kxb - art", price: "2.7m", date: "5 21 23" }}></AuthorCard>
      <AuthorCard obj={{ authorName: "Kant", titleImg: cardImg5, authorImg: authorImg5, authorNick: "@Kant", title: "Exe - art", price: "1.8m", date: "5 31 23" }}></AuthorCard>
      <AuthorCard obj={{ authorName: "Ronus", titleImg: cardImg6, authorImg: authorImg6, authorNick: "@Ronus", title: "Rar - art", price: "3.7m", date: "5 11 23" }}></AuthorCard>
      <AuthorCard obj={{ authorName: "Kofe", titleImg: cardImg7, authorImg: authorImg7, authorNick: "@Ko+f", title: "Jar - art", price: "1.1m", date: "5 11 23" }}></AuthorCard>
      <AuthorCard obj={{ authorName: "Yochek", titleImg: cardImg8, authorImg: authorImg8, authorNick: "@Yo", title: "Docx - art", price: "1.9m", date: "5 21 23" }}></AuthorCard>
    </div>
  );
};

export default AuthorCards;
