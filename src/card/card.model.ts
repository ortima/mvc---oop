import { ICardParams } from "./types";

export class Card {
  public id: string;
  public subtitle: string;
  public name: string;
  public price: number;
  public date: Date;
  public category: string;

  constructor({ id, subtitle, name, price, date, category }: ICardParams) {
    this.id = id;
    this.subtitle = subtitle;
    this.name = name;
    this.price = price;
    this.date = date;
    this.category = category;
  }

  getParams() {
    return {
      id: this.id,
      subtitle: this.subtitle,
      name: this.name,
      price: this.price,
      date: this.date,
      category: this.category,
    };
  }

  getPrice() {
    return this.price;
  }
}

export class CardModel {
  private cards: Card[] = [];
  private readonly url: string = "./data.json";

  constructor() {}

  async fetchCards(): Promise<Card[]> {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const response = await fetch(this.url);

        if (!response.ok) {
          reject(new Error("Failed while loading"));
          return;
        }

        const data: ICardParams[] = await response.json();

        resolve(data.map((item) => new Card(item)));
      }, 500);
    });
  }

  getCards(): Card[] {
    return this.cards;
  }
}
