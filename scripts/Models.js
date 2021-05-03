import { getModels, getOrderBuilder, setModel } from "./database.js";

const models = getModels()

document.addEventListener("change", (event) => {
    if (event.target.name === "model") {
        setModel(parseInt(event.target.value))
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

export const Models = () => {
    const newOrder = getOrderBuilder()
    const modelItem = models.map((model) => {
        if (model.id === newOrder.modelId) {
            return `<div class="model">
            <input type="radio" name="model" value="${model.id}" checked="checked" /> ${model.modelType}
        </div>`
        } else {
            return `<div class="model">
            <input type="radio" name="model" value="${model.id}" /> ${model.modelType}
        </div>`
        }
    })
    let html = modelItem.join("")
    return html
}