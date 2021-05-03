import { getTechnology, setTechnology, getOrderBuilder } from "./database.js";

const techPackages = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const Technology = () => {
    const newOrder = getOrderBuilder()
    let html = "<ul>"

    const listItems = techPackages.map(techPackage => {
        if (techPackage.id === newOrder.technologyId) {
            return `<li>
            <input type="radio" name="technology" value="${techPackage.id}" checked="checked" /> ${techPackage.packageType}
        </li>`
        } else {
            return `<li>
            <input type="radio" name="technology" value="${techPackage.id}" /> ${techPackage.packageType}
        </li>`
        }
            })

    html += listItems.join("")
    html += "</ul>"
    return html
}