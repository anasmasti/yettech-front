
export default function Textarea({name, placeholder, handleInputChange}) {
  return (
    <textarea
    name={name}
    placeholder={placeholder}
    cols="30"
    rows="10"
    className="form-control"
    onChange={(event) => handleInputChange(event.target)}
  ></textarea>
  )
}
