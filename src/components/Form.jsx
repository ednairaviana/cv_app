import { useState } from "react";

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

function FieldWrapper(props) {
  const [isFilled, setIsFilled] = useState(false);

  function handleInputChange(e) {
    setIsFilled(Boolean(e.target.value));
  }

  return (
    <div className={`field-wrapper ${isFilled ? "input-filled" : ""}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        name={props.id}
        type={props.type}
        onChange={handleInputChange}
      />
    </div>
  );
}

function MainTab() {
  return (
    <div className="main-form__tab">
      <fieldset></fieldset>
    </div>
  );
}

function Form({ tabs, useActiveTab }) {
  const activeTab = useActiveTab.activeTab;

  return (
    <div className="main-form_wrapper">
      <form>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`main-form__tab ${activeTab === index ? "active" : ""}`}
          >
            {tab.fieldsets.map((fieldset) => (
              <fieldset>
                <legend>{fieldset.legend}</legend>
                <div className="main-form__fieldset-items">
                  {fieldset.fields.map((field) => (
                    <FieldWrapper
                      id={field.id}
                      type={field.type}
                      label={field.label}
                    />
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
        ))}
      </form>
    </div>
  );
}

export default Form;
