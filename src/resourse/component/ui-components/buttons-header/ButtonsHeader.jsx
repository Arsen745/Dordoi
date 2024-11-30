import '../../../../styles/client/ui-components/ButtonsHeader.css'

const ButtonHeader = (props) => {
    let text;
    ({text} = props);
    return (
        <button id='button-header'>{text}</button>
    );
};

export default ButtonHeader;
