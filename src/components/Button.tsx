
type ButtonProps = {
    disabled?: boolean,
    onClick?: () => void,
    children?: React.ReactNode
}

export default function Button({ children, disabled, onClick }: ButtonProps) {
    return <button className="btn btn-primary" style={{ width: '100%' }} onClick={onClick} disabled={disabled}>{children}</button>
}