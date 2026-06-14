function Bottone(props) {
    return (
        <button onClick={props.onClick}>
            {props.testo}
        </button>
    );
}

export default Bottone;