// export const addHints = (hintsList, options) => {
//   let hintsArr = options.map((option) => option.title);
//   for (let hint of hintsArr) {
//     const option = document.createElement("option");
//     option.value = hint;
//     hintsList.appendChild(option);
//   }
// };
export const formatString = (string) => string.replace(/[\s\.\,]/g, "");

export const stringSeparator = (string) => {
  return parseInt(formatString(string)).toLocaleString("en-US");
};

export const filterCards = (inputValue, cards) => {
  cards.map((card) => {
    if (inputValue) {
      card.dataset.title.toLowerCase().includes(inputValue) ? (card.style.display = "block") : (card.style.display = "none");
    } else card.style.display = "block";
  });
};

export const sortCards = (cards, container, sortDirection, sortChoiceValue) => {
  if (sortChoiceValue === "sort-title") {
    container.innerHTML = "";
    sortDirection === "up"
      ? cards.sort((a, b) => a.dataset.title.localeCompare(b.dataset.title)).map((card) => container.appendChild(card))
      : cards
          .sort((a, b) => a.dataset.title.localeCompare(b.dataset.title))
          .reverse()
          .map((card) => container.appendChild(card));
  } else if (sortChoiceValue === "sort-subscribers") {
    container.innerHTML = "";
    sortDirection === "up"
      ? cards.sort((a, b) => a.dataset.subscribers - b.dataset.subscribers).map((card) => container.appendChild(card))
      : cards.sort((a, b) => b.dataset.subscribers - a.dataset.subscribers).map((card) => container.appendChild(card));
  } else if (sortChoiceValue === "sort-videos") {
    container.innerHTML = "";
    sortDirection === "up"
      ? cards.sort((a, b) => a.dataset.videos - b.dataset.videos).map((card) => container.appendChild(card))
      : cards.sort((a, b) => b.dataset.videos - a.dataset.videos).map((card) => container.appendChild(card));
  } else if (sortChoiceValue === "sort-views") {
    container.innerHTML = "";
    sortDirection === "up"
      ? cards.sort((a, b) => a.dataset.views - b.dataset.views).map((card) => container.appendChild(card))
      : cards.sort((a, b) => b.dataset.views - a.dataset.views).map((card) => container.appendChild(card));
  }
};

export const clearOptions = (elements) => {
  let { sortDirection, sortChoiceValue, filterInput, choice, sortBtnUp, sortBtnDown, cardsContainer, cards } = elements;
  sortDirection = "";
  sortChoiceValue = "";
  filterInput.value = "";
  choice.map((element) => (element.checked = false));
  sortBtnUp.classList.remove("active-sort");
  sortBtnDown.classList.remove("active-sort");
  cardsContainer.innerHTML = "";
};
