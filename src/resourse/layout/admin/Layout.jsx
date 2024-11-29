import { Outlet } from 'react-router-dom'
import Header from "../../component/admin/Header.jsx";

const Layout = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;
