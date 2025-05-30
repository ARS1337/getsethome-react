import "../styles/inputs.css";

export default function RadioInput({ id, value, label }) {
  return (
    <div className="d-flex align-center">
      <input type="radio" id={id} name="gender" value={value} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
