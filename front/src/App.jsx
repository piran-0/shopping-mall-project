import { useState } from "react"

import Header from "./components/Header"
import "./App.css"
import MainProduct from "./components/MainProduct"
import Footer from "./components/Footer"

function App() {
  const [productInfo, setProductInfo] = useState({ products: [] })

  function addProducts(product) {
    setProductInfo(prevProduct => {
      const newProduct = {
        id: Math.floor(Math.random() * 100),
        image: product.image,
        title: product.title,
        price: product.price
      }

      return {
        ...prevProduct,
        products: [...prevProduct.products, newProduct]
      }
    }
    )
    console.log({ ...productInfo })
  }

  return (
    <div id="app-container">
      <Header products={productInfo.products} />
      <main id="main-container">
        <MainProduct addItem={addProducts} />
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
