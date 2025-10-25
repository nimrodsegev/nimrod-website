document.getElementById("showQuoteBtn").addEventListener("click", () => {
  const quoteBox = document.getElementById("quoteBox");
  quoteBox.classList.add("show");

  // Automatically hide after 3 seconds
  setTimeout(() => {
    quoteBox.classList.remove("show");
  }, 3000);
});
const toggleBtn = document.getElementById("toggleBtn");
const highlightText = document.getElementById("highlightText");

toggleBtn.addEventListener("click", () => {
  highlightText.classList.toggle("highlight");
});
