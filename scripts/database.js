const database = {
    paintColors: [
        { id: 1, colorName: "Silver", price: 100 },
        { id: 2, colorName: "Midnight Blue", price: 200 },
        { id: 3, colorName: "Firebrick Red", price: 300 },
        { id: 4, colorName: "Spring Green", price: 200 }
    ],
    interiors: [
        { id: 1, interiorType: "Beige Fabric", price: 222 },
        { id: 2, interiorType: "Charcoal Fabric", price: 333 },
        { id: 3, interiorType: "White Leather", price: 555 },
        { id: 4, interiorType: "Black Leather", price: 666 }
    ],
    technology: [
        { id: 1, packageType: "Basic Package", price: 15000 },
        { id: 2, packageType: "Navigation Package", price: 16500 },
        { id: 3, packageType: "Visibility Package", price: 17000 },
        { id: 4, packageType: "Ultra Package", price: 18500 }
    ],
    wheels: [
        { id: 1, wheelType: "17-inch Pair Radial", price: 1000 },
        { id: 2, wheelType: "17-inch Pair Radial Black", price: 1500 },
        { id: 3, wheelType: "18-inch Pair Spoke Silver", price: 2000 },
        { id: 4, wheelType: "18-inch Pair Spoke Black", price: 2500 }
    ],
    models: [
        { id: 1, modelType: "Car", priceIncreaseFactor: 1 },
        { id: 2, modelType: "SUV", priceIncreaseFactor: 1.5 },
        { id: 3, modelType: "Truck", priceIncreaseFactor: 2.25 }
    ],
    carOrders: [

    ],
    orderBuilder: {}
}

export const getColors = () => {
    return [...database.paintColors]
}

export const getInterior = () => {
    return [...database.interiors]
}

export const getTechnology = () => {
    return [...database.technology]
}

export const getWheels = () => {
    return [...database.wheels]
}

export const getModels = () => {
    return [...database.models]
}

export const getOrders = () => {
    return [...database.carOrders]
}

export const getOrderBuilder = () => {
    return {...database.orderBuilder}
}

export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const setModel = (id) => {
    database.orderBuilder.modelId = id
}

export const addCustomerOrder = () => {
    if ("colorId" in database.orderBuilder &&
        "interiorId" in database.orderBuilder &&
        "technologyId" in database.orderBuilder &&
        "wheelId" in database.orderBuilder &&
        "modelId" in database.orderBuilder) {

        const newOrder = { ...database.orderBuilder }
        newOrder.id = [...database.carOrders].length + 1
        newOrder.timestamp = Date.now()
        database.carOrders.push(newOrder)
        database.orderBuilder = {}
        document.dispatchEvent(new CustomEvent("stateChanged"))
        return true
    }
    return false
}