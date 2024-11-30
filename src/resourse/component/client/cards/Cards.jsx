import '../../../../styles/client/cards/Cards.css'
import Card from "./Card.jsx";
import cardImage from '../../../../../public/assets/card-image.png'
import {useNavigate} from "react-router-dom";
const Cards = () => {
    const data = [
        {
            image: cardImage,
            name: 'Пылесос',
            model: 'Blesk BL-XCQ 15 F',
            price: '12000',
            shop: 'Bereketd'
        },
        {
            image: cardImage,
            name: 'Стиральный машина',
            model: 'Blesk BL-XCQ 15 F',
            price: '12000',
            shop: 'Орто Сай'
        },
        {
            image: cardImage,
            name: 'Чайник',
            model: 'Blesk BL-XCQ 15 F',
            price: '34000',
            shop: 'Bereketa'
        },
        {
            image: cardImage,
            name: 'Пылесос',
            model: 'Blesk BL-XCQ 15 F',
            price: '12000',
            shop: 'Bereketj'
        },
        {
            image: cardImage,
            name: 'Блендер',
            model: 'Blesk BL-XCQ 15 F',
            price: '12000',
            shop: 'Bereketc'
        },

    ]
    const navigate = useNavigate()
    return (
        <>
            <div className="title"><h1>Товары со скидками — <span>самые выгодные предложения</span></h1></div>
            <div className='cards'>
                {data.map(el => (
                    <Card key={el.shop} name={el.name} price={el.price} model={el.model} image={el.image}
                          shop={el.shop}/>
                ))}

            </div>
            <div className="button-next">
                <button onClick={() => {
                    navigate('/products')
                }}>Показать ещё</button>
            </div>

        </>
    );
};

export default Cards;
