import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await fetch('http://localhost:8000/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Erro ao buscar usuários', error);
    }
  };

  async function handleCredentialResponse(response) {
    try {
      const loginResponse = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: response.credential }),
      });

      const loginData = await loginResponse.json();

      if (loginResponse.ok) {
        setLoggedIn(true);
        setUser(loginData.user);
        fetchUsers();
        document.getElementById('google_btn').hidden = true;
      } else {
        console.error('Falha na autenticação', loginData.error);
      }
    } catch (error) {
      console.error('Erro na autenticação', error);
    }
  }

  function handleLogout() {
    google.accounts.id.disableAutoSelect();
    setLoggedIn(false);
    setUser(null);
    document.getElementById('google_btn').hidden = false;
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: '1016978376547-ammm0m45bra2q14vc5e1cc110eubr65u.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });

    const parent = document.getElementById('google_btn');
    google.accounts.id.renderButton(parent, { theme: 'filled_blue' });

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Login com Google</h1>

      {loggedIn ? (
        <div>
          <h2>Usuário Logado:</h2>
          <p>Nome: {user?.name}</p>
          <p>Email: {user?.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', paddingTop: '5%', justifyContent: 'center' }} id="google_btn"></div>
        </div>
      )}

      <h2>Usuários Cadastrados:</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              Nome: {user.name} / E-mail: {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum usuário cadastrado.</p>
      )}
    </div>
  );


}

export default App;
