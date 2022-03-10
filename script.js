// api:https://www.boredapi.com/api

let getRandom = async () => {
  let response = await axios.get("https://www.boredapi.com/api/activity");
  let data = response.data;
  console.log("key:  ", data["key"]);
  let activity = data["activity"];
  let type = data["type"];
  let accessibility = data["accessibility"] * 100;
  if (accessibility != 100) {
    accessibility = 100 - accessibility;
  }
  let price = data["price"] * 100;
  document.querySelector("#activity").textContent = activity;
  document.querySelector("#type").textContent = type;
  const priceBar = document.querySelector(".price-meter-bar");
  const accessBar = document.querySelector(".access-meter-bar");
  console.log(accessibility);
  if (accessibility < 30) {
    accessBar.style.backgroundColor = "red";
  } else if (price > 30 && price < 50) {
    accessBar.style.backgroundColor = "yellow";
  } else {
    accessBar.style.backgroundColor = "lawngreen";
  }
  console.log(price);
  if (price < 7) {
    //set a minumin of seven
    price = 7;
  }
  if (price > 60) {
    priceBar.style.backgroundColor = "red";
  } else if (price > 40) {
    priceBar.style.backgroundColor = "yellow";
  } else {
    priceBar.style.backgroundColor = "lawngreen";
  }
  priceBar.style.width = price + "%";
  accessBar.style.width = accessibility + "%";
};

document.querySelector("#generate").addEventListener("click", getRandom);
