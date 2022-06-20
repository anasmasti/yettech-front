export default function Input({ type, name, placeholder, handleInputChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="form-control"
      onChange={(event) => handleInputChange(event.target)}
    />
  );
}
