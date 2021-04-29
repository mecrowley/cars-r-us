import { getModels, setModel } from "./database.js";

const models = getModels()

document.addEventListener("change", (event) => {
    if (event.target.name === "model") {
        setModel(parseInt(event.target.value))
    }
})

export const Models = () => {
    const modelItem = models.map((model) => {
        return `<div class="model">
        <input type="radio" name="model" value="${model.id}" /> ${model.modelType}
        </div>`
    })
    let html = modelItem.join("")
    return html
}