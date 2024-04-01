import logo from "../assets/logoImg.png"
import Nav from "./Nav"

export default function Footer() {
    return (
        <footer id="footer">
            <img src={logo} alt="rendy mall logo" />
            <div id="footer-text">
                <p>상호 : 에스엔패션그룹(주) </p>
                <p>사업장소재지 : 서울특별시 구로구 디지털로 257</p>
                <p>대표이사 : 표창욱</p>
                <p>제휴/광고문의 : sonyunara01@gmail.com</p>
                <p>사업자등록번호 : 215-87-38531</p>
                <p>통신판매업 신고번호 : 2015-서울구로-1525</p>
                <p>Copyright © 2024 Rendy . All Rights Reseved.</p>
            </div>
        </footer>
    )
}