import { useCallback } from "react";

type RangeProps = {
    /**
     * The HTML id for the element.
     */
    id: string,
    /**
     * The minimum value of the range.
     */
    min?: number,
    /**
     * The maximum value of the range.
     */
    max?: number,
    /**
     * The range steps.
     */
    step?: number,
    /**
     * The current value of the range.
     */
    value?: number,
    /**
     * Called when the range's value is changed, with the new value passed as the first parameter.
     */
    onChange?: (value: number) => void,
    /**
     * Any children to display as the range's label.
     */
    children?: React.ReactNode
};

/**
 * A range (slider) input element.
 * @param param0 The range's props.
 */
export default function Range({children, id, min, max, step, value, onChange}: RangeProps) {
    const onChangeCallback = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange !== undefined) onChange(Number.parseFloat(event.target.value));
    }, [onChange]);

    return (<>
        {children !== undefined && <label className="form-label" htmlFor={id}>{children}</label>}
        <input type="range" className="form-range" value={value} min={min} max={max} step={step} id={id} onChange={onChange && onChangeCallback} />
    </>);
}