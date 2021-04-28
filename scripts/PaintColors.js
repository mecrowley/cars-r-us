import { getColors } from "./database.js";

export const PaintColors = () => {
    const colors = getColors()
    let html = "<ul>"

    const listItems = colors.map(color => {
        return `<li><input type="radio" name="style" value="${color.id}" />${color.colorName}</li>`
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}