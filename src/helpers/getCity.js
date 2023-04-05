import _ from 'lodash';
import scores from '../data/scores.json';

const getSubsetOfValues = (chosenValues) =>
  scores.filter((item) => chosenValues.includes(item.topic_key));

const getChildren = (chosenValues) => {
  const subset = getSubsetOfValues(chosenValues);
  return subset.flatMap((topic) => topic.children);
};

const getCitiesObject = (chosenValues) => {
  const all = getChildren(chosenValues);
  const grouped = _.groupBy(all, 'city');
  // returns an object with each city as a key
  return grouped;
};

const objectToArrary = (array) => {
  const groupedArrary = Object.entries(array);
  const simpleArray = groupedArrary.map((item) => item[1]);
  return simpleArray;
};

const getTotalScores = (chosenValues) => {
  const cityGroups = objectToArrary(getCitiesObject(chosenValues));
  const reducedScores = cityGroups.map((cityArray) =>
    cityArray.reduce(
      (prev, current) => ({
        city: current.city,
        score: prev.score + current.score,
        region: current.region,
      }),
      { city: '', score: 0, region: '' }
    )
  );
  const sortedScores = _.sortBy(reducedScores, ['score']);
  const highestToLowest = _.reverse(sortedScores);
  return highestToLowest;
};

export { getTotalScores, getCitiesObject };
