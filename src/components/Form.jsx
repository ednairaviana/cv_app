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
    <div className="field-wrapper">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} />
    </div>
  );
}

function Form() {
  return (
    <div className="main-form_wrapper">
      <form>
        <div className="main-form__tab">
          <fieldset>
            <legend>General</legend>
            <div className="main-form__fieldset-items">
              <FieldWrapper
                id={"first_name"}
                type={"text"}
                label={"First Name"}
              />
              <FieldWrapper
                id={"last_name"}
                type={"text"}
                label={"Last Name"}
              />
              <FieldWrapper
                id={"summary"}
                type={"textarea"}
                label={"Summary"}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Contact Information</legend>
            <div className="main-form__fieldset-items">
              <FieldWrapper id={"email"} type={"email"} label={"Email"} />
              <FieldWrapper id={"phone"} type={"text"} label={"Phone"} />
            </div>
          </fieldset>
          <fieldset>
            <legend>Social Media</legend>
            <div className="main-form__fieldset-items">
              <FieldWrapper id={"linkedin"} type={"link"} label={"Linkedin"} />
              <FieldWrapper id={"github"} type={"link"} label={"GitHub"} />
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  );
}

export default Form;
