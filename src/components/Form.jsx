function Radio({ radioInfo }) {
  return (
    <div>
      <p>{radioInfo.label}</p>
      {radioInfo.options.map((radio) => (
        <div key={radio.id}>
          <input
            id={radio.id}
            name={radioInfo.name}
            value={radio.value}
            type="radio"
          />
          <label htmlFor={radio.id}>{radio.label}</label>
        </div>
      ))}
    </div>
  );
}

function FieldWrapper({ id, type, label }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} />
    </div>
  );
}

function Form() {
  return (
    <form>
      <div>
        <fieldset>
          <legend>General</legend>
          <FieldWrapper id={"first_name"} type={"text"} label={"First Name"} />
          <FieldWrapper id={"last_name"} type={"text"} label={"Last Name"} />
          <FieldWrapper id={"summary"} type={"textarea"} label={"Summary"} />
        </fieldset>
        <fieldset>
          <legend>Contact Information</legend>
          <FieldWrapper id={"email"} type={"email"} label={"Email"} />
          <FieldWrapper id={"phone"} type={"text"} label={"Phone"} />
        </fieldset>
        <fieldset>
          <legend>Social Media</legend>
          <FieldWrapper id={"linkedin"} type={"link"} label={"Linkedin"} />
          <FieldWrapper id={"github"} type={"link"} label={"GitHub"} />
        </fieldset>
      </div>
    </form>
  );
}

export default Form;
