import { Card } from "./models/Card";
import "./style.css";
import { ICardParams } from "./types";

// TODO: loading state
// разделить логику для MVC
// TODO: добаить стили (мб подключить какой-то tailwind или UI готовый)

const fetchCards = async (): Promise<Card[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const response = await fetch("/data.json");

      if (!response.ok) {
        reject(new Error("Failed while loading"));
        return;
      }

      const data: ICardParams[] = await response.json();

      resolve(data.map((item) => new Card(item)));
    }, 500);
  });
};

fetchCards()
  .then((items) => {
    const appContainer = document.querySelector<HTMLDivElement>("#app");

    const list = document.createElement("ul");

    items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item.name;
      list.appendChild(listItem);
    });

    if (appContainer) {
      appContainer.appendChild(list);
    }
  })
  .catch((err) => console.error(err));
