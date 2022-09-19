function InputItem({ lable, text, handle }) {
  return (
    <div className="form_profile_item_input">
      <label htmlFor={lable}>{lable}</label>
      <input
        type="text"
        value={text}
        placeholder="Enter text..."
        id={lable}
        onChange={(e) => {
          handle(e.target.value);
        }}
      />
    </div>
  );
}

function SelectItem({ lable, text, handle }) {
  return (
    <div className="form_profile_item_input">
      <label htmlFor={`${lable}`}>{lable}</label>
      <select
        name=""
        id={`${lable}`}
        onChange={(e) => {
          const value = e.target.value;
          handle(value);
        }}
      >
        <option value="">-----Select category-----</option>
        <option value="bale111">bale</option>
        <option value="bale1">bale1</option>
      </select>
    </div>
  );
}

function AreaItem({ lable, text, handle }) {
  return (
    <div className="form_profile_item_input">
      <label htmlFor={lable}>{lable}</label>
      <textarea
        name=""
        id={lable}
        value={text}
        placeholder="Enter text..."
        onChange={(e) => {
          handle(e.target.value);
        }}
      ></textarea>
    </div>
  );
}

export { InputItem, AreaItem, SelectItem };
