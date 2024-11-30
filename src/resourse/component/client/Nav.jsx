import '../../../styles/client/Nav.css'
import {useNavigate, useLocation} from "react-router-dom";
const Nav = () => {
    const navigate = useNavigate()
    const location = useLocation();
    return (
        <nav>
            <div className="content-nav container">
                <a onClick={() => {navigate('/')}} className={location.pathname === '/' ? 'active' : ''}>Главный</a>
                <a onClick={() => {navigate('/products')}} className={location.pathname === '/products' ? 'active' : ''}>Товары</a>
                <a onClick={() => {navigate('/about')}} className={location.pathname === '/about' ? 'active' : ''}>О нас</a>
                <a onClick={() => {navigate('/instructions')}} className={location.pathname === '/instructions' ? 'active' : ''}>Инструкция</a>
            </div>
        </nav>
    );
};

export default Nav;
