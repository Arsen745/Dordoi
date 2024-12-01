import { bg } from '../../../styles/admin/bd-forms/BgAdmin.jsx'
import '../../../styles/admin/ADminRegister.css'
import InputMui from "../../../mui-components/InputMui.jsx";
import InputMuiPassword from "../../../mui-components/InputPassword.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
const AdminRegister = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [last_name, setLastName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const handlName = (nameGet) => {
        setName(nameGet)
    }
    const handlLastName = (lastGet) => {
        setLastName(lastGet)
    }
    const handlNumber = (numberGet) => {
        setNumber(numberGet)
    }
    const handlEmail = (emailGet) => {
        setEmail(emailGet)
    }
    const handlePasswordChange1 = (newPassword) => {
        setPassword1(newPassword);
    };
    const handlePasswordChange2 = (newPassword) => {
        setPassword2(newPassword);
    };
    return (
        <div style={bg} className='admin-register'>
            <div className="content">
                <div className="title">
                    <h1>Регистрация</h1>
                </div>
                <div className="forms">
                    <InputMui text='Имя' value={name} onChange={handlName}/>
                    <InputMui text='Фамилия' value={last_name} onChange={handlLastName}/>
                    <InputMui text='Телефон номер' value={number} onChange={handlNumber}/>
                    <InputMui text='Email' value={email} onChange={handlEmail}/>
                    <InputMuiPassword text='Создайте пароль' value={password1} onChange={handlePasswordChange1}/>
                    <InputMuiPassword text='Напишите ещё раз' value={password2} onChange={handlePasswordChange2}/>
                </div>
                <div className="buttons-register">
                    <button onClick={() => {
                        console.log('Имя:', name, 'Фамилия: ', last_name, 'Номер', number, 'Email', email, "PAssword1: ", password1, 'PAssword2', password2)
                        navigate('/admin-otp')
                    }}>Регистрция</button>
                    <a href="/login">Войти</a>
                </div>
            </div>
        </div>
    );
};

export default AdminRegister;
