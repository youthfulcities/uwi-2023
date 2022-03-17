import values from "./values.json";
import _ from "lodash";

const calcCity = (measurements) => {
  //specify which measurement we're comparing

  //create array with all the applicable cities & scores
  let flattenedScores = measurements.flatMap((measurement) => {
    //filter out array to include only the current measurement
    const measurementsByCity = values.filter(
      (item) => item.JSONNames === measurement.name
    );

    //determine if current measurement is better if higher or lower
    if (measurement.lowerIsBetter) {
      //create array for measurements with cities & scores
      let arrayWithScores = measurementsByCity.reduce((preValue, city) => {
        //normalize values so we can get scores
        let score = getInvertedScore(measurementsByCity, city.Value);

        //add City with normalized score to array
        return [...preValue, { ...city, score: score }];
      }, []);
      return arrayWithScores;
    } else if (!measurement.lowerIsBetter) {
      let arrayWithScores = measurementsByCity.reduce((preValue, city) => {
        let score = getScore(measurementsByCity, city.Value);
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
      i === flattenedScores.findIndex((score) => score.City === current.City)
    ) {
      //filter array to get only the current city with scores
      let currentCity = flattenedScores.filter(
        (measurement) => measurement.City === current.City
      );
      //add all scores of the current city
      let addedScore = currentCity.reduce(
        (prevScore, current) => _.add(prevScore, current.score),
        []
      );
      //add the current city with the total score to the array
      return [...preValue, { city: current.City, score: addedScore }];
    } else {
      return preValue;
    }
  }, []);

  let sorted = _.orderBy(addedScores, "score", "desc");
  return sorted;
};

//If a higher Value is preferred, the formula (𝑥-𝑥_min)/(𝑥_max-𝑥_min) is applied
const getScore = (array, x) => {
  //sort by smallest to largest
  let sortedArray = _.sortBy(array, ["Value"]);
  //get first item in array
  let x_min = sortedArray[0].Value;
  //get last item in array
  let x_max = sortedArray[sortedArray.length - 1].Value;
  let result = (x - x_min) / (x_max - x_min);
  return !isNaN(result) ? result : 0;
};

//If a lower Value is preferred, the formula 1-(𝑥-𝑥_min)/(𝑥_max-𝑥_min) is applied
const getInvertedScore = (array, x) => {
  //sort by smallest to largest
  let sortedArray = _.sortBy(array, ["Value"]);
  //get first item in array
  let x_min = sortedArray[0].Value;
  //get last item in array
  let x_max = sortedArray[sortedArray.length - 1].Value;
  let result = 1 - (x - x_min) / (x_max - x_min);
  return !isNaN(result) ? result : 0;
};

export default calcCity;
