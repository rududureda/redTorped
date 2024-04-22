import './addressForm.scss';
import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

AddressForm.propTypes = {
  address: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setAddress: PropTypes.func.isRequired,
  // handleAddToVisitedCountry: PropTypes.func, //deleted .isRequired
  // handleRemoveFromVisitedCountry: PropTypes.func, //deleted .isRequired
  // visitedCountryData: PropTypes.array, //deleted .isRequired
};

export default function AddressForm({
  address,
  onSubmit,
  setAddress,
  // handleAddToVisitedCountry,
  // handleRemoveFromVisitedCountry,
  // visitedCountryData,
}) {
  const handleAddCountry = (country) => {
    setAddress([...address.countries, country]);
  };
  // const isVisitedCountry = visitedCountryData.some(
  //   (item) => item.address === address
  // );
  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="address">Address</label>
      <AutoCompleteInput setAddress={setAddress} />
      <div className="visitedCountry">
        <div>
          {/* <visitedCountryData value={address.country} /> */}
          <h2>{address.country}</h2>
          {/* <FontAwesomeIcon
            icon={faCircleXmark}
            className={`favorite-icon ${
              isVisitedCountry ? 'favorite-icon--active' : ''
            } `}
            onClick={() => {
              isVisitedCountry
                ? handleRemoveFromVisitedCountry(address.country)
                : handleAddToVisitedCountry(address.country);
            }}
          /> */}
        </div>
      </div>
      <div className="buttons">
        <button
          onClick={handleAddCountry}
          type="submit"
          className="confirm-button"
        >
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
// import './addressForm.scss';
// import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';
// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'; // Changed the icon to faTimesCircle

// AddressForm.propTypes = {
//   address: PropTypes.object.isRequired,
//   onSubmit: PropTypes.func.isRequired,
//   setAddress: PropTypes.func.isRequired,
// };

// export default function AddressForm({ address, onSubmit, setAddress }) {
//   // Step 1: Create state to store the list of visited countries
//   const [visitedCountries, setVisitedCountries] = useState([]);

//   // Step 3: Implement the handleRemovefromCountrys function
//   const handleRemovefromCountrys = (index) => {
//     const updatedCountries = [...visitedCountries];
//     updatedCountries.splice(index, 1);
//     setVisitedCountries(updatedCountries);
//   };

//   return (
//     <form className="form" onSubmit={onSubmit}>
//       <label htmlFor="address">Address</label>
//       <AutoCompleteInput setAddress={setAddress} />

//       {/* Step 4: Render the list of visited countries dynamically */}
//       <div className="visitedCountry">
//         {visitedCountries.map((country, index) => (
//           <div key={index}>
//             <h2>{address.country}</h2>
//             {/* Step 5: Add an event handler to the remove button */}
//             <FontAwesomeIcon
//               icon={faTimesCircle}
//               className="favorite-icon favorite-icon--active"
//               onClick={() => handleRemovefromCountrys(index)}
//             />
//           </div>
//         ))}
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
