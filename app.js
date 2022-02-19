import { createFilter } from "./filter.js";
import { cleanUpRecipe } from "./file.js";
import { createData } from "./displayData.js";
var mainBody = document.body;

var a = document.createElement("p");
a.textContent = "After Filter";

mainBody.appendChild(createFilter());
mainBody.appendChild(a);
cleanUpRecipe();
createData();
