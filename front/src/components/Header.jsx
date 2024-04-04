import { useState } from "react"

import logo from "../assets/logoImg.png"
import logoDark from "../assets/logoImg-dark.png"
import cartImg from "../assets/icon/cart.png"
import searchImg from "../assets/icon/search.png"
import userImg from "../assets/icon/user.png"

import Nav from "./Nav"
import CartModal from "./CartModal"

export default function Header() {
    const [modalOpen, setModalOpen] = useState(false)
    function showModal() {
        setModalOpen(true)
    }

    return (
        <>
            <header id="header">
                <button id="header-logo-btn"><img id="header-logo" src={logo} alt="randy mall logo img" /></button>
                <div id="header-nav-container"><Nav /></div>
                <div id="header-sideBtn-container">
                    <button> <img src={searchImg} alt="search button" /> </button>
                    <button> <img src={userImg} alt="user info button" /> </button>
                    <button onClick={showModal}> <img src={cartImg} alt="cart button" /> </button>

                </div>

            </header>
            {modalOpen && <CartModal setModalOpen={setModalOpen} />}
        </>
    )
}