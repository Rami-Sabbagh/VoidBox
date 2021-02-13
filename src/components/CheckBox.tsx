type CheckBoxProps = {
    /**
     * The HTML id for the checkbox.
     */
    id: string,

    /**
     * A method to call when the checkbox is toggled.
     */
    onToggle?: () => void,

    /**
     * Anything to display as the checkbox's label.
     */
    children?: React.ReactNode
}

export default function CheckBox({ children, id, onToggle }: CheckBoxProps) {
    return (<div className="form-check">
        <input className="form-check-input" type="checkbox" id={id} onChange={onToggle} />
        {children !== undefined && <label className="form-check-label" htmlFor={id}>
            {children}
        </label>}
    </div>);
}