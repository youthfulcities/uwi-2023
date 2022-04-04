## Adding new cities

There is an option to pull all city data from Opendatasoft; however, to reduce the number of API calls made per day (limit of 10,000) right now this data is being stored locally in `cities.json`. To initiate adding a new city simply add a new entry to this array and add the applicable key/value pairs.

To do this, suggest updating the [cities spreadsheet](https://docs.google.com/spreadsheets/d/1-mPapTDizDicf4FPlKVQuDeujC6zYCxJa7yAZ5Gfh40/edit#gid=0) and then converting from csv to json.

Pages affected:
`CityTemplate.js`
`ExploreAll.js`
`SuggestedCities.js`

Data for fact cards is pulled in via the Opendatasoft API. The dataset is on [The Grid](https://pivothub.youthfulcities.com/explore/dataset/refugee-data/table/) and has to be updated with values for each measurement for each new city.

The csv is used to populate `values.json`. Per capita calcuation for each city is added.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
