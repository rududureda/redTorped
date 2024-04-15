// import './addressForm.scss';
// import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';
// import PropTypes from 'prop-types';

// AddressForm.propTypes = {
//   country: PropTypes.object.isRequired,
//   onSubmit: PropTypes.func.isRequired,
//   setCountry: PropTypes.func.isRequired,
// };

// export default function AddressForm({ country, onSubmit, setCountry }) {
//   const handleManualInputChange = (event, stateProperty) => {
//     const newCountry = { ...country };
//     newCountry[stateProperty] = event.target.value;

//     setCountry(newCountry);
//   };

//   return (
//     <form className="form" onSubmit={onSubmit}>

//       <label htmlFor="country">Country</label>
//       <input
//         type="text"
//         id="country"
//         placeholder="Country"
//         value={country.country}
//         onChange={(event) => handleManualInputChange(event, 'country')}
//       />

//       <div className="buttons">
//         <button type="submit" className="confirm-button">
//           Confirm
//         </button>
//         <button
//           type="reset"
//           className="reset-button"
//           onClick={() =>
//             setCountry({
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

import './addressForm.scss';
import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';
import PropTypes from 'prop-types';

AddressForm.propTypes = {
  address: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setAddress: PropTypes.func.isRequired,
};

export default function AddressForm({ address, onSubmit, setAddress }) {
  const handleManualInputChange = (event, stateProperty) => {
    const newAddress = { ...address };
    newAddress[stateProperty] = event.target.value;

    setAddress(newAddress);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="address">Address</label>
      <AutoCompleteInput
        setAddress={setAddress}
        handleManualInputChange={handleManualInputChange}
        streetAndNumber={address.streetAndNumber}
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        placeholder="City"
        value={address.place}
        onChange={(event) => handleManualInputChange(event, 'place')}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        placeholder="Country"
        value={address.country}
        onChange={(event) => handleManualInputChange(event, 'country')}
      />

      <div className="buttons">
        <button type="submit" className="confirm-button">
          Confirm
        </button>
        <button
          type="reset"
          className="reset-button"
          onClick={() =>
            setAddress({
              streetAndNumber: '',
              place: '',
              country: '',
              latitude: '',
              longitude: '',
            })
          }
        >
          Reset
        </button>
      </div>
    </form>
  );
}
