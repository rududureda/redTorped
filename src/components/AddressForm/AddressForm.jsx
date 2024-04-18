// import './addressForm.scss';
// import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';
// import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

// AddressForm.propTypes = {
//   address: PropTypes.object.isRequired,
//   onSubmit: PropTypes.func.isRequired,
//   setAddress: PropTypes.func.isRequired,
// };

// export default function AddressForm({ address, onSubmit, setAddress }) {
//   const handleRemovefromCountrys=()=>{};
//   return (
//     <form className="form" onSubmit={onSubmit}>
//       <label htmlFor="address">Address</label>
//       <AutoCompleteInput setAddress={setAddress} />
//       <div className='visitedCountry'>
//         <div>
//           <h2>{address.country}</h2>
//           <FontAwesomeIcon
//             icon={faCircleXmark}
//             className="favorite-icon favorite-icon--active"
//             onClick={() => {
//               console.log('clicked');
//             }}
//           />
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
import './addressForm.scss';
import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'; // Changed the icon to faTimesCircle

AddressForm.propTypes = {
  address: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setAddress: PropTypes.func.isRequired,
};

export default function AddressForm({ address, onSubmit, setAddress }) {
  // Step 1: Create state to store the list of visited countries
  const [visitedCountries, setVisitedCountries] = useState([]);

  // Step 3: Implement the handleRemovefromCountrys function
  const handleRemovefromCountrys = (index) => {
    const updatedCountries = [...visitedCountries];
    updatedCountries.splice(index, 1);
    setVisitedCountries(updatedCountries);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="address">Address</label>
      <AutoCompleteInput setAddress={setAddress} />

      {/* Step 4: Render the list of visited countries dynamically */}
      <div className="visitedCountry">
        {visitedCountries.map((country, index) => (
          <div key={index}>
            <h2>{country}</h2>
            {/* Step 5: Add an event handler to the remove button */}
            <FontAwesomeIcon
              icon={faTimesCircle}
              className="favorite-icon favorite-icon--active"
              onClick={() => handleRemovefromCountrys(index)}
            />
          </div>
        ))}
      </div>

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
