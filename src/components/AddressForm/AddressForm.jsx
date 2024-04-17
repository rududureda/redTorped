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
  address: PropTypes.object.isRequired, //deleted isRequired
  onSubmit: PropTypes.func.isRequired, //deleted isRequired
  setAddress: PropTypes.func.isRequired, //deleted isRequired
  // handleAddToVisited: PropTypes.func,//deleted isRequired
};

export default function AddressForm({
  address,
  onSubmit,
  setAddress,
  // handleAddToVisited,
}) {
  const handleManualInputChange = (country, stateProperty) => {
    const newAddress = { ...address };
    console.log('newAddress:', newAddress);
    console.log('country', country);
    newAddress[stateProperty] = country;

    setAddress(newAddress);
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Call handleAddToVisited to add the country to visited list
  //   handleAddToVisited(address.country);
  //   // Reset the country input
  //   setAddress({ ...address, country: '' });
  // };

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
