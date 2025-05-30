import "../styles/inputs.css"

export default function DateInput({id,label}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className="text-input-container">
        <input className="w-full" type="date" id={id} name={id} />
      </div>
    </div>
  );
}
