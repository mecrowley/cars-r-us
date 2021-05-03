import { getColors, getOrderBuilder, setColor } from "./database.js";

const colors = getColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            setColor(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const PaintColors = () => {
    const newOrder = getOrderBuilder()
    let html = "<ul>"

    const listItems = colors.map(color => {
        if (color.id === newOrder.colorId) {
            return `<li>
            <input type="radio" name="color" value="${color.id}" checked="checked" /> ${color.colorName}
        </li>`
        } else {
            return `<li>
            <input type="radio" name="color" value="${color.id}" /> ${color.colorName}
        </li>`
        }
    })
    html += listItems.join("")
    html += "</ul>"
    return html
}
