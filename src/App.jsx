import './App.scss';
import AddressForm from './components/AddressForm/AddressForm';
import Map from './components/Map/Map';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, useEffect } from 'react';
// import axios from 'axios';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [data, setData] = useState([]); //add
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/country');
        console.log('response', response);

        const countries = await response.json();
        console.log('countries', countries);

        setData(countries);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  console.log(' setData', setData);
  // useEffect(() => {
  //   localStorage.setItem('data', JSON.stringify(data));
  //   console.log('data', data);
  // }, [data]);

  return (
    <div className="App">
      <Navbar />
      <AddressForm
        onSubmit={handleFormSubmit}
        address={address}
        setAddress={setAddress}
        data={data}
        // countries={countries}
        // loading={loading}
      />
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
