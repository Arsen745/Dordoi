import '../../../styles/client/Header.css'
import Logo from '../../../../public/images/logo.png'
import FilterSelect from "../../../antd-components/filter-select/FilterSelect.jsx";
import ButtonHeader from "../ui-components/buttons-header/ButtonsHeader.jsx";

const Header = () => {
    return (
        <header>
            <div className="content-header container">
                <div className="logo-header">
                    <img src={Logo} alt=""/>
                </div>
                <div className="search-header">
                    <div className="filter">
                        <FilterSelect/>
                    </div>
                    <div className="input">
                        <input type="text" placeholder='Искать товар'/>
                        <button>Искать <i className="bi bi-search"></i></button>
                    </div>
                </div>
                <div className="right-content-header">
                    <div className="nav-button-header">
                        <div className="button-favorite">
                            <i className="bi bi-heart"></i>
                            <p>12</p>
                        </div>
                        <div className="button-cart">
                            <i className="bi bi-cart3"></i>
                            <p>34</p>
                        </div>
                    </div>
                    <div className="buttons-to-admin">
                        <ButtonHeader text='Создать Магазин'/>
                        <ButtonHeader text='Заказы'/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
