import { Carousel } from 'antd';
import './Banner.css'
import BanerImage from '../../../public/assets/baner-image.png'
const contentStyle = {
    color: '#fff',
    background: '#364d79',
    height: '100%',
    padding: '20px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};
const Banner = () => {
    return (
        <div>
            <Carousel arrows infinite={false}>
                <div>
                   <div className="content-baner" style={contentStyle}>
                       <div className="left">
                           <h1>Скидка от Redmi</h1>
                           <p>успей получить</p>
                       </div>
                       <div className="right">
                           <img src={BanerImage} alt=""/>
                       </div>
                   </div>
                </div>
                <div>
                   <div className="content-baner" style={contentStyle}>
                       <div className="left">
                           <h1>Скидка от Redmi</h1>
                           <p>успей получить</p>
                       </div>
                       <div className="right">
                           <img src={BanerImage} alt=""/>
                       </div>
                   </div>
                </div>
                <div>
                   <div className="content-baner" style={contentStyle}>
                       <div className="left">
                           <h1>Скидка от Redmi</h1>
                           <p>успей получить</p>
                       </div>
                       <div className="right">
                           <img src={BanerImage} alt=""/>
                       </div>
                   </div>
                </div>
                <div>
                   <div className="content-baner" style={contentStyle}>
                       <div className="left">
                           <h1>Скидка от Redmi</h1>
                           <p>успей получить</p>
                       </div>
                       <div className="right">
                           <img src={BanerImage} alt=""/>
                       </div>
                   </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
