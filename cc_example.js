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