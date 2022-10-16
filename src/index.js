import "./styles/index.css";
import { getData } from "./utils/getData";
import { channelCard } from "./components/channelCard";
import { filterCards, sortCards } from "./utils/functions";

let data = await getData();
let sortDirection = "";
let sortChoiceValue = "";

(function () {
  const elements = {
    cardsContainer: document.querySelector(".wrapper-main"),
    filterInput: document.querySelector("input"),
    choice: [...document.querySelectorAll(".choice")],
    sortBtnUp: document.querySelector(".sort-up"),
    sortBtnDown: document.querySelector(".sort-down"),
  };

  if (data.length && Array.isArray(data)) {
    data.map((channel) => {
      channelCard(elements.cardsContainer, channel);
    });

    elements.cards = [...document.querySelectorAll(".card")];

    // addDatalistOptions(elems.hintsList, channels);
  }

  //FILTERING CARDS
  elements.filterInput.addEventListener("input", function (e) {
    let inputValue = e.target.value.toLowerCase();
    filterCards(inputValue, elements.cards);
  });

  //SORTING CARDS
  elements.choice.map((choiceInput) =>
    choiceInput.addEventListener("change", (e) => {
      sortChoiceValue = e.target.id;

      if (!sortDirection) {
        sortDirection = "up";
        elements.sortBtnUp.classList.add("active-sort");
      }

      sortCards(elements.cards, elements.cardsContainer, sortDirection, sortChoiceValue);
    })
  );

  elements.sortBtnUp.addEventListener("click", () => {
    sortDirection = "up";
    sortCards(elements.cards, elements.cardsContainer, sortDirection, sortChoiceValue);
    elements.sortBtnDown.classList.remove("active-sort");
    elements.sortBtnUp.classList.add("active-sort");
  });
  elements.sortBtnDown.addEventListener("click", () => {
    sortDirection = "down";
    sortCards(elements.cards, elements.cardsContainer, sortDirection, sortChoiceValue);
    elements.sortBtnUp.classList.remove("active-sort");
    elements.sortBtnDown.classList.add("active-sort");
  });
})();
