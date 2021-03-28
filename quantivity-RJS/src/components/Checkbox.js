const Checkbox = (props) => {
    return (
        <label className="container" id={props.row + '-' + props.col}>
            <input type="checkbox" />
            <span className="checkmark"></span>
        </label>
    );
}

export default Checkbox;