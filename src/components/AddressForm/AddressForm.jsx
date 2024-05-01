import './addressForm.scss';
import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

AddressForm.propTypes = {
  address: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setAddress: PropTypes.func.isRequired,
  data: PropTypes.func.isRequired,
};

export default function AddressForm({ address, onSubmit, setAddress, data }) {
  const [items, setItems] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
    console.log('items', items);
  }, [items]);

  useEffect(() => {
    const uniqueCountries = [...new Set(items)];
    setShowMessage(uniqueCountries.length !== items.length);
  }, [items]);

  const handleAddCountry = (newItem) => {
    if (!items.includes(newItem)) {
      setItems([...items, newItem]);
    } else {
      setShowMessage(true);
    }
  };
  const handleRemoveCountry = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <form onSubmit={onSubmit}>
      {showMessage && (
        <p className="error-message">Selected Country is already in the list</p>
      )}
      <label className="form" htmlFor="map-country">
        Map Country
      </label>
      <AutoCompleteInput setAddress={setAddress} />
      <div className="buttons">
        <button
          className="button"
          onClick={() => handleAddCountry(address.country)}
        >
          Add Country
        </button>
        <button
          type="reset"
          className="button"
          onClick={() =>
            setAddress({
              country: '',
              latitude: '',
              longitude: '',
            })
          }
        >
          Reset
        </button>
      </div>
      {data.length > 0 && (
        <div className="wrapper-countries">
          {data.map((country, index) => (
            <div key={index} className="country-item">
              <h2>{country.country}</h2>
              <button
                className="country-item .delete-button "
                onClick={() => handleRemoveCountry(index)}
              >
                x
              </button>
            </div>
          ))}
        </div>
      )}
    </form>
  );
}
