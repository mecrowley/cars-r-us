import { getInterior, setInterior, getOrderBuilder } from "./database.js";

const interiors = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const Interiors = () => {
    const newOrder = getOrderBuilder()
    let html = "<ul>"

    const listItems = interiors.map(interior => {
        if (interior.id === newOrder.interiorId) {
            return `<li>
            <input type="radio" name="interior" value="${interior.id}" checked="checked" /> ${interior.interiorType}
        </li>`
        } else {
            return `<li>
            <input type="radio" name="interior" value="${interior.id}" /> ${interior.interiorType}
        </li>`
        }
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}