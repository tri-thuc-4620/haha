const startDate = new Date("2023-02-22");
const today = new Date();
const diffTime = today - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("days-count").textContent = `${diffDays} ngày 💗`;
