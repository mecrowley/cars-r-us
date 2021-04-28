import { getTechnology } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            window.alert(`User chose package ${event.target.value}`)
        }
    }
)

export const Technology = () => {
    const techPackages = getTechnology()
    let html = "<ul>"

    const listItems = techPackages.map(techPackage => {
        return `<li><input type="radio" name="technology" value=${techPackage.id} />${techPackage.packageType}</li>`
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}