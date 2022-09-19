import { useState } from "react";

function Input({ type, label, value, onChange }) {
  const [error, setError] = useState(Boolean(value));
  return (
    <div className="form_input--item">
      <label htmlFor={label}>
        <input
          type={type}
          id={label}
          value={value}
          onChange={(e) => {
            if (value === "") {
              setError(true);
            } else {
              setError(false);
            }
            onChange(e.target.value);
          }}
          onBlur={() => {
            if (value === "") {
              setError(true);
            } else {
              setError(false);
            }
          }}
        />
        <span className={`${value && "forcus"}  ${error && "error"}`}>
          {label}
        </span>
      </label>
    </div>
  );
}

function Button({ text, handle }) {
  return (
    <div className="form_submit">
      <button onClick={handle}>{text}</button>
    </div>
  );
}

export { Input, Button };
