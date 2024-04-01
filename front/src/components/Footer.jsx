import logo from "../assets/logoImg.png"
import Nav from "./Nav"

export default function Footer() {
    return (
        <footer id="footer">
            <img src={logo} alt="rendy mall logo" />
            <div id="footer-text">
                <p>상호 : 렌디몰(주) </p>
                <p>사업장소재지 : 경기도 김포시</p>
                <p>대표이사 : 권민영</p>
                <p>제휴/광고문의 : minypodo@gmail.com</p>
                <p>사업자등록번호 : 362-15265-515</p>
                <p>통신판매업 신고번호 : 2024-51384</p>
                <p>Copyright © 2024 Rendy . All Rights Reseved.</p>
            </div>
        </footer>
    )
}