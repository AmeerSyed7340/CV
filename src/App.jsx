import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Display from './components/Display'
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [degree, setDegree] = useState('');
  const [school, setSchool] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  return (
    <>
      <Form legend="General Info" inputFeilds={[
        { type: "text", placeholder: "name", setter: setName },
        { type: "email", placeholder: "Email", setter: setEmail },
        { type: "number", placeholder: "Phone", setter: setPhone }]} />

      <Form legend="Experience" inputFeilds={[
        {type: "text", placeholder: "Enter Degree", setter: setDegree},        
        {type: "text", placeholder: "Enter School/Uni", setter: setSchool},        
        {type: "text", placeholder: "Enter City", setter: setCity},        
        {type: "text", placeholder: "Enter Country", setter: setCountry},        
      ]}/>
      <Display name={name} email={email} phone={phone} degree={degree} school={school} city={city} country={country}/>
    </>
  )
}

export default App
