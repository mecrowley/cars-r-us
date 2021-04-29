import { getInterior, setInterior } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    const interiors = getInterior()
    let html = "<ul>"

    const listItems = interiors.map(interior => {
        return `<li><input type="radio" name="interior" value="${interior.id}" />${interior.interiorType}</li>`
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}