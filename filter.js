import {createRadioBox, radioBoxCheckClear} from "./radioBox.js"

const listId = ["difficulty", "prepTime", "categories"]
/**
 * Helper Functions
 */
 function createLabel(labelText, id) {
    var cellLabel = document.createElement('label')
    cellLabel.htmlFor = id
    cellLabel.innerText = labelText
    return cellLabel
}

export function createFilter() {
    var filterDiv = document.createElement("div")
    filterDiv.id = "filter"

    /**
     * Create the filter Button
     */
    var filterButton = document.createElement("button")
    filterButton.innerText = "Filter"
    filterButton.id = "filterButton"
    // filterButton.className = "btn"
    filterButton.onclick = () => {
        const currTable = document.getElementById("filterBox")
        currTable.style.display = (currTable.style.display === "none")?"block":"none"
    }

    /**
     * Creating Filter Section/Box
     */
    var filterSection = document.createElement("div")
    filterSection.id = "filterBox"
    filterSection.style.display = "none"

    var filterButtonSection = document.createElement("div")
    filterButtonSection.id = "filterBtnSection"

    /**
     * Create Clear and Apply button 
     */
    var clearButton = document.createElement("button")
    clearButton.id = "filterClearButton"
    clearButton.innerText = "Clear"
    clearButton.className = "btn"
    clearButton.onclick = () => {
        for (var index = 0; index < listId.length; index++) {
            var id = listId[index]
            radioBoxCheckClear(id)
        }
    }

    var applyButton = document.createElement("button")
    applyButton.id = "filterApplyButton"
    applyButton.innerText = "Apply"
    applyButton.className = "btn"
    applyButton.onclick = () => {
        filterButton.onclick()
    }

    filterButtonSection.appendChild(clearButton)
    filterButtonSection.appendChild(applyButton)
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

    filterSection.appendChild(filterTable)
    filterSection.appendChild(filterButtonSection)

    filterDiv.appendChild(filterButton)
    filterDiv.appendChild(filterSection)

    return filterDiv
}