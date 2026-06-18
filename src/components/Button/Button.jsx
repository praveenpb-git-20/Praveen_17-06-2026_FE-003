import "./Button.css";

function Button({ label, variant = "primary", onClick }) {
  return (
    <button
      className={`btn ${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;