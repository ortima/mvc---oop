import { CardController } from "./card/card.controller";
import { CardModel } from "./card/card.model";
import { CardView } from "./card/card.view";
import "./style.css";

const app = document.getElementById("app")!;

function init() {
  const model = new CardModel();
  const view = new CardView(app);

  const controller = new CardController(model, view);

  controller.loadCards();
}

init();
