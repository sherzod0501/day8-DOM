let InpI = document.querySelector(".form-control");
let InpF = document.querySelector(".InpF");
let InpG = document.querySelector(".InpG");
let select = document.querySelector(".form-select");
let BtnY = document.querySelector(".Form");
let list = document.querySelector(".list-group");
let a = document.querySelector(".a");

BtnY.addEventListener("submit", (e) => {
  e.preventDefault();
  if (a.value.trim().length <= 0) {
    alert("Malumotingizni toldiring");
    return;
  }
  let item = document.createElement("li");
  let div = document.createElement("div");
  let head = document.createElement("h5");
  let heads = document.createElement("h5");
  let text = document.createElement("p");
  let p = document.createElement("h6");
  // console.log(InpF.value);
  head.append(InpI.value);
  heads.append(InpF.value);
  text.append(InpG.value);
  p.append(select.value);
  item.setAttribute(
    "class",
    "d-flex justify-content-between align-items-center border border-5 p-3"
  );
  text.setAttribute("class", "fs-5 text");
  div.append(head);
  div.append(heads);
  div.setAttribute("class", "div");
  head.setAttribute("class", "gap-2 ");
  item.append(div);
  item.append(text);
  item.append(p);
  list.append(item);
  item.value = "";
  select.value = "";
});
