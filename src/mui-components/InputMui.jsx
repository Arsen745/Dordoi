import TextField from '@mui/material/TextField';
import './InputMui.css'

const InputMui = (props) => {
    let text, onChange, value;
    ({text, onChange, value} = props);
    const handleChange = (event) => {
        const newEmail = event.target.value;
        onChange(newEmail);
    };
    return (
        <TextField
            id="standard-multiline-flexible"
            multiline
            value={value}
            maxRows={0}
            variant="standard"
            placeholder={text}
            onChange={handleChange}
        />
    );
};


export default InputMui;
