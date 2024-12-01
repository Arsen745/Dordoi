import LayoutAdmin from "../resourse/layout/admin/Layout.jsx";
import LayoutClient from "../resourse/layout/client/Layout.jsx";
import ClientHome from "../resourse/pages/client/ClientHome.jsx";
import ClientAbout from "../resourse/pages/client/ClientAbout.jsx";
import ClientProducts from "../resourse/pages/client/ClientProducts.jsx";
import AdminHome from "../resourse/pages/admin/AdminHome.jsx";
import About from "../resourse/pages/admin/About.jsx";
import ClientInstructions from "../resourse/pages/client/ClientInstructions.jsx";
import ClientCart from "../resourse/pages/client/ClientCart.jsx";
import NotFound from "../resourse/layout/client/NotFound.jsx";

const routes = [
    {
        path: '',
        element: <LayoutClient/>,
        children: [
            {
                path: '/',
                element: <ClientHome/>,
            },
            {
                path: '/about',
                element: <ClientAbout/>,
            },
            {
                path: '/products',
                element: <ClientProducts/>
            },
            {
                path: '/instructions',
                element: <ClientInstructions/>
            },
            {
                path: '/cart',
                element: <ClientCart/>
            }
        ]
    },
    {
        path: '',
        element: <LayoutAdmin/>,
        children: [
            {
                path: '/admin',
                element: <AdminHome/>
            },
            {
                path: '/about-admin',
                element: <About/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
]
export default routes;