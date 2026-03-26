const tabs = [
  {
    title: "General",
    id: "general",
    fieldsets: [
      {
        legend: "Personal",
        id: "personal",
        fields: [
          {
            id: "first_name",
            label: "First Name",
            type: "text",
            default_value: "Fulano",
          },
          {
            id: "last_name",
            label: "Last Name",
            type: "text",
            default_value: "Da Silva",
          },
          {
            id: "position",
            label: "Position",
            type: "text",
            default_value: "Frontend Developer",
          },
          {
            id: "summary",
            label: "Summary",
            type: "textarea",
            default_value:
              "Passionate developer with experience in building modern web applications.",
          },
        ],
      },
      {
        legend: "Contact",
        id: "contact",
        fields: [
          {
            id: "email",
            label: "Email",
            type: "email",
            default_value: "fulano@email.com",
          },
          {
            id: "phone",
            label: "Phone",
            type: "phone",
            default_value: "+55 11 99999-9999",
          },
          {
            id: "address",
            label: "Address",
            type: "address",
            default_value: "São Paulo, Brazil",
          },
        ],
      },
      {
        legend: "Social Media",
        id: "social_media",
        fields: [
          {
            id: "website",
            label: "Website",
            type: "text",
            default_value: "https://johndoe.dev",
          },
          {
            id: "github",
            label: "Github",
            type: "github",
            default_value: "github.com/ednairaviana",
          },
        ],
      },
    ],
  },
  {
    title: "Career",
    id: "career",
    fieldsets: [
      {
        legend: "Professional Experience",
        id: "professional_experience",
        fields: [
          {
            id: "title",
            label: "Job Title",
            type: "text",
            default_value: "Frontend Developer",
          },
          {
            id: "institution",
            label: "Company",
            type: "text",
            default_value: "Tech Company Inc.",
          },
          {
            id: "start_date",
            label: "Start Date",
            type: "month",
            default_value: "2022-01",
          },
          {
            id: "end_date",
            label: "End Date",
            type: "month",
            default_value: "2024-01",
          },
          {
            id: "location",
            label: "Location",
            type: "text",
            default_value: "Remote",
          },
          {
            id: "description",
            label: "Description",
            type: "textarea",
            default_value:
              "Developed and maintained scalable web applications using React and modern tools.",
          },
        ],
        cloneable: true,
      },
      {
        legend: "Education",
        id: "education",
        fields: [
          {
            id: "title",
            label: "Degree / Course",
            type: "text",
            default_value: "Bachelor in Computer Science",
          },
          {
            id: "institution",
            label: "School / University",
            type: "text",
            default_value: "University of São Paulo",
          },
          {
            id: "start_date",
            label: "Start Date",
            type: "month",
            default_value: "2018-01",
          },
          {
            id: "end_date",
            label: "End Date",
            type: "month",
            default_value: "2021-12",
          },
          {
            id: "location",
            label: "Location",
            type: "text",
            default_value: "São Paulo, Brazil",
          },
          {
            id: "description",
            label: "Description",
            type: "textarea",
            default_value:
              "Focused on software engineering, data structures, and web development.",
          },
        ],
        cloneable: true,
      },
    ],
  },
  {
    title: "Advanced",
    id: "advanced",
    fieldsets: [
      {
        legend: "Too lazy to do something else",
        fields: [],
      },
    ],
  },
];

export default tabs;
