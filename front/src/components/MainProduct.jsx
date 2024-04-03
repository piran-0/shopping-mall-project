import { PRODUCT_LIST } from "../product"

export default function MainProduct() {
    return (
        <div id="mainProduct-container">
            <div id="mainProduct-title">
                <h1>BEST</h1>
                <p>렌디몰에서 가장 인기있는 상품을 만나보세요</p>
            </div>
            <ul id="mainProduct-box-list">
                {PRODUCT_LIST.map(product => (
                    <li key={product.id} id="mainProduct-products">
                        <button>
                            <img id="mainProduct-products-image" src={product.image.src} alt={product.image.alt} />
                            <div id="mainProduct-info">
                                <div>
                                    <h3 id="mainProduct-products-title">{product.title}</h3>
                                    <p id="mainProduct-products-price">{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                                </div>
                                <button id="mainProduct-btn">+</button>
                            </div>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}