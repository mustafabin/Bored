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
  priceBar.style.width = price + "%";
  const accessBar = document.querySelector(".access-meter-bar");
  accessBar.style.width = accessibility + "%";
  if (accessibility < 40) {
    accessBar.style.backgroundColor = "#ff0008";
  } else {
    accessBar.style.backgroundColor = "#10f700";
  }
  if (price > 50) {
    if (price < 7) {
      priceBar.style.backgroundColor = "#FFFFFF";
    } else {
      priceBar.style.backgroundColor = "#ff0008";
    }
  } else {
    priceBar.style.backgroundColor = "#10f700";
  }
};

document.querySelector("#generate").addEventListener("click", getRandom);
