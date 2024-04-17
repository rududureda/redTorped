import './AutoCompleteInput.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import getPlaces from '../../API/getPlaces';

AutoCompleteInput.propTypes = {
  handleManualInputChange: PropTypes.func.isRequired,
  setAddress: PropTypes.func, //deleted .isRequired
  //   streetAndNumber: PropTypes.string.isRequired,
};

export default function AutoCompleteInput({ setAddress }) {
  const [inputValue, setInputValue] = useState(''); //add
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value); //add
    handleInputChange(event.target.value);
  };

  const handleInputChange = async (query) => {
    const suggesions = await getPlaces(query);
    setSuggestions(suggesions.filter((sug) => sug.place_type[0] === 'country'));
    console.log('Paziuret ka man grazina suggesion', suggesions);
  };

  const handleSuggestionClick = (suggestion) => {
    const latitude = suggestion.center[1];
    const longitude = suggestion.center[0];

    const address = {
      country: suggestion.place_name,
      latitude,
      longitude,
    };

    console.log(address.longitude, address.latitude);

    setAddress(address);
    setSuggestions([]);
  };

  return (
    <div>
      <div className="autoCompleteInputContainer">
        <input
          id="address"
          type="text"
          placeholder="Address"
          value={inputValue}
          onChange={handleChange}
        />
        <ul className="addressSuggestions">
          {suggestions?.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion.place_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
///////////////////////////////////////////////////

// import './AutoCompleteInput.scss';
// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import getPlaces from '../../API/getPlaces';

// AutoCompleteInput.propTypes = {
//   setAddress: PropTypes.func.isRequired,
// };

// export default function AutoCompleteInput({ setAddress }) {
//   const [suggestions, setSuggestions] = useState([]);

//   const handleChange = async (event) => {
//     const query = event.target.value;
//     const countrySuggesions = await getPlaces(query);
//     setSuggestions(countrySuggesions);
//   };

//   const handleSuggestionClick = (country) => {
//     setAddress({ country });
//     setSuggestions([]);
//   };

//   return (
//     <div>
//       <div className="autoCompleteInputContainer">
//         <input
//           id="country"
//           type="text"
//           placeholder="Country"
//           onChange={handleChange}
//         />
//         <ul className="addressSuggestions">
//           {suggestions?.map((country, index) => (
//             <li key={index} onClick={() => handleSuggestionClick(country)}>
//               {country.place_name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
