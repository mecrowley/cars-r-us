import { getWheels } from "./database.js";

export const Wheels = () => {
    const wheels = getWheels()
    let html = "<ul>"

    const listItems = wheels.map(wheel => {
        return `<li><input type="radio" name="style" value=${wheel.id} />${wheel.wheelType}</li>`
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}