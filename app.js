import {createRadioBox} from "./radioBox.js"

/**
 * Helper Functions
 */
function createLabel(labelText, id) {
    var cellLabel = document.createElement('label')
    cellLabel.htmlFor = id
    cellLabel.innerText = labelText
    return cellLabel
}

var filterSection = document.getElementById("filter")

/**
 * Create the filter Button
 */
var filterButton = document.createElement("button")
filterButton.innerText = "Filter"
filterButton.id = "filterButton"

/**
 * Create table to contains the filter
 */
var filterTable = document.createElement("table")
filterTable.id = "filterTable"

var filterHeaders = ["Difficulty", "Time", "Categories"]
var difficulty = ["Easy", "Medium", "Hard"]
var time = ["5 minutes", "10 minute", "1 hour"] 
var categories = ["Breakfast", "Salad", "Lunch", "Dinner"]

var maxRow = Math.max(difficulty.length, Math.max(time.length, categories.length))

// Setting up the table headers
var headerRow = filterTable.insertRow(0)

for (var headerIndex = 0; headerIndex < filterHeaders.length; headerIndex++) {
    var headerCell = document.createElement("TH")
    headerCell.innerText = filterHeaders[headerIndex]
    headerRow.appendChild(headerCell)
}

// Adding the filter details to the table
for (var index = 0; index < maxRow; index++) {
    var insertedRow = filterTable.insertRow()
    var difficultyEntry = insertedRow.insertCell()
    var timeEntry = insertedRow.insertCell()
    var categoriesEntry = insertedRow.insertCell()

    if (index < difficulty.length) {
        difficultyEntry.appendChild(createRadioBox("difficulty"))
        difficultyEntry.appendChild(createLabel(difficulty[index]), "difficulty")   
    }

    if (index < time.length) {
        timeEntry.appendChild(createRadioBox("prepTime"))
        timeEntry.appendChild(createLabel(time[index]), "prepTime")    
    }
    
    if (index < categories.length) {
        categoriesEntry.appendChild(createRadioBox("categories"))
        categoriesEntry.appendChild(createLabel(categories[index], "categories"))
    }
    
}

filterSection.appendChild(filterButton)
filterSection.appendChild(filterTable)

