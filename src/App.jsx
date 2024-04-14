import './App.scss';
import AddressForm from './components/AddressForm/AddressForm';
import Map from './components/Map/Map';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';

function App() {
  const [country, setCountry] = useState('');
  const [coordinates, setCoordinates] = useState({
    latitude: '',
    longitude: '',
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (country) {
      console.log('Selected country:', country);
    }
  };

  const updateCoordinates = (latitude, longitude) => {
    setCoordinates({ latitude, longitude });
  };

  return (
    <div className="App">
      <AddressForm
        onSubmit={handleFormSubmit}
        country={country}
        setCountry={setCountry}
      />
      {coordinates.longitude && coordinates.latitude && (
        <Map
          longitude={coordinates.longitude}
          latitude={coordinates.latitude}
          updateCoordinates={updateCoordinates}
        />
      )}
    </div>
  );
}

export default App;
