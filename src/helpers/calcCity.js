import _ from 'lodash';
import values from '../data/values.json';

const getTotalScores = (flattenedScores) => {
  // reduce the array to just one instance of each city with a total score
  const addedScores = flattenedScores.reduce((preValue, current, i) => {
    // if this is the first instance of this city in the array, then use it to create a total score
    if (
      i === flattenedScores.findIndex((score) => score.City === current.City)
    ) {
      // filter array to get only the current city with scores
      const currentCity = flattenedScores.filter(
        (measurement) => measurement.City === current.City
      );
      // add all scores of the current city
      const addedScore = currentCity.reduce(
        (prevScore, now) => _.add(prevScore, now.score),
        []
      );
      // add the current city with the total score to the array
      return [...preValue, { city: current.City, score: addedScore }];
    }
    return preValue;
  }, []);
  return addedScores;
};

// valuenew=maxnew−minnewmaxold−minold×(valueold−maxold)+maxnew

// If a higher Value is preferred, the formula (𝑥-𝑥_min)/(𝑥_max-𝑥_min) is applied
const getScore = (array, value, perCapita) => {
  // if it's a "number of" type score calculate per capita
  if (array[0].measureableValue === '# of') {
    const x = perCapita;

    if (x === 0 || x === null || x === undefined) {
      return 0;
    }
    // sort by smallest to largest
    const sortedArray = _.sortBy(array, ['perCapita']);
    // get first item in array
    const x_min = sortedArray[0].perCapita;
    // get last item in array
    const x_max = sortedArray[sortedArray.length - 1].perCapita;

    const result = (x - x_min) / (x_max - x_min);

    // if the number of resources does not equal zero, adjust the score range from 0 - 1 to 0.3 - 1 so that the city is awarded 0.3 points for having at least one resource
    const adjustedResult = !Number.isNaN(result)
      ? ((1 - 0.3) / (1 - 0)) * (result - 1) + 1
      : 0;

    return adjustedResult;
  }
  const x = value;
  const sortedArray = _.sortBy(array, ['Value']);
  const x_min = sortedArray[0].Value;
  const x_max = sortedArray[sortedArray.length - 1].Value;
  const result = (x - x_min) / (x_max - x_min);
  return !Number.isNaN(result) ? result : 0;
};

// If a lower Value is preferred, the formula 1-(𝑥-𝑥_min)/(𝑥_max-𝑥_min) is applied
const getInvertedScore = (array, value, perCapita) => {
  // if it's a "number of" type score calculate per capita
  if (array[0].measureableValue === '# of') {
    const x = perCapita;
    // sort by smallest to largest
    const sortedArray = _.sortBy(array, ['perCapita']);
    // get first item in array
    const x_min = sortedArray[0].perCapita;
    // get last item in array
    const x_max = sortedArray[sortedArray.length - 1].perCapita;
    const result = 1 - (x - x_min) / (x_max - x_min);
    return !Number.isNaN(result) ? result : 0;
  }
  const x = value;
  const sortedArray = _.sortBy(array, ['Value']);
  const x_min = sortedArray[0].Value;
  const x_max = sortedArray[sortedArray.length - 1].Value;
  const result = 1 - (x - x_min) / (x_max - x_min);
  return !Number.isNaN(result) ? result : 0;
};

const getCitiesWithScores = (measurements) => {
  // create array with all the applicable cities & scores
  const flattenedScores = measurements.flatMap((measurement) => {
    // filter out array to include only the current measurement
    const measurementsByCity = values.filter(
      (item) => item.JSONNames === measurement.name
    );

    // determine if current measurement is better if higher or lower
    if (measurement.lowerIsBetter) {
      // create array for measurements with cities & scores
      const arrayWithScores = measurementsByCity.reduce((preValue, city) => {
        // normalize values so we can get scores
        const score = getInvertedScore(
          measurementsByCity,
          city.Value,
          city.perCapita
        );

        // add City with normalized score to array
        return [...preValue, { ...city, score }];
      }, []);
      return arrayWithScores;
    }
    if (!measurement.lowerIsBetter) {
      const arrayWithScores = measurementsByCity.reduce((preValue, city) => {
        const score = getScore(measurementsByCity, city.Value, city.perCapita);
        return [...preValue, { ...city, score }];
      }, []);
      return arrayWithScores;
    }

    return null;
  });

  return flattenedScores;
};

const calcCity = (measurements) => {
  const flattenedScores = getCitiesWithScores(measurements);
  const addedScores = getTotalScores(flattenedScores);
  const sorted = _.orderBy(addedScores, 'score', 'desc');
  return sorted;
};

const topMeasurements = (measurements, cities, n) => {
  // get the flattened array with all measurement scores
  const allScores = getCitiesWithScores(measurements);

  // get an array of measurement arrays, one for each city we're interested in
  const selectScores = cities.map((city) => {
    // filter the array to include only the current city
    const filtered = allScores.filter((score) => score.City === city);
    // order measurements from highest to lowest
    const ordered = _.orderBy(filtered, 'score', 'desc');
    // only take the top highest measurements
    const truncated = ordered.slice(0, n);
    return truncated;
  });

  return selectScores;
};

export {
  calcCity,
  topMeasurements,
  getScore,
  getInvertedScore,
  getCitiesWithScores,
  getTotalScores,
};

