import './AutoCompleteInput.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import getPlaces from '../../API/getPlaces';

AutoCompleteInput.propTypes = {
  handleManualInputChange: PropTypes.func.isRequired,
  setAddress: PropTypes.func, //deleted .isRequired
  //   streetAndNumber: PropTypes.string.isRequired,
};

export default function AutoCompleteInput({
  handleManualInputChange,
  setAddress,
  //   streetAndNumber,
}) {
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    handleManualInputChange(event, 'streetAndNumber');
    handleInputChange(event.target.value);
  };

  const handleInputChange = async (query) => {
    const suggesions = await getPlaces(query);
    setSuggestions(suggesions);
    console.log('Paziuret ka man grazina suggesion', suggesions);
  };

  const handleSuggestionClick = (suggestion) => {
    // const streetAndNumber = suggestion.place_name.split(',')[0];
    const latitude = suggestion.center[1];
    const longitude = suggestion.center[0];

    const address = {
      place: '',
      region: '',
      postcode: '',
      country: '',
      latitude,
      longitude,
    };

    suggestion.context.forEach((element) => {
      const identifier = element.id.split('.')[0];

      address[identifier] = element.text;
    });

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
          value={''}
          //   value={streetAndNumber}
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
