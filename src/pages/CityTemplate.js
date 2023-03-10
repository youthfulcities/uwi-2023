// import {
//   Button,
//   Card,
//   CardMedia,
//   Container,
//   Grid,
//   Typography
// } from '@mui/material';
// import _ from 'lodash';
// import React, { useCallback, useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import Back from '../components/Back';
// import ChangeLang from '../components/ChangeLang';
// import CityInfo from '../components/CityTemplate/CityInfo';
// import FactsSection from '../components/CityTemplate/FactsSection';
// import Resources from '../components/CityTemplate/Resources';
// import Decoration from '../components/Decoration';
// import Socials from '../components/Socials';
// import cities from '../data/cities.json';
// import getData from '../helpers/odsClientV2';
// import Loading from './Loading';

// // returns an object where the each key is a category name and each value is an array of all the records that belong to that category
// const groupedArray = async (array) => {
//   const grouped = _.groupBy(
//     array,
//     (item) => item.record.fields.category_for_app
//   );
//   return grouped;
// };

// // returns an array of just the cateogry names
// const groupedArrayNames = async (array) => {
//   const names = Object.keys(
//     _.groupBy(array, (item) => item.record.fields.category_for_app)
//   );
//   return names;
// };

// const CityTemplate = ({
//   form,
//   setForm,
//   languages,
//   setCurrentLangCode,
//   currentLangCode,
//   textSize,
//   setTextSize,
// }) => {
//   const { cityname } = useParams();

//   // finds information in cities.json matching current city as per url params
//   const getCityData = () => cities.find((e) => e.city_name === cityname);

//   const [city] = useState(getCityData());

//   // search bar value formatted to work in ODS query (see Search.js)
//   const [searchStringQuery, setSearchStringQuery] = useState('');
//   const [offset, setOffset] = useState(0);

//   // raw response from API call
//   const [resources, setResources] = useState([]);

//   // an object where the each key is a category name and each value is an array of all the records that belong to that category
//   const [subResources, setSubResources] = useState([]);

//   // an array of all category names
//   const [categories, setCategories] = useState([]);

//   // an array of all category names selected, used to determined which fact cards are shown
//   const [filteredCategories, setFilteredCategories] = useState([]);

//   const colours = [
//     { background: '#1e316d', text: '#fff' },
//     { background: '#253D88', text: '#fff' },
//     { background: '#5164a0', text: '#fff' },
//     { background: '#cde4af', text: '#000' },
//     { background: '#B8D98D', text: '#000' },
//     { background: '#FBD166', text: '#000' },
//     { background: '#fcdf94', text: '#000' },
//     { background: '#F2695D', text: '#000' },
//     { background: '#f5877d', text: '#000' },
//     { background: '#F6D9D7', text: '#000' },
//     { background: '#fae8e7', text: '#000' },
//   ];

//   const getResources = useCallback(() => {
//     console.log('data api triggered');

//     // build the query
//     // specify all the columns we need
//     // get only current city
//     // add search query if applicable
//     // more information on the ODS query language can be found here:
//     // https://help.opendatasoft.com/apis/ods-search-v2/#search-api-v2
//     const query = `/records?select=city,category_for_app,edited_title,edited_title_fa,category_for_app_fa,topic_en,sheet_title,comment,value,measureable_value,url,measurement_en,noteen,indicator_en,suppname&refine=city:${cityname}&limit=100&offset=${offset}${
//       searchStringQuery.length > 0 ? `&where='${searchStringQuery}'` : ''
//     }`;

//     const retrievedInfo = getData('refugee-data', query).then(
//       (res) => res.records
//     );

//     const setRes = async () => {
//       const newResources = await retrievedInfo;
//       setResources((prev) => [...prev, ...newResources]);

//       // api only returns 100 records at a time, see if we need to use pagination and if so increase offset
//       if (newResources.length === 100) {
//         setOffset((prev) => prev + 100);
//       }
//     };
//     setRes();
//   }, [cityname, offset, searchStringQuery]);

//   useEffect(() => {
//     getResources();
//   }, [getResources]);

//   useEffect(() => {
//     console.log('values subcategory effect triggered');

//     const createSubCategories = () => {
//       // returns an object where the each key is a category name and each value is an array of all the records that belong to that category
//       groupedArray(resources).then((res) => setSubResources(res));

//       // returns an array of just the cateogry names
//       groupedArrayNames(resources).then((res) => {
//         setCategories(res);

//         // only filteredCategories are displayed; default to having only the 6th one selected, which is weather (deemed one of the most important things based on feedback)
//         res.length !== 0 && setFilteredCategories([res[6]]);
//       });
//     };

//     createSubCategories();
//   }, [resources]);

//   useEffect(() => {
//     // reset offset & resources when the searchStringQuery changes
//     setOffset(0);
//     setResources([]);
//   }, [searchStringQuery]);

//   return (
//     <>
//       {city !== undefined || resources.length === 0 ? (
//         <>
//           <Decoration />
//           <Container maxWidth="lg">
//             <Grid
//               sx={{ minHeight: '30vh', height: '100%' }}
//               container
//               direction="column"
//               justifyContent="center"
//               alignItems="center"
//               pt={0}
//               pb={10}
//               spacing={0}>
//               <Typography variant="h1" my={3}>
//                 {cityname}
//               </Typography>
//               <Grid container spacing={2} justifyContent="center">
//                 <Grid item>
//                   <Link to="/create-profile">
//                     <Button
//                       variant="contained"
//                       onClick={() => setForm({ ...form, step: 1 })}>
//                       Find the best city for me
//                     </Button>
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link to="/explore-all">
//                     <Button variant="contained">Explore All Cities</Button>
//                   </Link>
//                 </Grid>
//               </Grid>
//               <Grid
//                 container
//                 direction="row"
//                 spacing={2}
//                 justifyContent="space-between">
//                 <Grid item xs={12} md={6} lg={4}>
//                   <CityInfo
//                     description={
//                       city.description_fa !== undefined &&
//                       currentLangCode === 'fa'
//                         ? city.description_fa
//                         : city.description
//                     }
//                     src={city.main_img}
//                     alt={city.main_img_alt}
//                   />
//                 </Grid>
//                 <Grid
//                   item
//                   xs={12}
//                   md={6}
//                   lg={8}
//                   container
//                   direction="column"
//                   flexWrap="nowrap"
//                   alignItems="center"
//                   spacing={2}
//                   mt={1}>
//                   <Grid
//                     item
//                     sx={{ minHeight: '300px', height: '100%', width: '100%' }}
//                     xs={12}>
//                     <Card
//                       sx={{
//                         position: 'relative',
//                         width: '100%',
//                         height: '100%',
//                       }}>
//                       <CardMedia
//                         sx={{ zIndex: '1', position: 'absolute' }}
//                         component="img"
//                         height="100%"
//                         src={city.main_img}
//                         alt={city.main_img_alt}
//                       />
//                     </Card>
//                   </Grid>
//                 </Grid>
//               </Grid>
//               <Grid container direction="column">
//                 <Grid item mt={3} mb={1}>
//                   <FactsSection
//                     setSearchStringQuery={setSearchStringQuery}
//                     resources={resources}
//                     subResources={subResources}
//                     filteredCategories={filteredCategories}
//                     categories={categories}
//                     setFilteredCategories={setFilteredCategories}
//                     colours={colours}
//                     currentLangCode={currentLangCode}
//                     cityname={cityname}
//                   />
//                 </Grid>
//                 <Grid item mb={3}>
//                   <Resources
//                     cityname={cityname}
//                     currentLangCode={currentLangCode}
//                   />
//                 </Grid>
//               </Grid>
//             </Grid>
//             <Back />
//             <Grid item mb={2} sx={{ maxHeight: '10vh' }}>
//               <Socials />
//             </Grid>
//             <ChangeLang
//               languages={languages}
//               setCurrentLangCode={setCurrentLangCode}
//               currentLangCode={currentLangCode}
//               textSize={textSize}
//               setTextSize={setTextSize}
//             />
//           </Container>
//         </>
//       ) : (
//         <Loading />
//       )}
//     </>
//   );
// };

// export default CityTemplate;
