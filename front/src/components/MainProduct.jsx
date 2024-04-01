import { PRODUCT_LIST } from "../product"

export default function MainProduct() {
    return (
        <div>
            <div>
                <h1>BEST</h1>
                <p>렌디몰에서 가장 인기있는 상품을 만나보세요</p>
            </div>
            <ul>
                {PRODUCT_LIST.map(product => (
                    <li key={product.id}>
                        <button>
                            <img src={product.image.src} alt={product.image.alt} />
                            <h3>{product.title}</h3>
                            <p>{product.price}원</p>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}