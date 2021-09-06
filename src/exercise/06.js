// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('');

  // 🐨 add a submit event handler here (`handleSubmit`).
  const handleSubmit = event => {
    event.preventDefault();
    // 🐨 Call `onSubmitUsername` with the value of the input
    onSubmitUsername(username);
  };

  // 🐨 add a input even handler here
  const handleChange = e => {
    setUsername(e.target.value.toLowerCase());
  };

  // 🐨 add the onSubmit handler to the <form> below
  // 🐨 make sure to associate the label to the input.
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          type="text"
          id="usernameInput"
          value={username}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
