// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState();
  const inputRef = React.useRef('');
  // 🐨 add a submit event handler here (`handleSubmit`).
  const handleSubmit = event => {
    event.preventDefault();
    // 🐨 get the value from the username input
    const userName = inputRef.current.value;
    // 🐨 Call `onSubmitUsername` with the value of the input
    onSubmitUsername(userName);
  };

  // 🐨 add a input even handler here
  const handleChange = e => {
    const value = e.target.value;
    // check to see if input is upper case
    const isValid = value === value.toLowerCase();
    setError(isValid ? null : 'Username must be lower case');
  };

  // 🐨 add the onSubmit handler to the <form> below
  // 🐨 make sure to associate the label to the input.
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={inputRef}
          type="text"
          id="usernameInput"
          onChange={handleChange}
        />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
