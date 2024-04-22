// import './VisitedCountry.scss';
// import { useState } from 'react';
// import AddressForm from '../AddressForm/AddressForm';

// function VisitedCountry() {
//   const [visitedCountryData, setVisitedCountryData] = useState([]);

//   const handleAddToVisitedCountry = (item) => {
//     setVisitedCountryData([...visitedCountryData, item]);
//   };
//   const handleRemoveFromVisitedCountry = (item) => {
//     const filterVisitedCountryData = visitedCountryData.filter(
//       (dataItem) => dataItem.sug.place_type[0] !== item.sug.place_type[0]
//     );
//     console.log(
//       'ka grazina filterVisitedCountryData',
//       filterVisitedCountryData
//     );
//     setVisitedCountryData(filterVisitedCountryData);
//   };

//   return (
//     <div>
//       <AddressForm
//         handleAddToVisitedCountry={handleAddToVisitedCountry}
//         handleRemoveFromVisitedCountry={handleRemoveFromVisitedCountry}
//         visitedCountryData={visitedCountryData}
//       />
//     </div>
//   );
// }

// export default VisitedCountry;
