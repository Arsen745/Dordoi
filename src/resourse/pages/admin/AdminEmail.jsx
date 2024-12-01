import { bg } from '../../../styles/admin/bd-forms/BgAdmin.jsx'
import '../../../styles/admin/AdminEmail.css'
import InputMui from "../../../mui-components/InputMui.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
const AdminEmail = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const handleNavigate = () => {
        console.log(email)
        navigate('/admin-otp', { state: { from: 'reset-password' } });
    };
    const getEmail = (emailGet) => {
        setEmail(emailGet)
    }

    return (
        <div style={bg} className='admin-email'>
            <div className="content">
                <div className="title">
                    <h1>Введите Email</h1>
                </div>
                <div className="forms">
                    <InputMui text='Email' value={email} onChange={getEmail}/>
                    <button onClick={handleNavigate}>Далее</button>
                </div>
            </div>
        </div>
    );
};

export default AdminEmail;
