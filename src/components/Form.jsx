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

function Form({ tabs, useActiveTab, handleChangeFunction }) {
  const activeTab = useActiveTab.activeTab;

  return (
    <div className="main-form_wrapper">
      <form>
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          handleChangeFunction={handleChangeFunction}
        ></Tabs>
      </form>
    </div>
  );
}

function Tabs({ tabs, activeTab, handleChangeFunction }) {
  return tabs.map((tab, index) => {
    return (
      <div
        key={tab.id}
        className={`main-form__tab ${activeTab === index ? "active" : ""}`}
      >
        <Fieldsets
          fieldsets={tab.fieldsets}
          tabId={tab.id}
          handleChangeFunction={handleChangeFunction}
        ></Fieldsets>
      </div>
    );
  });
}

function Fieldsets({ fieldsets, tabId, handleChangeFunction }) {
  return fieldsets.map((fieldset) => {
    return (
      <fieldset key={fieldset.id}>
        <legend>{fieldset.legend}</legend>
        <div className="main-form__fieldset-items">
          {fieldset.fields.map((field) => (
            <FieldWrapper
              key={`${tabId}-${fieldset.id}-${field.id}`}
              id={field.id}
              type={field.type}
              label={field.label}
              cvPath={[tabId, fieldset.id, field.id]}
              onCvChange={handleChangeFunction}
            />
          ))}
        </div>
      </fieldset>
    );
  });
}

function FieldWrapper(props) {
  const [isFilled, setIsFilled] = useState(false);

  function handleInputChange(e) {
    setIsFilled(Boolean(e.target.value));
    props.onCvChange(props.cvPath, e.target.value);
  }

  return (
    <div className={`field-wrapper ${isFilled ? "input-filled" : ""}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        name={props.id}
        type={props.type}
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
    </div>
  );
}

export default Form;
