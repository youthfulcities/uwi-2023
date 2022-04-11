import {
  calcCity,
  getCitiesWithScores,
  getInvertedScore,
  getScore,
  getTotalScores,
  topMeasurements,
} from "./calcCity";

const testValues = [
  {
    City: "Lethbridge",
    JSONNames: "Libraries",
    Value: 1.0,
    measureableValue: "# of",
    perCapita: 3,
  },
  {
    City: "Calgary",
    JSONNames: "Libraries",
    Value: 2.0,
    measureableValue: "# of",
    perCapita: 2,
  },
  {
    City: "Saskatoon",
    JSONNames: "Libraries",
    Value: 3.0,
    measureableValue: "# of",
    perCapita: 1,
  },
];

it("calculates low '# of' scores correctly", () => {
  const lowestScore = getScore(
    testValues,
    testValues[2].Value,
    testValues[2].perCapita
  );
  expect(lowestScore).toBeCloseTo(0.3);
});

it("calculates high '# of' scores correctly", () => {
  const highestScore = getScore(
    testValues,
    testValues[0].Value,
    testValues[0].perCapita
  );
  expect(highestScore).toEqual(1);
});

it("calculates inverted '# of' scores correctly", () => {
  const lowestScore = getInvertedScore(
    testValues,
    testValues[2].Value,
    testValues[2].perCapita
  );
  expect(lowestScore).toEqual(1);
});

it("getScore handles undefined values", () => {
  const score = getScore(testValues);
  expect(score).toEqual(0);
});

it("getInvertedScore handles undefined values", () => {
  const score = getInvertedScore(testValues);
  expect(score).toEqual(0);
});

const testValuesNumerical = [
  {
    City: "Lethbridge",
    JSONNames: "Libraries",
    Value: 1.0,
    measureableValue: "numerical",
    perCapita: 3,
  },
  {
    City: "Calgary",
    JSONNames: "Libraries",
    Value: 2.0,
    measureableValue: "numerical",
    perCapita: 2,
  },
  {
    City: "Saskatoon",
    JSONNames: "Libraries",
    Value: 3.0,
    measureableValue: "numerical",
    perCapita: 1,
  },
];

it("calculates low 'numerical' scores correctly", () => {
  const lowestScore = getScore(
    testValuesNumerical,
    testValuesNumerical[0].Value,
    testValuesNumerical[0].perCapita
  );
  expect(lowestScore).toEqual(0);
});

it("calculates high 'numerical' scores correctly", () => {
  const highestScore = getScore(
    testValuesNumerical,
    testValuesNumerical[2].Value,
    testValuesNumerical[2].perCapita
  );
  expect(highestScore).toEqual(1);
});

it("calculates inverted 'numerical' scores correctly", () => {
  const lowestScore = getInvertedScore(
    testValuesNumerical,
    testValuesNumerical[0].Value,
    testValuesNumerical[0].perCapita
  );
  expect(lowestScore).toEqual(1);
});

it("getCitiesWithScores returns array with scores", () => {
  const result = getCitiesWithScores([
    { name: "Libraries", lowerIsBetter: false },
  ]);
  expect(result[0]).toHaveProperty("score");
});

it("getTotalScores reduces scores to 1 per city", () => {
  const scoreArray = getCitiesWithScores([
    { name: "Libraries", lowerIsBetter: false },
    { name: "PlanhubInternet", lowerIsBetter: true },
  ]);
  const result = getTotalScores(scoreArray);
  expect(result).toHaveLength(10);
});

it("calcCity sorts cities from highest to lowest score", () => {
  const result = calcCity([{ name: "Libraries", lowerIsBetter: false }]);
  expect(result[0].score).toEqual(1);
});

it("topMeasurements sorts measurements from highest to lowest score", () => {
  const measurement = [{ name: "Libraries", lowerIsBetter: false }];
  const topCities = calcCity(measurement).slice(0, 3);
  const names = topCities.map((e) => e.city);
  const result = topMeasurements(measurement, names);
  expect(result[0][0].score).toEqual(1);
});
