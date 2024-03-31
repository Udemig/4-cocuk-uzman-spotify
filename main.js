import { getPopuler } from "./scripts/api.js";
import { renderCards, renderPlaying } from "./scripts/ui.js";

const list = document.querySelector("#list");
// sayfa yüklenmesini izler
document.addEventListener("DOMContentLoaded", () => {
  // apiden verileri alır
  getPopuler().then((data) => renderCards(data));
});

list.addEventListener("click", (e) => {
  if (e.target.id === "play-btn") {
    // kartı al
    const card = e.target.closest(".card");

    renderPlaying(card.dataset);
  }
});
