
export function createRadioBox(id) {
    var radioBox = document.createElement("input")
    radioBox.type = 'radio'
    radioBox.id = id
    radioBox.onclick = () => {
        radioBoxCheckClear(id) 
        radioBox.checked = !radioBox.checked
    }
    return radioBox
}

export function radioBoxCheckClear(id) {
    var rBoxs = document.querySelectorAll(`input[id=${id}]`)
    for (var rb of rBoxs) {
        rb.checked = false
    }
}