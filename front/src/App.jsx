import Header from "./components/Header"
import "./App.css"
import MainProduct from "./components/MainProduct"
import Footer from "./components/Footer"

function App() {
  return (
    <div id="app-container">
      <Header />
      <main id="main-container">
        <MainProduct />
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
