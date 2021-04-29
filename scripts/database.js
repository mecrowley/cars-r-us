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
    carOrders: [
        {
            id: 1,
            colorId: 3,
            interiorId: 4,
            technologyId: 4,
            wheelId: 4,
            timestamp: 1619669783435
        }
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

export const getOrders = () => {
    return [...database.carOrders]
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

export const addCustomerOrder = () => {
    const newOrder = {...database.orderBuilder}
    newOrder.id = [...database.carOrders].pop().id + 1
    newOrder.timestamp = Date.now()
    database.carOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}