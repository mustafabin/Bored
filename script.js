// api:https://www.boredapi.com/api

let subscriptionKey = "7e1c057980a94d1fad8bb0375e9f960e";

let getImg = async (query) => {
  let bingResponse = await axios.get(
    "https://api.bing.microsoft.com/v7.0/images/search?q=" + query,
    {
      headers: { "Ocp-Apim-Subscription-Key": subscriptionKey },
    }
  );
  return bingResponse.data.value[0].contentUrl;
};

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
  if (price < 7 || price < 12) {
    //set a minumin of seven
    if (window.innerWidth >= 1000) {
      price = 12;
    } else price = 8;
  }
  if (price > 60) {
    priceBar.style.backgroundColor = "red";
  } else if (price > 40) {
    priceBar.style.backgroundColor = "yellow";
  } else {
    priceBar.style.backgroundColor = "lawngreen";
  }
  console.log(price);
  priceBar.style.width = price + "%";
  accessBar.style.width = accessibility + "%";
  let srcImg = await getImg(activity);
  document.querySelector("#mainImg").src = srcImg;
};

document.querySelector("#generate").addEventListener("click", getRandom);
