import './addressForm.scss';
import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';
import PropTypes from 'prop-types';
import { useState } from 'react';

AddressForm.propTypes = {
  address: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setAddress: PropTypes.func.isRequired,
};

export default function AddressForm({ address, onSubmit, setAddress }) {
  const [items, setItems] = useState([]);

  const handleAddCountry = (newItem) => {
    setItems([...items, newItem]);
  };
  const uniqueCountries = [...new Set(items)];
  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="address">Address</label>
      <AutoCompleteInput setAddress={setAddress} />
      <div className="visitedCountry">
        <div className="buttons">
          <button onClick={() => handleAddCountry(address.country)}>
            Add Country
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
        <div>
          {uniqueCountries.map((item, index) => (
            <h2 key={index}>{item}</h2>
          ))}
          {uniqueCountries.length !== items.length && (
            <p color="red">
              Selected Country is already in visited country's list
            </p>
          )}
        </div>
      </div>
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
