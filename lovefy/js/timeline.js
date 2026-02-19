const timeline = document.querySelector(".timeline");
const line = document.querySelector(".timeline-line");

function updateLine() {
  line.style.width = timeline.scrollWidth + "px";
}

updateLine();
window.addEventListener("resize", updateLine);


document.querySelectorAll(".toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.classList.toggle("open");

    btn.textContent = content.classList.contains("open")
      ? "Ver menos"
      : "Ver mais";
  });
});
