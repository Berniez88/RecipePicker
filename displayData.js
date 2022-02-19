import { cleanUpRecipe } from "./file.js";
("use strict");
// Display Receipes/format properly
export async function createData(listOfAtt) {
  // recipes is the key of each dictionary
  let cleanedData = await cleanUpRecipe();
  for (let [key, value] of Object.entries(cleanedData)) {
    console.log(key, value);
  }
}
