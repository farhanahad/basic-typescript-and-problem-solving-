//You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

//Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
  }
  
  function filterProducts<T extends Product>(
    products: T[],
    criterion: keyof T,
    value: T[keyof T]
  ): T[] {
    return products.filter(product => product[criterion] === value);
  }

  const products: Product[] = [
    { id: 1, name: "Product A", price: 10, category: "Category A" },
    { id: 2, name: "Product B", price: 20, category: "Category B" },
    { id: 3, name: "Product C", price: 30, category: "Category A" },
    { id: 4, name: "Product D", price: 40, category: "Category B" },
  ];
  
  const filteredProducts = filterProducts(products, 'category', 'Category A');
  
  console.log(filteredProducts); // Output: [{ id: 1, name: "Product A", price: 10, category: "Category A" }, { id: 3, name: "Product C", price: 30, category: "Category A" }]
  