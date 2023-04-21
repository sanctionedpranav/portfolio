import "./Button.css"

const Button = ({ className, name, btnType, icon }) => {
    
    return (
        <div type={btnType} className={`btn btn-flex ${className}`}>{name}<i className={`bx bx-${icon}`}></i></div>
    )
}

export default Button;
