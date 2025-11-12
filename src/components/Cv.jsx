function Cv({ cvData }) {
  const personal = cvData.general.personal;
  const contact = cvData.general.contact;

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
          <span>{contact.location}</span>
        </li>
        <li className="icon--before">
          <span>website.com</span>
        </li>
      </ul>

      <div className="cv-body">
        <div className="cv-section">
          <h2 className="cv-section__title">Experience</h2>
          <div className="cv-divider">
            <div className="cv-divider__header">
              <h3 className="cv-divider__title">Art Director Senior</h3>
              <h4 className="cv-divider__sub-title">Jelly Art</h4>
            </div>
            <p className="cv-divider__tag">
              <span>Aug 18 - Present</span>
              <span> 1 year, Santa Monica</span>
            </p>
            <p className="cv-divider__description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              incidunt modi nisi, hic minima expedita, odio corporis esse
              provident quos repellat possimus deleniti consequatur est amet,
              error cumque itaque officiis!
            </p>
          </div>
          <div className="cv-divider">
            <div className="cv-divider__header">
              <h3 className="cv-divider__title">Art Director Senior</h3>
              <h4 className="cv-divider__sub-title">Jelly Art</h4>
            </div>
            <p className="cv-divider__tag">
              <span>Aug 18 - Present</span>
              <span> 1 year, Santa Monica</span>
            </p>
            <p className="cv-divider__description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              incidunt modi nisi, hic minima expedita, odio corporis esse
              provident quos repellat possimus deleniti consequatur est amet,
              error cumque itaque officiis!
            </p>
          </div>
        </div>
        <div className="cv-section">
          <h2 className="cv-section__title">Experience</h2>
          <div className="cv-divider">
            <div className="cv-divider__header">
              <h3 className="cv-divider__title">Art Director Senior</h3>
              <h4 className="cv-divider__sub-title">Jelly Art</h4>
            </div>
            <p className="cv-divider__tag">
              <span>Aug 18 - Present</span>
              <span> 1 year, Santa Monica</span>
            </p>
            <p className="cv-divider__description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              incidunt modi nisi, hic minima expedita, odio corporis esse
              provident quos repellat possimus deleniti consequatur est amet,
              error cumque itaque officiis!
            </p>
          </div>
          <div className="cv-divider">
            <div className="cv-divider__header">
              <h3 className="cv-divider__title">Art Director Senior</h3>
              <h4 className="cv-divider__sub-title">Jelly Art</h4>
            </div>
            <p className="cv-divider__tag">
              <span>Aug 18 - Present</span>
              <span> 1 year, Santa Monica</span>
            </p>
            <p className="cv-divider__description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              incidunt modi nisi, hic minima expedita, odio corporis esse
              provident quos repellat possimus deleniti consequatur est amet,
              error cumque itaque officiis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;
