import image from '../images/image.png';
import { MdKeyboardArrowLeft } from "react-icons/md";

function Header() {
    return (
        <>
            <div className='test'>
                <div style={styles.header}>
                    <div style={styles.headerContainer}>

                        <div className="logoContainer">
                            <img src={image} alt="img" />
                        </div>
                        <ul className='headerUl' style={styles.headerUl}>
                            <li>الرئيسية</li>
                            <li>من نحن</li>
                            <li>خدماتنا</li>
                            <li>اعمالنا</li>
                            <li>تواصل معانا </li>
                        </ul>

                        <div className='contact' >
                            <div className='numbers'>
                                <span>+966-11-4501055</span>
                                <span>+966-11-4501055</span>
                            </div>
                            <button><p>ابدأ مشروعك</p>
                                    <MdKeyboardArrowLeft className='icon' />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
const styles = {
    header: {
        width: '1440px',
        height: '171.1px',
        background: '#87098A',
        // error
        margin: '0px 5%',
        top: '-0.1px',
        color: '#FFFFFF',
        border: '0px 0px 1px 0px'
    },
    headerContainer: {
        background: '#87098A',
        width: '1,264px',
        height: '167px',
        left: '88px',
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
        alignItems: 'center'
    },
    headerUl: {
        width: '425px',
        height: '31,04px',
        gap: '40px',
    },
};

export default Header;
