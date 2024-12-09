import { CardModel } from "./card.model";
import { CardView } from "./card.view";

export class CardController {
  private model: CardModel;
  private view: CardView;

  constructor(model: CardModel, view: CardView) {
    this.model = model;
    this.view = view;
  }

  async loadCards(): Promise<void> {
    try {
      const cards = await this.model.fetchCards();

      this.view.renderCards(cards);
    } catch (error) {
      console.error("Error loading cards", error);
    }
  }
}
