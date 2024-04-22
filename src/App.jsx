import './App.scss';
import AddressForm from './components/AddressForm/AddressForm';
import AutoCompleteInput from './components/AutoCompleteInput/AutoCompleteInput';
import Map from './components/Map/Map';
// import VisitedCountry from './components/VisitedCountry/VisitedCountry';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';

function App() {
  const [address, setAddress] = useState({
    country: '',
    latitude: '',
    longitude: '',
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (address) {
      console.log('Selected address:', address);
    }
  };

  const updateCoordinates = (latitude, longitude) => {
    setAddress({ ...address, latitude, longitude });
  };

  return (
    <div className="App">
      <AddressForm
        onSubmit={handleFormSubmit}
        address={address}
        setAddress={setAddress}
      />
      <AutoCompleteInput address={address} />
      {/* <VisitedCountry /> */}
      {address.longitude && address.latitude && (
        <Map
          longitude={address.longitude}
          latitude={address.latitude}
          updateCoordinates={updateCoordinates}
        />
      )}
    </div>
  );
}

export default App;

// import './App.scss';
// import AddressForm from './components/AddressForm/AddressForm';
// import Map from './components/Map/Map';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import { useState } from 'react';

// function App() {
//   const [country, setCountry] = useState('');
//   const [coordinates, setCoordinates] = useState({
//     latitude: '',
//     longitude: '',
//   });

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     if (country) {
//       console.log('Selected country:', country);
//     }
//   };

//   const updateCoordinates = (latitude, longitude) => {
//     setCoordinates({ latitude, longitude });
//   };

//   return (
//     <div className="App">
//       <AddressForm
//         onSubmit={handleFormSubmit}
//         country={country}
//         setCountry={setCountry}
//       />
//       {coordinates.longitude && coordinates.latitude && (
//         <Map
//           longitude={coordinates.longitude}
//           latitude={coordinates.latitude}
//           updateCoordinates={updateCoordinates}
//         />
//       )}
//     </div>
//   );
// }

// export default App;
