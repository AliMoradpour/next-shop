const TextField = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-4">
        {label}
      </label>
      <input
        type="text"
        autoComplete="off"
        className="textField__input"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
