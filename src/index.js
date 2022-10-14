import "./styles/index.css";
import { getData } from "./utils/getData";
import { channelCard } from "./components/channelCard";

let data = await getData();
console.log(data);

(function () {
  const elements = {
    cardsContainer: document.querySelector(".wrapper-main"),
    cards: [],
    input: document.querySelector("input"),
  };

  //CREATING CARDS
  const createCards = () => {
    if (data.length) {
      data.map((channel) => {
        channelCard(elements.cardsContainer, channel);
      });
    }
  };
  createCards();
})();
