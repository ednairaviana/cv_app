import { useState } from "react";

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
      return (
        <FieldsetCloneable
          fieldset={fieldset}
          tabId={tabId}
          cvState={cvState}
        />
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
              value={cvState.currentCvData[tabId][fieldset.id][field.id]}
            />
          ))}
        </div>
      </fieldset>
    );
  });
}

function FieldsetCloneable({ fieldset, tabId, cvState }) {
  const cvDataClones = cvState.currentCvData[tabId][fieldset.id];
  const [activeClone, setActiveClone] = useState(
    cvDataClones[0] ? cvDataClones[0].id : "",
  );

  function handleSetActiveClone(cloneId) {
    setActiveClone(activeClone === cloneId ? null : cloneId);
  }

  return (
    <fieldset key={`${tabId}-${fieldset.id}`}>
      <legend>{fieldset.legend}</legend>
      <div className="main-form__clone-div">
        {cvDataClones.map((clone) => {
          return (
            <div
              key={clone.id}
              className={`main-form__fieldset cloneable ${activeClone === clone.id ? "open" : ""}`}
            >
              <div className="main-form__tggl-wrapper">
                <span>{clone.title}</span>
                <button
                  dataIcon="toggle"
                  className="toggle-button icon--before"
                  style={{ "--icon-var": "var(--arrow-down__dark)" }}
                  type="button"
                  onClick={() => {
                    handleSetActiveClone(clone.id);
                  }}
                ></button>
              </div>
              <div className="main-form__fieldset-items">
                {fieldset.fields.map((field) => (
                  <FieldWrapper
                    key={`${clone.id}-${field.id}`}
                    id={field.id}
                    type={field.type}
                    label={field.label}
                    cvPath={[tabId, fieldset.id]}
                    cvState={cvState}
                    isClone={true}
                    fieldId={field.id}
                    cloneId={clone.id}
                    value={clone[field.id]}
                  />
                ))}
                <button
                  type="button"
                  className="btn-remove"
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
            </div>
          );
        })}
      </div>
      <button
        type="button"
        className="btn-add"
        onClick={() => {
          const newCloneId = cvState.handleAddFieldsetClone([
            tabId,
            fieldset.id,
          ]);
          handleSetActiveClone(newCloneId);
        }}
      >
        Add {fieldset.legend}
      </button>
    </fieldset>
  );
}

function FieldWrapper(props) {
  const [isFilled, setIsFilled] = useState(Boolean(props.value));
  const [value, setValue] = useState(props.value);

  function handleInputChange(e) {
    setIsFilled(Boolean(e.target.value));
    setValue(e.target.value);

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
      {props.type === "textarea" ? (
        <textarea
          id={props.id}
          name={props.id}
          type={props.type}
          onChange={(e) => {
            handleInputChange(e);
          }}
          value={value}
        />
      ) : (
        <input
          id={props.id}
          name={props.id}
          type={props.type}
          onChange={(e) => {
            handleInputChange(e);
          }}
          value={value}
        />
      )}
    </div>
  );
}

export default Form;
