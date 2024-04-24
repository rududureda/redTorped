/////good, original!!! //////////////////////////////////////////////
// import '../Navbar/Navbar.scss';
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from 'jwt-decode';

// function Navbar() {
//   return (
//     <nav className="nav-container">
//       <h1>Red Tordeda</h1>
//       <GoogleLogin
//         onSuccess={(credentialResponse) => {
//           const decoded = jwtDecode(credentialResponse?.credential);
//           console.log("decoded",decoded);
//         }}
//         onError={() => {
//           console.log('Login Failed');
//         }}
//       />
//     </nav>
//   );
// }

// export default Navbar;

import '../Navbar/Navbar.scss';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse?.credential);
    console.log('decoded', decoded);
    setIsLoggedIn(true);
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="nav-container">
      <h1>Red Tordeda</h1>
      {isLoggedIn ? (
        <button className="button" onClick={handleLogout}>
          Sign out
        </button>
      ) : (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
          buttonText="Sign in with Google"
        />
      )}
    </nav>
  );
}

export default Navbar;
