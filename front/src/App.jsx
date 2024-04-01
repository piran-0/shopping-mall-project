import Header from "./components/Header"
import "./App.css"
import MainProduct from "./components/MainProduct"

function App() {
  return (
    <div id="app-container">
      <Header />
      <main id="main-container">
        <MainProduct />
      </main>
    </div>
  )
}

export default App
