// import './VisitedCountry.scss';
// import { useState } from 'react';
// import AddressForm from '../AddressForm/AddressForm';

// function VisitedCountries() {
//   const [visitedCountries, setVisitedCountries] = useState([]);

//   const handleAddToVisited = (country) => {
//     setVisitedCountries([...visitedCountries, country]);
//   };

//   const handleRemoveCountry = (index) => {
//     const updatedCountries = [...visitedCountries];
//     updatedCountries.splice(index, 1);
//     setVisitedCountries(updatedCountries);
//   };

//   return (
//     <div className="visited-countries">
//       <h2>Visited Countries</h2>
//       <AddressForm handleAddToVisited={handleAddToVisited} />
//       <ul>
//         {visitedCountries.map((country, index) => (
//           <li key={index}>
//             {country}
//             <button onClick={() => handleRemoveCountry(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default VisitedCountries;

/////////////////////////////////////////////////////
// import './VisitedCountry.scss';
// import { useState, useContext } from 'react';
// // import { AppContext } from '../../context/AppContext';
// import AddressForm from '../AddressForm/AddressForm';

// function VisitedCountry() {
//   const [address] = useState({
//     country: '',
//     latitude: '',
//     longitude: '',
//   });
//   const { visitedCountryData } = useContext();

//   return (
//     <div>
//       {visitedCountryData.map((address) => (
//         <AddressForm key={address.country} />
//       ))}
//       <label htmlFor="country">Visited Country</label>
//       <h3>{address[0]}</h3>
//     </div>
//   );
// }

// export default VisitedCountry;
