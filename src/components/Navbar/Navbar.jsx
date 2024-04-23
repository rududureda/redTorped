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
      ;
    </nav>
  );
}

export default Navbar;
