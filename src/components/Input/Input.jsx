import './style.css'; 
function Input({ value, onChange }) {
  return (
    <div className='inputContainer'>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
