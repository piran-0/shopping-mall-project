export default function CartModal({ setModalOpen, products }) {
    function closeModal() {
        setModalOpen(false)
    }

    return (
        <div id="modal-background">
            <div id="modal">
                <h2>Shopping Cart</h2>
                <ul>
                    <li>Product</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Total</li>
                </ul>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            <img src={product.image.src} alt={product.image.alt} />
                            <h3>{product.title}</h3>
                            <p>{product.price}</p>
                        </li>
                    ))}
                </ul>
                <button onClick={closeModal}>닫기</button>
            </div>
        </div>
    )

}
