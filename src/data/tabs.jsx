const tabs = [
  {
    title: "General",
    fieldsets: [
      {
        legend: "Personal",
        fields: [
          { id: "first_name", label: "First Name", type: "text" },
          { id: "last_name", label: "Last Name", type: "text" },
          { id: "summary", label: "Summary", type: "textarea" },
        ],
      },
      {
        legend: "Contact Media",
        fields: [
          { id: "email", label: "Email", type: "email" },
          { id: "phone", label: "Phone", type: "phone" },
          { id: "address", label: "Address", type: "address" },
        ],
      },
      {
        legend: "Social Media",
        fields: [
          { id: "website", label: "Website", type: "text" },
          { id: "github", label: "Github", type: "github" },
        ],
      },
    ],
  },
  {
    title: "Academic",
    fieldsets: [
      {
        legend: "Education",
        fields: [],
      },
      {
        legend: "Professional",
        fields: [],
      },
    ],
  },
  {
    title: "Experience",
    fieldsets: [
      {
        legend: "Education",
        fields: [],
      },
      {
        legend: "Professional",
        fields: [],
      },
    ],
  },
];

export default tabs;
