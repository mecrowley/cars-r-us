import { getTechnology } from "./database.js";

export const Technology = () => {
    const techPackages = getTechnology()
    let html = "<ul>"

    const listItems = techPackages.map(techPackage => {
        return `<li><input type="radio" name="style" value=${techPackage.id} />${techPackage.packageType}</li>`
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}