import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Display from './components/Display'
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <>
      <Form legend="General Info" inputFeilds={[
        { type: "text", placeholder: "name", setter: setName },
        { type: "email", placeholder: "Email", setter: setEmail },
        { type: "number", placeholder: "Phone", setter: setPhone }]} />
      <div>{name} {email} {phone}</div>
    </>
  )
}

export default App
