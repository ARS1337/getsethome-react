import "../styles/inputs.css"

export default function RadioInputGroup({children,label}) {
  return (
    <div>
      <div className="radio-label-group">{label}</div>
      <div className="radio-group d-flex">
        {children}
      </div>
    </div>
  );
}
