import Baner from "../../component/client/Banner.jsx";
import '../../../styles/client/Home.css'
import Cards from "../../component/client/cards/Cards.jsx";

const ClientHome = () => {
    return (
        <div className='home-page'>
            <div className="baner-home">
                <Baner/>
            </div>
            <div className="cards-home">
                <Cards/>
            </div>
        </div>
    );
};

export default ClientHome;
