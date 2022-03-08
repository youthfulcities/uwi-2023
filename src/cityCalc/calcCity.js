import costs from "./costs.json";
import _ from "lodash";

const additionalInfo = [
  {
    name: "gasbuddy_gas",
    lowerIsBetter: true,
  },
  {
    name: "planhub_internet",
    lowerIsBetter: true,
  },
  {
    name: "min_wage",
    lowerIsBetter: false,
  },
  {
    name: "planhub_phone_basic_plan",
    lowerIsBetter: true,
  },
  {
    name: "planhub_phone_avg_plan",
    lowerIsBetter: true,
  },
  {
    name: "statscan_tuition",
    lowerIsBetter: true,
  },
  {
    name: "rent_one_br",
    lowerIsBetter: true,
  },
  {
    name: "rent_two_br",
    lowerIsBetter: true,
  },
  {
    name: "rent_three_br",
    lowerIsBetter: true,
  },
  {
    name: "rent_four_br",
    lowerIsBetter: true,
  },
  {
    name: "rent_five_br",
    lowerIsBetter: true,
  },
];

const calcCity = () => {
  //specify which measurement we're comparing
  let measurement = "gasbuddy_gas";

  //filter out array to include only the current measurement
  const measurementsByCity = costs.filter(
    (item) => item.SuppName === measurement
  );

  //determine if current measurement is better if higher or lower by comparing to additional info array
  const lowerIsBetter = additionalInfo.find(
    (item) => (item.name = measurement)
  ).lowerIsBetter;

  if (lowerIsBetter) {
    let arrayWithScores = measurementsByCity.reduce((preValue, city) => {
      let score = getInvertedScore(measurementsByCity, city.value).toFixed(2);
      return [...preValue, { ...city, score: score }];
    }, []);
    console.log(arrayWithScores);
  }
};

//If a higher value is preferred, the formula (𝑥-𝑥_min)/(𝑥_max-𝑥_min) is applied
const getScore = (array, x) => {
  //sort by smallest to largest
  let sortedArray = _.sortBy(array, ["value"]);
  //get first item in array
  let x_min = sortedArray[0];
  //get last item in array
  let x_max = sortedArray[sortedArray.length - 1];
  return (x - x_min) / (x_max - x_min);
};

//If a lower value is preferred, the formula 1-(𝑥-𝑥_min)/(𝑥_max-𝑥_min) is applied
const getInvertedScore = (array, x) => {
  //sort by smallest to largest
  let sortedArray = _.sortBy(array, ["value"]);
  //get first item in array
  let x_min = sortedArray[0].value;
  //get last item in array
  let x_max = sortedArray[sortedArray.length - 1].value;
  return 1 - (x - x_min) / (x_max - x_min);
};

// function cityCalc() {
//   citiesWithScores.forEach((city) => {
//     // for each city
//     city.score = 0; // set score to 0
//     city.children.forEach((topicWithinCity) => {
//       // for each topic (within each city)
//       let input = document
//         .getElementById(topicWithinCity.name)
//         .querySelector("input"); // identify relevant slider
//       let topicWeightPerUser = input.value * 0.1; // set user's assigned weight for topic per that slider
//       // let topicWeightPerUser =  .86// set user's assigned weight for topic per that slider
//       topicWithinCity.calcval = topicWeightPerUser * topicWithinCity.value; // weight multiplied by the value (datum) for the topic for the city
//       city.score += topicWithinCity.calcval; // for each topic for each city sum calcval
//     });
//     // city.score = parseFloat(city.score.toFixed(1))
//   });
//   let sortedCities = citiesWithScores.slice().sort((a, b) => b.score - a.score);
//   console.log(
//     "%cSorted Results",
//     "color:pink;font-weight:bold; font-size: 20px",
//     sortedCities
//   );
//   sortedCities.forEach((city) => {
//     console.log(city.name, parseFloat(city.score.toFixed(1)));
//   });
//   return sortedCities[0].name;
// }

export default calcCity;
