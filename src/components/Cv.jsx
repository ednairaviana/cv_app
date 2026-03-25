function Cv({ cvData }) {
  const personal = cvData.general.personal;
  const contact = cvData.general.contact;
  const social_media = cvData.general.social_media;
  const experience_tabs = cvData.career.professional_experience;
  const education_tabs = cvData.career.education;

  return (
    <div className="cv-model--1">
      <div className="header">
        <h1 className="title">
          {personal.first_name} {personal.last_name}
        </h1>
        <p className="subtitle">{personal.position}</p>
        <div className="summary">
          <p>{personal.summary}</p>
        </div>
      </div>

      <ul className="info-list">
        <li className="icon--before" dataIcon="email">
          <span>{contact.email}</span>
        </li>
        <li className="icon--before">
          <span>{contact.phone}</span>
        </li>
        <li className="icon--before">
          <span>{contact.address}</span>
        </li>
        <li className="icon--before">
          <span>{social_media.website}</span>
        </li>
      </ul>

      <div className="cv-body">
        <div className="cv-section">
          <h2 className="cv-section__title">Experience</h2>
          <Dividers all_tabs={experience_tabs}></Dividers>
        </div>
        <div className="cv-section">
          <h2 className="cv-section__title">Education</h2>
          <Dividers all_tabs={education_tabs}></Dividers>
        </div>
      </div>
    </div>
  );
}

function Dividers({ all_tabs }) {
  return all_tabs.map((tab) => {
    return (
      <div className="cv-divider" key={tab.id}>
        <div className="cv-divider__header">
          <h3 className="cv-divider__title">{tab.title}</h3>
          <h4 className="cv-divider__sub-title">{tab.institution}</h4>
        </div>
        <p className="cv-divider__tag">
          <span>
            {parseDate(tab.start_date)} - {parseDate(tab.end_date)}
          </span>
          <span>{tab.location}</span>
        </p>
        <p className="cv-divider__description">{tab.description}</p>
      </div>
    );
  });
}

function parseDate(input) {
  if (input) {
    const [year, month] = input.split("-");
    const date = new Date(year, month - 1);

    return date.toLocaleString("en-US", { month: "long", year: "numeric" });
  }
}

export default Cv;
