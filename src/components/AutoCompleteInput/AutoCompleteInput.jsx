import './AutoCompleteInput.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import getPlaces from '../../API/getPlaces';

AutoCompleteInput.propTypes = {
  setAddress: PropTypes.func, //deleted .isRequired
};

export default function AutoCompleteInput({ setAddress }) {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
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
      // _id: suggestion.id,
    };

    setAddress(address);
    setInputValue(''); //add
    setSuggestions([]);
  };

  return (
    <div>
      <div className="autoCompleteInputContainer">
        <input
          id="address"
          type="text"
          placeholder="Country"
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
