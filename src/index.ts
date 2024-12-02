
type Pizza = {
    name: string,
    price: number,
}


const menu = [
    {name : "Margherita", price: 8},
    {name : "Pepperoni", price: 10},
    {name : "Hawaiian", price: 10},
    {name : "Veggie", price: 8},
]

let cashInRegister = 100
const orderQueue = []
let nextOrderId = 1

function addNewPizza(Pizza:Pizza){
    menu.push(Pizza)
}

function placeOrder(name:string){
    const pizobj = menu.find(pizzaObject => pizzaObject.name === name)
    if (!pizobj){
        console.error(`${name} does not exist in the menu`)
        return
    }

    cashInRegister += pizobj.price
    const ordObj = {pizza: pizobj, status: "ordered", id: nextOrderId++}
    orderQueue.push(ordObj)
    return ordObj

}

function completeOrder(orderId:number){
    const ordObj = orderQueue.find(ordObject => ordObject.id === orderId)

    ordObj.status = "completed"
    return ordObj

}


addNewPizza({name: "Chicken Bacon Ranch", price: 12})
addNewPizza({name: "BBQ Chicken", price: 12})
addNewPizza({name: "Spicy Sausage", price: 11})


placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)