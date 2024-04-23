
//////try to change logged in user /////////////////
// import '../Navbar/Navbar.scss';
// import { useState } from 'react';
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from 'jwt-decode';

// function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState('');

//   const handleLoginSuccess = (credentialResponse) => {
//     const decoded = jwtDecode(credentialResponse?.credential);
//     console.log('Decoded:', decoded);
//     setIsLoggedIn(true);
//     setUserName(decoded.given_name || decoded.name || 'Guest');
//   };

//   const handleLoginError = () => {
//     console.log('Login Failed');
//   };

//   return (
//     <nav className="nav-container">
//       <h1>Red Tordeda</h1>
//       <GoogleLogin
//         onSuccess={handleLoginSuccess}
//         onError={handleLoginError}
//         isSignedIn={isLoggedIn}
//         buttonText={
//           isLoggedIn ? `Logged in as ${userName}` : 'Sign in with Google'
//         }
//       />
//     </nav>
//   );
// }

// export default Navbar;
/////good
import '../Navbar/Navbar.scss';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function Navbar() {
  return (
    <nav className="nav-container">
      <h1>Red Tordeda</h1>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse?.credential);
          console.log(decoded);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </nav>
  );
}

export default Navbar;
