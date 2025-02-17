const TextField = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="block">{label}</label>
      <input type="text" className="bg-gray-50 p-2 rounded-sm" name={name} id={name} value={value} onChange={onChange} />
    </div>
  );
};

export default TextField;
