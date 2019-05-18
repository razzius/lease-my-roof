import React from "react"
import ProductCard from "../components/ProductCard"

const ProductRow = props => (
  <div
    style={{
      display: "flex",
      maxWidth: "800px",
      margin: "auto",
      justifyContent: "space-around",
      paddingBottom: "2em"
    }}
  >
    {props.children}
  </div>
)

export default props => (
  <div>
    <ProductRow>
      <ProductCard
        addToCart={props.addToCart}
        name="Product 1"
        price="$10"
        savings="$15"
      />
      <ProductCard
        addToCart={props.addToCart}
        name="Product 2"
        price="$20"
        savings="$15"
      />
      <ProductCard
        addToCart={props.addToCart}
        name="Product 3"
        price="$30"
        savings="$15"
      />
    </ProductRow>
  </div>
)
