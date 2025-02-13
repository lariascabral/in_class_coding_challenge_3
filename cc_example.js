// Task 1

let orders = [
    {id: 101, customer: "Alice", total: 300} ,
    {id: 102, customer: "Bob", total: 450} ,
    {id: 103, customer: "Charlie", total: 200}
] ;

function findOrder(orders, orderId) {
    return orders.find(order => order.id === orderId) ;
} ;

console.log("Order ID result:", findOrder(orders, 102)) ;


// Task 2

let inventory = {
    items: [],
    addItem(name, quantity) {
        this.items.push({name, quantity})
    } ,
    removeLatestItem() {
        this.items.pop() ;
    } ,

    removeFirstItem() {
        this.items.shift()
    } ,
} ;

inventory.addItem("Monitor", 5) 
inventory.addItem("Keyboard", 10) 
inventory.addItem("Mouse", 3) ;
console.log("Inventory:", JSON.stringify(inventory.items)) ;

inventory.removeLatestItem() ;
console.log("Updated Inventory:", JSON.stringify(inventory.items)) ;

inventory.removeFirstItem() ;
console.log("Final Inventory:", JSON.stringify(inventory.items)) ;
