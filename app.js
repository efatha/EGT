const form = document.getElementById("form");
const desc = document.getElementById("desc");
const customer = document.getElementById("customer");
const amount = document.getElementById("amount");
const type = document.getElementById("type");
const history = document.getElementById("history");
const filterDate = document.getElementById("filterDate");

let records = JSON.parse(localStorage.getItem("goodsRecords")) || [];
