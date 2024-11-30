import {useRoutes} from "react-router-dom";
import routes from "../router/Router.jsx";
import './App.css'

const App = () => {
    const routing = useRoutes(routes)
    return (
        <div>
            {routing}
        </div>
    );
};

export default App;
