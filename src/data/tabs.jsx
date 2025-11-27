const tabs = [
  {
    title: "General",
    id: "general",
    fieldsets: [
      {
        legend: "Personal",
        id: "personal",
        fields: [
          { id: "first_name", label: "First Name", type: "text" },
          { id: "last_name", label: "Last Name", type: "text" },
          { id: "position", label: "Position", type: "text" },
          { id: "summary", label: "Summary", type: "textarea" },
        ],
      },
      {
        legend: "Contact",
        id: "contact",
        fields: [
          { id: "email", label: "Email", type: "email" },
          { id: "phone", label: "Phone", type: "phone" },
          { id: "address", label: "Address", type: "address" },
        ],
      },
      {
        legend: "Social Media",
        id: "social_media",
        fields: [
          { id: "website", label: "Website", type: "text" },
          { id: "github", label: "Github", type: "github" },
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
          { id: "job_title", label: "Job Title", type: "text" },
          { id: "company", label: "Company", type: "text" },
          { id: "start_date", label: "Start Date", type: "month" },
          { id: "end_date", label: "End Date", type: "month" },
          { id: "duration", label: "Duration", type: "text" },
          { id: "location", label: "Location", type: "text" },
          { id: "description", label: "Description", type: "textarea" },
        ],
        cloneable: true,
      },
      {
        legend: "Education",
        id: "education",
        fields: [
          { id: "school", label: "School / University", type: "text" },
          { id: "degree", label: "Degree / Course", type: "text" },
          { id: "start_date", label: "Start Date", type: "month" },
          { id: "end_date", label: "End Date", type: "month" },
          { id: "location", label: "Location", type: "text" },
          { id: "description", label: "Description", type: "textarea" },
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
        legend: "Export",
        fields: [],
      },
      {
        legend: "Styling",
        fields: [],
      },
    ],
  },
];

export default tabs;
