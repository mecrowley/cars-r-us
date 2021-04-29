import { getColors, setColor } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            setColor(parseInt(event.target.value))
        }
    }
)

export const PaintColors = () => {
    const colors = getColors()
    let html = "<ul>"

    const listItems = colors.map(color => {
        return `<li><input type="radio" name="color" value="${color.id}" />${color.colorName}</li>`
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}