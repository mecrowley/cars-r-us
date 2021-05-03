import { getOrderBuilder, getWheels, setWheels } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheels(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const Wheels = () => {
    const newOrder = getOrderBuilder()
    let html = "<ul>"

    const listItems = wheels.map(wheel => {
        if (wheel.id === newOrder.wheelId) {
            return `<li>
            <input type="radio" name="wheel" value="${wheel.id}" checked="checked" /> ${wheel.wheelType}
        </li>`
        } else {
            return `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.wheelType}
        </li>`
        }
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}