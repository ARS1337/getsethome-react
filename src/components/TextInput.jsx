import "../styles/inputs.css"

export default function TextInput({id,label,value}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className="text-input-container">
        <input className="w-full" type="text" id={id} defaultValue={value} name={id} />
      </div>
    </div>
  );
}
