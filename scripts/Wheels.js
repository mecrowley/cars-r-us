import { getWheels, setWheels } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheels(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    const wheels = getWheels()
    let html = "<ul>"

    const listItems = wheels.map(wheel => {
        return `<li><input type="radio" name="wheel" value=${wheel.id} />${wheel.wheelType}</li>`
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}