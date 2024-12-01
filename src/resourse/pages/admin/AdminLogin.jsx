import { bg } from '../../../styles/admin/bd-forms/BgAdmin.jsx'
import '../../../styles/admin/AdminLogin.css'
import InputMuiPassword from "../../../mui-components/InputPassword.jsx";
import InputMui from "../../../mui-components/InputMui.jsx";
import {useState} from "react";
const AdminLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const getEmail = (emailGet) => {
        setEmail(emailGet)
    }
    const getPassword = (passwordGet) => {
        setPassword(passwordGet)
    }
    const logLogin = () => {
        console.log(email, password)
    }
    return (
        <div style={bg} className='admin-login'>
            <div className="content">
                <div className="title">
                    <h1>Войти</h1>
                </div>
                <div className="forms">
                    <InputMui text="Email" onChange={getEmail}/>
                    <InputMuiPassword text='Пароль' onChange={getPassword}/>
                </div>
                <div className="reset-password">
                    <a href="/reset-password">Забыли Пароль ?</a>
                </div>
                <div className="buttons-login">
                    <button onClick={() => {
                        logLogin()
                    }}>Войти</button>
                    <span>Нет аккаунт ? <a href="/register">Регистрация</a></span>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
