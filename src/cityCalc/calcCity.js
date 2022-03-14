import costs from "./costs.json";
import _ from "lodash";

const additionalInfo = [
  {
    name: "gasbuddy_gas",
    measurement: "Cost of gas",
    lowerIsBetter: true,
    demographic: "all",
  },
  {
    name: "planhub_internet",
    measurement: "Cost of internet plan",
    lowerIsBetter: true,
    demographic: "all",
  },
  {
    name: "min_wage",
    measurement: "Minimum wage",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "planhub_phone_basic_plan",
    measurement: "Cost of basic phone plan",
    lowerIsBetter: true,
    demographic: "all",
  },
  {
    name: "planhub_phone_avg_plan",
    measurement: "Cost of premium phone plan",
    lowerIsBetter: true,
    demographic: "all",
  },
  {
    name: "statscan_tuition",
    measurement: "Cost of tuition",
    lowerIsBetter: true,
    demographic: ["13-18", "19-35"],
  },
  {
    name: "rent_one_br",
    measurement: "Cost of 1 bedroom appartment",
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 1,
      maxNumberOfPeople: 2,
    },
  },
  {
    name: "rent_two_br",
    measurement: "Cost of 2 bedroom appartment",
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 3,
      maxNumberOfPeople: 4,
    },
  },
  {
    name: "rent_three_br",
    measurement: "Cost of 3 bedroom appartment",
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 5,
      maxNumberOfPeople: 5,
    },
  },
  {
    name: "rent_four_br",
    measurement: "Cost of 4 bedroom appartment",
    lowerIsBetter: true,
    demographic: {
      minNumberOfPeople: 6,
      maxNumberOfPeople: 100,
    },
  },
  {
    name: "",
    measurement: "Number of computer classes for basic skills",
    lowerIsBetter: false,
    demographic: ["36-65"],
  },
  {
    name: "",
    measurement: "Number of briding programs for professionals",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Number of paid employment training and placement programs",
    lowerIsBetter: false,
    demographic: ["19-35"],
  },
  {
    name: "",
    measurement: "Number of public colleges",
    lowerIsBetter: false,
    demographic: ["19-35"],
  },
  {
    name: "",
    measurement: "Number of public universities",
    lowerIsBetter: false,
    demographic: ["19-35"],
  },
  {
    name: "",
    measurement: "Number of public schools",
    lowerIsBetter: false,
    demographic: ["0-12", "13-18"],
  },
  {
    name: "",
    measurement: "Number of Caltholic schools",
    lowerIsBetter: false,
    demographic: ["0-12", "13-18"],
  },
  {
    name: "",
    measurement: "Number of religious/ethnic schools",
    lowerIsBetter: false,
    demographic: ["0-12", "13-18"],
  },
  {
    name: "",
    measurement: "Number of parenting and new mother programs",
    lowerIsBetter: false,
    demographic: ["0-12"],
  },
  {
    name: "",
    measurement: "Number of recreation programs for seniors",
    lowerIsBetter: false,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Number of recreation programs for kids and teenagers",
    lowerIsBetter: false,
    demographic: ["0-12", "13-18"],
  },
  {
    name: "",
    measurement: "Number of community organizations offering English courses",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Number of literacy programs for seniors",
    lowerIsBetter: false,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Number of family shelters",
    lowerIsBetter: false,
    demographic: {
      minNumberOfPeople: 3,
      maxNumberOfPeople: 100,
    },
  },
  {
    name: "",
    measurement: "Number of youth shelters",
    lowerIsBetter: false,
    demographic: ["13-18"],
  },
  {
    name: "",
    measurement: "Number of food banks and Islamic foodbanks",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Number of furniture banks",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Number of free/subsidized clothing resources",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Cost of public daycare",
    lowerIsBetter: true,
    demographic: ["0-12"],
  },
  {
    name: "",
    measurement: "Cost of private daycare",
    lowerIsBetter: true,
    demographic: ["0-12"],
  },
  {
    name: "",
    measurement: "Number of parent relief programs",
    lowerIsBetter: false,
    demographic: ["0-12"],
  },
  {
    name: "",
    measurement: "Number of organizations offering financial resources",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Minimum deposit required to apply for secure credit card",
    lowerIsBetter: true,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Number of banks that provide unsecure credit cards",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Number of employment services",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Number of services to file taxes",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Average temperature in winter",
    lowerIsBetter: false,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Number of sunny days",
    lowerIsBetter: false,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Number of snowy days",
    lowerIsBetter: true,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Number of rainy days",
    lowerIsBetter: true,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Cost of a business liscence",
    lowerIsBetter: true,
    demographic: ["19-35", "36-65"],
  },
  {
    name: "",
    measurement: "Cost of municipal property tax",
    lowerIsBetter: true,
    demographic: ["36-65"],
  },
  {
    name: "",
    measurement: "Number of legal aid services for newcomers",
    lowerIsBetter: false,
    demographic: ["19-35", "36-65", "65+"],
  },
  {
    name: "",
    measurement: "Number of youth employment centres",
    lowerIsBetter: false,
    demographic: ["19-35"],
  },
  {
    name: "",
    measurement:
      "Number of doctors taking new patients who speak, Pashto, Dari, Urdu, or Arabic",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Number of libraries",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement:
      "Number of community recreation centres providing sports programs/facilities",
    lowerIsBetter: false,
    demographic: ["13-18", "19-35"],
  },
  {
    name: "",
    measurement: "Number of mosques/islamic centres",
    lowerIsBetter: false,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Number of Afghan community",
    lowerIsBetter: false,
    demographic: ["65+"],
  },
  {
    name: "",
    measurement: "Number of stores that sell ethnic/cultural food",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Number of restaurants that offer Afgan cusines",
    lowerIsBetter: false,
    demographic: "all",
  },
  {
    name: "",
    measurement: "Cost of a senior's pass",
    lowerIsBetter: false,
    demographic: ["65+"],
  },
];

const calcCity = (measurements) => {
  //specify which measurement we're comparing

  //create array with all the applicable cities & scores
  let flattenedScores = measurements.flatMap((measurement) => {
    //filter out array to include only the current measurement
    const measurementsByCity = costs.filter(
      (item) => item.SuppName === measurement
    );

    //determine if current measurement is better if higher or lower by comparing to additional info array
    const lowerIsBetter = additionalInfo.find(
      (item) => (item.name = measurement)
    ).lowerIsBetter;

    //check if measurement is better if values are high or low
    if (lowerIsBetter) {
      //create array for measurements with cities & scores
      let arrayWithScores = measurementsByCity.reduce((preValue, city) => {
        //normalize values so we can get scores
        let score = getInvertedScore(measurementsByCity, city.value);
        //add city with normalized score to array
        return [...preValue, { ...city, score: score }];
      }, []);
      return arrayWithScores;
    } else if (!lowerIsBetter) {
      let arrayWithScores = measurementsByCity.reduce((preValue, city) => {
        let score = getScore(measurementsByCity, city.value);
        return [...preValue, { ...city, score: score }];
      }, []);
      return arrayWithScores;
    }

    return null;
  });

  //reduce the array to just one instance of each city with a total score
  let addedScores = flattenedScores.reduce((preValue, current, i) => {
    //if this is the first instance of this city in the array, then use it to create a total score
    if (
      i === flattenedScores.findIndex((score) => score.city === current.city)
    ) {
      //filter array to get only the current city with scores
      let currentCity = flattenedScores.filter(
        (measurement) => measurement.city === current.city
      );
      //add all scores of the current city
      let addedScore = currentCity.reduce(
        (prevScore, current) => _.add(prevScore, current.score),
        []
      );
      //add the current city with the total score to the array
      return [...preValue, { city: current.city, score: addedScore }];
    } else {
      return preValue;
    }
  }, []);

  let sorted = _.orderBy(addedScores, "score", "desc");
  return sorted;
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

//from My City widget
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
