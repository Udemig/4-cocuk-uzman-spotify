import { getPopuler } from "./scripts/api.js";
import { renderCards } from "./scripts/ui.js";

const list = document.querySelector("#list");
// sayfa yüklenmesini izler
document.addEventListener("DOMContentLoaded", () => {
  // apiden verileri alır
  getPopuler().then((data) => renderCards(data));
});
