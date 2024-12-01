import { bg } from '../../../styles/admin/bd-forms/BgAdmin.jsx'
import '../../../styles/admin/AdminOtp.css'
import OtpAdmin from "../../../antd-components/otp-admin/OtpAdmin.jsx";
import {useLocation, useNavigate} from "react-router-dom";
const AdminOtp = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const fromPage = location.state?.from;

    const handleNavigate = () => {
        if (fromPage === 'reset-password') {
            navigate('/create-new-password');
        } else {
            navigate('/admin');
        }
    };

    return (
        <div style={bg} className='admin-otp'>
            <div className="content">
                <div className="title">
                    <h1>Напишите 6 значный код</h1>
                </div>
                <div className="forms">
                    <OtpAdmin/>
                </div>
                <div className="buttons">
                    <div className="time">
                        <a href="">Отправить ещё раз</a>
                        <h4>1:50</h4>
                    </div>
                    <div className="button">
                        <button onClick={handleNavigate}>Далее</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AdminOtp;
