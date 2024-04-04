export default function CartModal({ setModalOpen }) {
    function closeModal() {
        setModalOpen(false)
    }

    return (
        <div>
            <div>장바구니</div>
            <button onClick={closeModal}>닫기</button>
        </div>
    )
}
