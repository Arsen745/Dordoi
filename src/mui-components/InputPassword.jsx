import React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './InputPassword.css';

const InputMuiPassword = ({ text, value, onChange }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();
    const handleMouseUpPassword = (event) => event.preventDefault();
    const handleChange = (event) => {
        const newPassword = event.target.value;
        onChange(newPassword);
    };
    return (
        <Input
            id="standard-adornment-password"
            placeholder={text}
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={handleChange}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label={showPassword ? 'hide the password' : 'display the password'}
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            }
        />
    );
};

export default InputMuiPassword;
