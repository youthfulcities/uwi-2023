const additionalInfo = [
  {
    name: "planhub_internet",
    measurement: "Cost of internet plan",
    category: "Cost of living",
    lowerIsBetter: true,
    demographic: "all",
  },
  {
    name: "min_wage",
    measurement: "Minimum wage",
    category: "Employment",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "planhub_phone_basic_plan",
    measurement: "Cost of basic phone plan",
    category: "Cost of living",
    lowerIsBetter: true,
    demographic: "all",
  },
  {
    name: "statscan_tuition",
    measurement: "Cost of tuition",
    category: "Education",
    lowerIsBetter: true,
    demographic: ["13-18", "19-35"],
  },
  {
    name: "rent_one_br",
    measurement: "Cost of 1 bedroom appartment",
    category: "Cost of living",
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 1,
      maxNumberOfPeople: 2,
    },
  },
  {
    name: "rent_two_br",
    measurement: "Cost of 2 bedroom appartment",
    category: "Cost of living",
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 3,
      maxNumberOfPeople: 4,
    },
  },
  {
    name: "rent_three_br",
    measurement: "Cost of 3 bedroom appartment",
    category: "Cost of living",
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 5,
      maxNumberOfPeople: 5,
    },
  },
  {
    name: "rent_four_br",
    measurement: "Cost of 4 bedroom appartment",
    category: "Cost of living",
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 6,
      maxNumberOfPeople: 100,
    },
  },
  {
    name: "",
    measurement: "Number of briding programs for professionals",
    category: "Education",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Number of paid employment training and placement programs",
    category: "Employment",
    lowerIsBetter: false,
    demographic: ["19-35"],
  },
  {
    name: "",
    measurement: "Number of post-secondary institutions",
    category: "Education",
    lowerIsBetter: false,
    demographic: ["19-35"],
  },
  {
    name: "",
    measurement: "Number of parenting and new mother programs",
    category: "Community support",
    lowerIsBetter: false,
    demographic: ["0-12"],
  },
  {
    name: "",
    measurement: "Number of recreation programs for seniors",
    category: "Community support",
    lowerIsBetter: false,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Number of recreation programs for kids and teenagers",
    category: "Community support",
    lowerIsBetter: false,
    demographic: ["0-12", "13-18"],
  },
  {
    name: "",
    measurement: "Number of recreation programs adults",
    category: "Community support",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Number of shelters",
    category: "Community support",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Number of food banks",
    category: "Community support",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Number of furniture banks",
    category: "Community support",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Number of free/subsidized clothing resources",
    category: "Community support",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Cost of public daycare",
    category: "Cost of living",
    lowerIsBetter: true,
    demographic: ["0-12"],
  },
  {
    name: "",
    measurement: "Number of employment services",
    category: "Employment",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Number of services to file taxes",
    category: "Community support",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Number of business startup supports",
    category: "Employment",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Number of snowy days",
    category: "Culture & environment",
    lowerIsBetter: true,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Number of youth employment centres",
    category: "Employment",
    lowerIsBetter: false,
    demographic: ["19-35"],
  },
  {
    name: "",
    measurement: "Number of libraries",
    category: "Community support",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Number of mosques/islamic centres",
    category: "Culture & environment",
    lowerIsBetter: false,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Number of Afghan communities",
    category: "Culture & environment",
    lowerIsBetter: false,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Number of stores that sell ethnic/cultural food",
    category: "Culture & environment",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Number of restaurants that offer Afgan cusines",
    category: "Culture & environment",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Cost of a senior's pass for public transport",
    category: "Cost of living",
    lowerIsBetter: false,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Cost of a adult pass for public transport",
    category: "Cost of living",
    lowerIsBetter: false,
    demographic: ["19-35, 36-65"],
  },
  {
    name: "",
    measurement: "Cost of a youth pass for public transport",
    category: "Cost of living",
    lowerIsBetter: false,
    demographic: ["0-12", "13-18"],
  },
];

export default additionalInfo;
