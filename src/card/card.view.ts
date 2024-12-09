import { Card } from "./card.model";

export class CardView {
  private rootElement: HTMLElement;

  constructor(root: HTMLElement) {
    this.rootElement = root;
  }

  renderCards(cards: Card[]): void {
    this.rootElement.innerHTML = "";
    const list = document.createElement("ul");
    list.classList.add("card-list");

    cards.forEach((card) => {
      const listItem = document.createElement("li");
      listItem.classList.add("card-item");

      const cardElement = document.createElement("div");
      cardElement.classList.add("card");

      const cardTitle = document.createElement("h3");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = card.name;

      const cardPrice = document.createElement("p");
      cardPrice.classList.add("card-price");
      cardPrice.textContent = `${card.price} ₽`;

      const cardSubtitle = document.createElement("p");
      cardSubtitle.classList.add("card-subtitle");
      cardSubtitle.textContent = card.subtitle;

      cardElement.appendChild(cardTitle);
      cardElement.appendChild(cardSubtitle);
      cardElement.appendChild(cardPrice);

      listItem.appendChild(cardElement);
      list.appendChild(listItem);
    });

    this.rootElement.appendChild(list);
  }
}
