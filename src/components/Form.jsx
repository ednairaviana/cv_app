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

function Form({ tabs, useActiveTab, cvState }) {
  const activeTab = useActiveTab.activeTab;

  return (
    <div className="main-form_wrapper">
      <form>
        <Tabs tabs={tabs} activeTab={activeTab} cvState={cvState}></Tabs>
      </form>
    </div>
  );
}

function Tabs({ tabs, activeTab, cvState }) {
  return tabs.map((tab, index) => {
    return (
      <div
        key={tab.id}
        className={`main-form__tab ${activeTab === index ? "active" : ""}`}
      >
        <Fieldsets
          fieldsets={tab.fieldsets}
          tabId={tab.id}
          cvState={cvState}
        ></Fieldsets>
      </div>
    );
  });
}

function Fieldsets({ fieldsets, tabId, cvState }) {
  return fieldsets.map((fieldset) => {
    if (fieldset.cloneable) {
      const cvDataClones = cvState.currentCvData[tabId][fieldset.id];
      return (
        <fieldset key={`${tabId}-${fieldset.id}`}>
          <legend>{fieldset.legend}</legend>
          <div className="">
            {cvDataClones.map((clone) => {
              return (
                <div
                  key={clone.id}
                  className="main-form__fieldset-items cloneable"
                >
                  {fieldset.fields.map((field) => (
                    <FieldWrapper
                      id={field.id}
                      type={field.type}
                      label={field.label}
                      cvPath={[tabId, fieldset.id]}
                      cvState={cvState}
                      isClone={true}
                      fieldId={field.id}
                      cloneId={clone.id}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      cvState.handleRemoveFieldsetClone(
                        [tabId, fieldset.id],
                        clone.id,
                      );
                    }}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => {
              cvState.handleAddFieldsetClone([tabId, fieldset.id]);
            }}
          >
            Add
          </button>
        </fieldset>
      );
    }

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
              cvState={cvState}
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

    if (props.isClone) {
      props.cvState.handleCloneDataChange(
        props.cvPath,
        props.cloneId,
        props.fieldId,
        e.target.value,
      );
    } else {
      props.cvState.handleCvDataChange(props.cvPath, e.target.value);
    }
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
