import '../../../../styles/client/cart/CartCards.css'
import {useState} from "react";
const CartCards = (props) => {
    let name, model, image, price, shop, promotion, description;
    ({name, model, image, price, shop, promotion, description} = props);
    const proPrice = price * promotion
    const proPrice2 = proPrice / 100

    const [count, setCount] = useState(1);
    const priceFine = price - proPrice2
    const priceFine2 = priceFine * count


    const increment = () => {
        setCount(prevState => prevState + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(prevState => prevState - 1);
        } else {
            return;
        }
    };
    return (
        <div className='cart-cards'>
            <div className="left">
                <div className="image">
                    <img src={image} alt=""/>
                </div>
                <div className="data">
                    <h1>{name}</h1>
                    <h2>{model}</h2>
                    <h2>{price}сом</h2>
                    <h2>магазин: <span>{shop}</span></h2>
                    <p><span>О товаре: </span>{description} </p>
                </div>
            </div>
            <div className="right">
                <div className="top">
                        <div className="title">
                            <h1>Сумма заказа</h1>
                        </div>
                    <div className="descriptions">
                        <div className="count">
                            <p><span>Общее количество:</span>{count}шт</p>
                        </div>
                        <div className="count">
                            <p><span>Стоитмость:</span> {count * price}сом</p>
                        </div>
                        <div className="count">
                            <p><span>Доставка: </span> 300сом</p>
                        </div>
                        <div className="count">
                            <p><span>Скидка: </span>{promotion === 0 ? '0 сом' : '-' + proPrice2 + ' сом'}</p>
                        </div>
                    </div>
                    <div className="parent-price">
                    <h1><span>К оплате: </span> {priceFine2}сом</h1>
                    </div>
                </div>
                <div className="bottom">
                    <div className="buttons">
                        <button onClick={() => {
                            decrement()
                        }}>-</button>
                        <p>{count}</p>
                        <button onClick={() => {
                            increment()
                        }}>+</button>
                    </div>
                    <div className="delete-order">
                        <button id='order'>Оформить товар</button>
                        <button id="delete">Удалить из корзина</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartCards;
