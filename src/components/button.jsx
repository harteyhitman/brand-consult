const Button = ({label, onClick, className}) => {
  return (
    <div className="btn-cont-app">
        <button className={className} onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button