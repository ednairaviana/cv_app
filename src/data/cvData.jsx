import tabs from "./tabs";

const cvData = buildCvStructure(tabs);

function buildCvStructure(tabs) {
  function buildFields(fields) {
    return fields.reduce((acc, field) => {
      acc[field.id] = field.default_value;
      return acc;
    }, {});
  }

  return tabs.reduce((cvStructure, tab) => {
    cvStructure[tab.id] = tab.fieldsets.reduce((tabStructure, fieldset) => {
      const fields = buildFields(fieldset.fields);

      tabStructure[fieldset.id] = fieldset.cloneable ? [fields] : fields;

      return tabStructure;
    }, {});

    return cvStructure;
  }, {});
}

export default cvData;
