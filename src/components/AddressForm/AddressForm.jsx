import './addressForm.scss';
// import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';
// import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';
import PropTypes from 'prop-types';

AddressForm.propTypes = {
  country: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setCountry: PropTypes.func.isRequired,
};

export default function AddressForm({ country, onSubmit, setCountry }) {
  const handleManualInputChange = (event, stateProperty) => {
    const newAddress = { ...country };
    newAddress[stateProperty] = event.target.value;

    setCountry(newAddress);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      {/* <AutoCompleteInput
        setAddress={setAddress}
        handleManualInputChange={handleManualInputChange}
        streetAndNumber={address.streetAndNumber}
      /> */}
      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        placeholder="Country"
        value={country}
        onChange={(event) => handleManualInputChange(event, 'country')}
      />

      <div className="buttons">
        <button type="submit" className="confirm-button">
          Confirm
        </button>
        <button
          type="reset"
          className="reset-button"
          onClick={() => setCountry('')}
        >
          Reset
        </button>
      </div>
    </form>
  );
}
