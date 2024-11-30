import '../../../../styles/client/products-page/ProductsPage.css';
import { useState } from 'react';

const ProductsCategory = () => {
    const [showHousehold, setShowHousehold] = useState(false);
    const [showMedia, setShowMedia] = useState(false);
    const [showSmallAppliances, setShowSmallAppliances] = useState(false);
    const [showClimate, setShowClimate] = useState(false);
    const [showKitchen, setShowKitchen] = useState(false);

    return (
        <div className='category-select-products'>
            <div className="title-pageproduct">
                <h1>Категории</h1>
            </div>
            <div className="selects">
                <div className="select1">
                    <div className="title-pageproducts">
                        <h1 onClick={() => setShowHousehold(!showHousehold)} style={{ cursor: 'pointer' }}>Хозяйственная {showHousehold ?
                            <i className="bi bi-chevron-up"></i> : <i className="bi bi-chevron-down"></i>}</h1>
                    </div>
                    {showHousehold && (
                        <div className="items">
                            <p>Пылесос</p>
                            <p>Утюг</p>
                            <p>Моющие средства</p>
                        </div>
                    )}
                </div>
                <div className="select1">
                    <div className="title-pageproducts">
                        <h1 onClick={() => setShowMedia(!showMedia)} style={{ cursor: 'pointer' }}>
                            Мультимедиа
                            {showMedia ?
                                <i className="bi bi-chevron-up"></i> : <i className="bi bi-chevron-down"></i>}
                        </h1>
                    </div>
                    {showMedia && (
                        <div className="items">
                            <p>Телевизор</p>
                            <p>Камера</p>
                            <p>Колонки</p>
                            <p>Колонки</p>
                        </div>
                    )}
                </div>
                <div className="select1">
                    <div className="title-pageproducts">
                        <h1 onClick={() => setShowSmallAppliances(!showSmallAppliances)} style={{ cursor: 'pointer' }}>
                            Мелкая бытовая
                            {showSmallAppliances ?
                                <i className="bi bi-chevron-up"></i> : <i className="bi bi-chevron-down"></i>}
                        </h1>
                    </div>
                    {showSmallAppliances && (
                        <div className="items">
                            <p>Фен</p>
                            <p>Электробритва</p>
                            <p>Чайник</p>
                            <p>Чайник</p>
                            <p>Чайник</p>
                        </div>
                    )}

                </div>
                <div className="select1">
                    <div className="title-pageproducts">
                        <h1 onClick={() => setShowClimate(!showClimate)} style={{ cursor: 'pointer' }}>
                            Климатическая
                            {showClimate ?
                                <i className="bi bi-chevron-up"></i> : <i className="bi bi-chevron-down"></i>}
                        </h1>
                    </div>
                    {showClimate && (
                        <div className="items">
                            <p>Кондиционер</p>
                            <p>Обогреватель</p>
                            <p>Обогреватель</p>
                            <p>Обогреватель</p>
                            <p>Вентилятор</p>
                        </div>
                    )}
                </div>
                <div className="select1">
                    <div className="title-pageproducts">
                        <h1 onClick={() => setShowKitchen(!showKitchen)} style={{ cursor: 'pointer' }}>
                            Кухонная
                            {showKitchen ?
                                <i className="bi bi-chevron-up"></i> : <i className="bi bi-chevron-down"></i>}
                        </h1>
                    </div>
                    {showKitchen && (
                        <div className="items">
                            <p>Микроволновка</p>
                            <p>Холодильник</p>
                            <p>Блендер</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductsCategory;
