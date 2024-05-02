import './addressForm.scss';
import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';
import PropTypes from 'prop-types';
import { useState, useEffect} from 'react';

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
  //ToDO
  // useEffect(() => {
  //   const uniqueCountries = [...new Set(items)];
  //   setShowMessage(uniqueCountries.length !== items.length);
  // }, [items]);
  console.log('Item', items);
  const handleAddCountry = (newCountry) => {
    if (!items.some((item) => item.country === newCountry.country)) {
      setItems([...items, newCountry]);
    } else {
      setShowMessage(true);
    }
  };
  //TODO
  const handleRemoveCountry = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
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
////////original before 04-22

// import './addressForm.scss';
// import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';
// import PropTypes from 'prop-types';
// import { useState } from 'react';

// AddressForm.propTypes = {
//   address: PropTypes.object.isRequired,
//   onSubmit: PropTypes.func.isRequired,
//   setAddress: PropTypes.func.isRequired,
// };

// export default function AddressForm({ address, onSubmit, setAddress }) {

//   return (
//     <form className="form" onSubmit={onSubmit}>
//       <label htmlFor="address">Address</label>
//       <AutoCompleteInput setAddress={setAddress} />
//       <div className="visitedCountry">
//         <div>
//             <h2>{address.country}</h2>
//           ))}
//         </div>
//       </div>
//       <div className="buttons">
//         <button type="submit" className="confirm-button">
//           Confirm
//         </button>
//         <button
//           type="reset"
//           className="reset-button"
//           onClick={() =>
//             setAddress({
//               country: '',
//               latitude: '',
//               longitude: '',
//             })
//           }
//         >
//           Reset
//         </button>
//       </div>
//     </form>
//   );
// }
