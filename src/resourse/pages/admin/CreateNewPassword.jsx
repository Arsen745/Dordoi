import { bg } from '../../../styles/admin/bd-forms/BgAdmin.jsx';
import '../../../styles/admin/CreateNewPassword.css';
import InputMuiPassword from "../../../mui-components/InputPassword.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateNewPassword = () => {
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const navigate = useNavigate();
    const handlePasswordChange1 = (newPassword) => {
        setPassword1(newPassword);
    };
    const handlePasswordChange2 = (newPassword) => {
        setPassword2(newPassword);
    };
    const handleSubmit = () => {
        console.log('Пароль 1:', password1);
        console.log('Пароль 2:', password2);
        navigate('/login');
    };
    return (
        <div style={bg} className='create-newpass'>
            <div className="content">
                <div className="title">
                    <h1>Создайте новый пароль</h1>
                </div>
                <div className="forms">
                    <InputMuiPassword text='Новый пароль' value={password1} onChange={handlePasswordChange1} />
                    <InputMuiPassword text='Подтвердите новый пароль' value={password2} onChange={handlePasswordChange2} />
                </div>
                <div className="button">
                    <button onClick={handleSubmit}>Далее</button>
                </div>
            </div>
        </div>
    );
};

export default CreateNewPassword;
