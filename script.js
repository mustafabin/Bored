// api:https://www.boredapi.com/api
let getRandom = async () => {
  let response = await axios.get("https://www.boredapi.com/api/activity");
  let data = response.data;
  console.log(data);
};
