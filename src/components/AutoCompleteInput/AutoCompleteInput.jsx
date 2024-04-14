import './AutoCompleteInput.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import getCountries from '../../API/getCountries';

AutoCompleteInput.propTypes = {
  setAddress: PropTypes.func.isRequired,
};

export default function AutoCompleteInput({ setAddress }) {
  const [suggestions, setSuggestions] = useState([]);

  //   const handleChange = (event) => {
  //     handleManualInputChange(event, 'streetAndNumber');
  //     handleInputChange(event.target.value);
  //   };

  const handleChange = async (event) => {
    const query = event.target.value;
    const countrySuggesions = await getCountries(query);
    setSuggestions(countrySuggesions);
  };

  const handleSuggestionClick = (country) => {
    setAddress({ country });
    setSuggestions([]);
  };
  //   const handleSuggestionClick = (suggestion) => {
  //     const streetAndNumber = suggestion.place_name.split(',')[0];
  //     const latitude = suggestion.center[1];
  //     const longitude = suggestion.center[0];

  // const address = {
  //   streetAndNumber,
  //   place: '',
  //   region: '',
  //   postcode: '',
  //   country: '',
  //   latitude,
  //   longitude,
  // };

  //     suggestion.context.forEach((element) => {
  //       const identifier = element.id.split('.')[0];

  //       address[identifier] = element.text;
  //     });

  //     console.log(address.longitude, address.latitude);

  //     setAddress(address);
  //     setSuggestions([]);
  //   };

  return (
    <div>
      <div className="autoCompleteInputContainer">
        <input
          id="country"
          type="text"
          placeholder="Country"
          onChange={handleChange}
        />
        <ul className="addressSuggestions">
          {suggestions?.map((country, index) => (
            <li key={index} onClick={() => handleSuggestionClick(country)}>
              {country.place_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
