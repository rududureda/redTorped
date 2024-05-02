import './addressForm.scss';
import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

AddressForm.propTypes = {
  address: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setAddress: PropTypes.func.isRequired,
};

export default function AddressForm({ address, onSubmit, setAddress }) {
  const [items, setItems] = useState([]); //[{country:string,longitude:number,latitude:number,_id:string}]
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/country');
        console.log('response', response);

        const countries = await response.json();
        console.log('countries', countries);

        setItems(countries);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const handleAddCountry = async (newCountry) => {
    try {
      if (!items.some((item) => item.country === newCountry.country)) {
        const response = await fetch('http://localhost:3000/country', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCountry),
        });
        const data = await response.json();
        if (response.ok) {
          setItems([...items, data]);
        } else {
          throw new Error(data.error);
        }
      } else {
        setShowMessage(true);
      }
    } catch (error) {
      console.error('Error adding country:', error.message);
    }
  };

  // const handleAddCountry = (newCountry) => {
  //   if (!items.some((item) => item.country === newCountry.country)) {
  //     setItems([...items, newCountry]);
  //   } else {
  //     setShowMessage(true);
  //   }
  // };
  //TODO
  // const handleRemoveCountry = (indexToRemove) => {
  //   setItems(items.filter((_, index) => index !== indexToRemove));
  // };
  const handleRemoveCountry = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:3000/country/id`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setItems(items.filter((item) => item._id !== itemId));
      } else {
        throw new Error('Failed to delete country');
      }
    } catch (error) {
      console.error('Error deleting country:', error.message);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      {showMessage && (
        <p className="error-message">
          Selected Country is already in the list !
        </p>
      )}
      <label className="form" htmlFor="map-country">
        Map visited country
      </label>
      <AutoCompleteInput setAddress={setAddress} />
      <div className="buttons">
        <button className="button" onClick={() => handleAddCountry(address)}>
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
      {items.length > 0 && (
        <div className="wrapper-countries">
          {items.map((item, index) => {
            console.log('map', item);
            return (
              <div key={item._id} className="country-item">
                <h2>{item.country}</h2>
                <button
                  className="delete-button "
                  onClick={() => handleRemoveCountry(index)}
                >
                  x
                </button>
              </div>
            );
          })}
        </div>
      )}
    </form>
  );
}
