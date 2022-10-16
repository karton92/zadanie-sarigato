import "./styles/index.css";
import { getData } from "./utils/getData";
import { channelCard } from "./components/channelCard";
import { filterCards, sortCards, clearOptions, addCards } from "./utils/functions";

let data = await getData();
let sortDirection = "";
let sortChoiceValue = "";

(function () {
  const elements = {
    cardsContainer: document.querySelector(".wrapper-main"),
    cards: [...document.querySelectorAll(".card")],
    filterInput: document.querySelector("input"),
    choice: [...document.querySelectorAll(".choice")],
    sortBtnUp: document.querySelector(".sort-up"),
    sortBtnDown: document.querySelector(".sort-down"),
    clearBtn: document.querySelector(".clear"),
    themeBtn: document.querySelector(".theme"),
  };

  // addCards(data, elements.cardsContainer, elements.cards, channelCard);
  if (data.length) {
    data.map((card) => {
      channelCard(elements.cardsContainer, card);
    });

    elements.cards = [...document.querySelectorAll(".card")];
  }

  //FILTERING CARDS
  elements.filterInput.addEventListener("input", (e) => {
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

  //SORT BUTTONS
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

  //CLEAR BUTTON
  elements.clearBtn.addEventListener("click", () => {
    clearOptions(elements);
    elements.cards = [];
    data.map((card) => {
      channelCard(elements.cardsContainer, card);
    });

    elements.cards = [...document.querySelectorAll(".card")];
  });

  //THEME BUTTON
  elements.themeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("contrast-mode");
  });
})();
