import './style.css'

function Button({onClick}) {
  return (
    <div className='buttonContainer'>
    <button onClick={onClick}>
       Buscar
    </button>
    </div>
  )
}

export default Button
