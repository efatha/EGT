const tips = [
  "Offer discounts to loyal customers.",
  "Display prices clearly to build trust.",
  "Use word of mouth — ask happy buyers to refer others.",
  "Keep your stall tidy and attractive.",
  "Track customer buying habits — give deals on what they like.",
  "Try small bundle deals: 3 for 2 or combo offers.",
];

function rotateTips() {
  const tipBox = document.getElementById("marketingTip");
  let index = 0;
  setInterval(() => {
    tipBox.textContent = tips[index % tips.length];
    index++;
  }, 7000);
}

window.addEventListener("DOMContentLoaded", rotateTips);
