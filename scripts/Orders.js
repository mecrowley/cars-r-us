import { getColors, getInterior, getModels, getOrders, getTechnology, getWheels } from "./database.js"


const buildOrderListItem = (order) => {
    const paintColors = getColors()
    const interiors = getInterior()
    const techPackages = getTechnology()
    const wheels = getWheels()
    const models = getModels()

    const foundColor = paintColors.find(color => color.id === order.colorId)
    const foundInterior = interiors.find(interior => interior.id === order.interiorId)
    const foundTechnology = techPackages.find(techPackage => techPackage.id === order.technologyId)
    const foundWheels = wheels.find(wheel => wheel.id === order.wheelId)
    const foundModel = models.find(model => model.id === order.modelId)

    const totalPrice = (foundColor.price + foundInterior.price + foundTechnology.price + foundWheels.price) * foundModel.priceIncreaseFactor

    const costString = totalPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    Order #${order.id} cost ${costString}
</li>`

}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"
    const listItems = orders.map(buildOrderListItem)
    html += listItems.join("")
    html += "</ul>"

    return html
}