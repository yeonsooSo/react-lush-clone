import "../../assets/footer.css";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="footer-menu">
            <div className="footer-inner">
                <div className="logo">
                    <div>
                        <Link to="/">
                            <img src="https://lush.co.kr/data/skin/front/howling/img/banner/1bb87d41d15fe27b500a4bfcde01bb0e_24213.png"></img>
                        </Link>
                    </div>
                    <div className="upper_menu">
                        <ul>
                            <li>스카우트</li>
                            <li>회사소개</li>
                            <li>개인정보처리방침</li>
                            <li>영상정보관리지침</li>
                            <li>이용약관</li>
                            <li>고객센터</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="left_menu">
                <ul>
                    <li>고객센터</li>
                    <li className="email">janu10.sys@gmail.com</li>
                    <li>상담전화 13:00~16:00(평일)</li>
                    <li>상담톡 10:00~16:00(평일)</li>
                </ul>
                <ul>
                    <li>기업선물</li>
                    <li className="email">s_kitesoo94@naver.com</li>
                    <li>상담전화 13:00~16:00(평일)</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;