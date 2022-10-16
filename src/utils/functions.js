// export const addHints = (hintsList, options) => {
//   let hintsArr = options.map((option) => option.title);
//   for (let hint of hintsArr) {
//     const option = document.createElement("option");
//     option.value = hint;
//     hintsList.appendChild(option);
//   }
// };
export const formatToNumber = (element) => element.replace(/[,.\s]/g, "");

export const filterCards = (inputValue, cards) => {
  cards.map((card) => {
    card.dataset.title.toLowerCase().includes(inputValue) ? (card.style.display = "block") : (card.style.display = "none");
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
      ? cards.sort((a, b) => formatToNumber(a.dataset.subscribers) - formatToNumber(b.dataset.subscribers)).map((card) => container.appendChild(card))
      : cards
          .sort((a, b) => formatToNumber(b.dataset.subscribers) - formatToNumber(a.dataset.subscribers))
          .map((card) => container.appendChild(card));
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
