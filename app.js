import { createFilter } from "./filter.js";

var mainBody = document.body

var a =document.createElement("p")
a.textContent = "After Filter"

mainBody.appendChild(createFilter())
mainBody.appendChild(a)