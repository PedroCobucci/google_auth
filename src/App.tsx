import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleCredentialResponse(response) {
    if (response.credential) {
      setIsLoggedIn(true);
    } else {
      console.log('Falha no login');
    }
  }

  function handleLogout() {
    /* global google */
    google.accounts.id.disableAutoSelect();
    setIsLoggedIn(false);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID',
      callback: handleCredentialResponse,
    });

    const parent = document.getElementById('google_btn');
    google.accounts.id.renderButton(parent, { theme: 'filled_blue' });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {isLoggedIn ? (
        <>
          <div>
            <h2>Você está logado!</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </>
      ) : (
        <>
          <div id="google_btn"></div>
        </>
      )}
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <script src="https://accounts.google.com/gsi/client" async></script>
    </>
  );
}

export default App;
