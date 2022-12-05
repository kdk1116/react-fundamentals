// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [userName, setUserName] = React.useState('')
  const handleSubmit = (event) => {
    event.preventDefault() 
    onSubmitUsername(userName)
  }
  const handleChange = (event) => {
    event.preventDefault()
    const {value} = event.target
    setUserName(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input 
        onChange={handleChange} 
        id="usernameInput" 
        type="text" 
        value={userName}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
