import costs from "./costs.json";
import _ from "lodash";

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

const calcCity = (measurements) => {
  //specify which measurement we're comparing
  // let measurements = ["gasbuddy_gas", "planhub_phone_avg_plan"];

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
