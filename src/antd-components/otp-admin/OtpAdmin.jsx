import { Input } from 'antd';
import './OtpAdmin.css'

const OtpAdmin = () => {
    const onChange = (text) => {
        console.log('onChange:', text);
    };
    const onInput = (value) => {
        console.log('onInput:', value);
    };
    const sharedProps = {
        onChange,
        onInput,
    };
    return (
        <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
    );
};

export default OtpAdmin;
