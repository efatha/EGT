const form = document.getElementById("form");
const desc = document.getElementById("desc");
const customer = document.getElementById("customer");
const amount = document.getElementById("amount");
const type = document.getElementById("type");
const history = document.getElementById("history");
const filterDate = document.getElementById("filterDate");

let records = JSON.parse(localStorage.getItem("goodsRecords")) || [];
form.addEventListener("submit", e => {
  e.preventDefault();
  const record = {
    id: Date.now(),
    desc: desc.value,
    customer: customer.value || "N/A",
    amount: +amount.value,
    type: type.value,
    date: new Date().toISOString().split("T")[0]
  };
  records.push(record);
  localStorage.setItem("goodsRecords", JSON.stringify(records));
  render();
  form.reset();
});
