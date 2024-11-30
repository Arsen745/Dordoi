import { Outlet } from 'react-router-dom'
import Header from "../../component/client/Header.jsx";
import Nav from "../../component/client/Nav.jsx";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Nav/>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;
