import { getInterior } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
    }
)

export const Interiors = () => {
    const interiors = getInterior()
    let html = "<ul>"

    const listItems = interiors.map(interior => {
        return `<li><input type="radio" name="style" value="${interior.id}" />${interior.interiorType}</li>`
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}