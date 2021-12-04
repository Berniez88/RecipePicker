// const recepies = require("./ResturantPickerJSON.json");
// console.log(recipes);

//* This Works
// fetch("./ResturantPickerJSON.json")
//   .then((recepieData) => {
//     return recepieData.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

async function loadRecipes() {
  const response = await fetch("./ResturantPickerJSON.json");
  const data = await response.json();
  return data;
}

document.addEventListener("DOMContentLoaded", async () => {
  let recepies = [];

  let allData = document.querySelector("#allData");
  allData.appendChild(recepies);
  try {
    recepies = await loadRecipes();
  } catch (e) {
    console.log("Error");
    console.log(e);
  }
  console.log(recepies);
});
