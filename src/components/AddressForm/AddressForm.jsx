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
  address: PropTypes.object,//deleted isRequired
  onSubmit: PropTypes.func,//deleted isRequired
  setAddress: PropTypes.func,//deleted isRequired
  handleAddToVisited: PropTypes.func,//deleted isRequired
};

export default function AddressForm({
  address,
  onSubmit,
  setAddress,
  handleAddToVisited,
}) {
  const handleManualInputChange = (event, stateProperty) => {
    const newAddress = { ...address };
    newAddress[stateProperty] = event.target.value;

    setAddress(newAddress);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call handleAddToVisited to add the country to visited list
    handleAddToVisited(address.country);
    // Reset the country input
    setAddress({ ...address, country: '' });
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="address">Address</label>
      <AutoCompleteInput
        setAddress={setAddress}
        handleManualInputChange={handleManualInputChange}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        placeholder="Country"
        value={address}////deleted .country
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
