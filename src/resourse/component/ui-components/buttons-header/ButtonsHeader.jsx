import '../../../../styles/client/ui-components/ButtonsHeader.css'
import {useNavigate} from "react-router-dom";

const ButtonHeader = (props) => {
    let text, to;
    ({text, to} = props);
    const navigate = useNavigate()
    return (
        <button onClick={() => {
            navigate(to)
        }} id='button-header'>{text}</button>
    );
};

export default ButtonHeader;
