//Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.


type ProductTuple = [string, number, number];
type ProductArray = ProductTuple[];

function calculateTotalCost(products: ProductArray): number {
  let totalCost = 0;
  for (const product of products) {
    const [name, price, quantity] = product;
    totalCost += price * quantity;
  }
  return totalCost;
}

// Example usage:
const products: ProductArray = [
  ["Product A", 10.99, 2],
  ["Product B", 5.99, 3],
  ["Product C", 3.49, 1],
];
const totalCost = calculateTotalCost(products);
console.log(`Total cost: ${totalCost}`);
