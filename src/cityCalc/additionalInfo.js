const additionalInfo = [
  {
    name: "gasbuddy_gas",
    lowerIsBetter: true,
    demographic: "all",
  },
  {
    name: "planhub_internet",
    lowerIsBetter: true,
    demographic: "all",
  },
  {
    name: "min_wage",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "planhub_phone_basic_plan",
    lowerIsBetter: true,
    demographic: "all",
  },
  {
    name: "planhub_phone_avg_plan",
    lowerIsBetter: true,
    demographic: "all",
  },
  {
    name: "statscan_tuition",
    lowerIsBetter: true,
    demographic: ["13-18", "19-35"],
  },
  {
    name: "rent_one_br",
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 1,
      maxNumberOfPeople: 2,
    },
  },
  {
    name: "rent_two_br",
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 3,
      maxNumberOfPeople: 4,
    },
  },
  {
    name: "rent_three_br",
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 5,
      maxNumberOfPeople: 5,
    },
  },
  {
    name: "rent_four_br",
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 6,
      maxNumberOfPeople: 100,
    },
  },
  {
    name: "rent_five_br",
    lowerIsBetter: true,
  },
];

export default additionalInfo;
