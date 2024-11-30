import '../../../../styles/client/cards/Card.css'
import Heart from "../../../../mui-components/Heartt.jsx";

const Card = (props) => {
    let name, price, image, shop, model;
    ({name, price, image, shop, model} = props);
    return (
        <div className='card'>
            <div className="top-content-card">
                <img src={image} alt=""/>
                <div className="like">
                    <Heart/>
                </div>
                <div className="discount">
                    <h3>-20%</h3>
                </div>
            </div>
            <div className="bottom-content-card">
                <h2>{name}</h2>
                <h2>{model}</h2>
                <h2>{price}сом</h2>
                <h2>магазин: <span>{shop}</span></h2>
                <button>Добавить в корзину</button>
            </div>
        </div>
    );
};

export default Card;
