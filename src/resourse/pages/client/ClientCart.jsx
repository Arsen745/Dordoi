import CartCards from "../../component/client/cart/CartCards.jsx";
import cartImage from '../../../../public/assets/card-image.png'

const ClientCart = () => {
    const data = [
        {
            image: cartImage,
            name: 'Пылесос',
            model: 'ARTEL 05-EX2',
            price: '37000',
            shop: 'Techno Dordoi',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolores enim expedita explicabo facilis fugiat labore laborum, maiores nulla rerum?',
            promotion: 2
        },
        {
            image: cartImage,
            name: 'Пылесос',
            model: 'ARTEL 05-EX2',
            price: '5000',
            shop: 'Techno Dordoi',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolores enim expedita explicabo facilis fugiat labore laborum, maiores nulla rerum?',
            promotion: 0
        },
        {
            image: cartImage,
            name: 'Пылесос',
            model: 'ARTEL 05-EX2',
            price: '5000',
            shop: 'Techno Dordoi',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolores enim expedita explicabo facilis fugiat labore laborum, maiores nulla rerum?',
            promotion: '20'
        },
        {
            image: cartImage,
            name: 'Пылесос',
            model: 'ARTEL 05-EX2',
            price: '5000',
            shop: 'Techno Dordoi',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolores enim expedita explicabo facilis fugiat labore laborum, maiores nulla rerum?',
            promotion: '0'
        },
        {
            image: cartImage,
            name: 'Пылесос',
            model: 'ARTEL 05-EX2',
            price: '5000',
            shop: 'Techno Dordoi',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolores enim expedita explicabo facilis fugiat labore laborum, maiores nulla rerum?',
            promotion: '20'
        },
    ]
    return (
        <div className='container'>
            {data.map((el, index) => {
                return (
                    <CartCards
                        key={index}
                        name={el.name}
                        model={el.model}
                        description={el.description}
                        price={el.price}
                        shop={el.shop}
                        promotion={el.promotion}
                        image={el.image}
                    />
                );
            })}

        </div>
    );
};

export default ClientCart;
