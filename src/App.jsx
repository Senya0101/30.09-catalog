import React from "react";
import Catalog from "./Catalog";
import catalog from "./data/catalog";

export default function App() {
  return (
    <div className="container py-4">
      <h1 className="mb-4">{catalog.title}</h1>
      <Catalog products={catalog.products}/>
    </div>
  )
}

console.log('catalog:', catalog)
console.log('products:', catalog.products)
