const Checkbox = (props) => {
    const { label, name } = props;
  
    return (
      <div className="mb-6">
        <input
          type="checkbox"
          className="text-sm py-2 text-slate-700 accent-primary"
          name={name}
          id={name}
        />
        <label htmlFor={name} className="ps-3 text-sm text-slate-700">
          {label}
        </label>
      </div>
    );
  };
  
  export default Checkbox;