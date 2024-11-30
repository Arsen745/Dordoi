import ProductsCategory from "../../component/client/products-category/Products-Category.jsx";
import Card from "../../component/client/cards/Card.jsx";
import cardImage from '../../../../public/assets/card-image.png'
import '../../../styles/client/products-page/ProductsPage.css'

const ClientProducts = () => {
  const data = [
    {
      image: cardImage,
      name: 'Стиральный машина',
      model: 'Blesk BL-XCQ 15 F',
      price: '12000',
      shop: 'Орто Сай'
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
      name: 'Стиральный машина',
      model: 'Blesk BL-XCQ 15 F',
      price: '12000',
      shop: 'Орто Сай'
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
      name: 'Стиральный машина',
      model: 'Blesk BL-XCQ 15 F',
      price: '12000',
      shop: 'Орто Сай'
    },
    {
      image: cardImage,
      name: 'Стиральный машина',
      model: 'Blesk BL-XCQ 15 F',
      price: '12000',
      shop: 'Орто Сай'
    },
  ]
  return (
    <div className='products-page'>
      <div className="category-left">
        <ProductsCategory/>
      </div>
      <div className="cards-products">
        {data.map((el, index) => (
            <Card key={index} name={el.name} model={el.model} price={el.price} shop={el.shop} image={el.image}/>
        ))}
      </div>
    </div>
  )
}

export default ClientProducts