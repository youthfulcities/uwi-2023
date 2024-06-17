Reference variable names in the file [UWI 2023 Codebook](https://docs.google.com/spreadsheets/d/1F1vu3m7yUF4wge0M2x9X3t8zFeIeHKkgvrTMmERtxKo/edit?usp=sharing).

How to update the data:

- Create a spreadsheet with the same format as the file [App data](https://docs.google.com/spreadsheets/d/1Upm-uEkrDNNfQFy6AQWZL8T_2LvNU7EfNoiryTeznvU/edit?usp=sharing)
- Go to https://jsonifyit.com/
- Copy data or upload a csv

Set the following in "Set Output Options"
- Base Structure: Records
- Index: None

**Nesting Options**
- Name Key: topic_key
- Add level: topic_key
- Children key: None
- Column to sum: None
- Field Name: None
- Average Field: score
- Field Name: None

**Wrapper Options:**
- Include wrapper? No
- Name value: None


### Helpful references:
[How to change bar chart cursor on hover](https://www.youtube.com/watch?v=Uj_I2_7o0No)


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

A few tests are currenlty set up for the scoring calculations in `calcCity.js`

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
