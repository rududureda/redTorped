import './App.scss';
import AddressForm from './components/AddressForm/AddressForm';
import Map from './components/Map/Map';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';

function App() {
  // const [loading, setLoading] = useState(false);
  // const [countries, setCountries] = useState([]);
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
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get('http://localhost:3000/country'); // Adjust the URL as per your backend endpoint
  //       setCountries(response.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/country');
        console.log('response', response);

        const data = await response.jason();
        console.log('data', data);
      } catch (error) {
        `Error:${error.message}`;
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <AddressForm
        onSubmit={handleFormSubmit}
        address={address}
        setAddress={setAddress}
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
