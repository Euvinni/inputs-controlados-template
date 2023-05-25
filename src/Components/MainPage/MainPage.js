import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'

function MainPage() {

  const [nameInput, setNameInput] = useState("")
  const [ageInput, setAgeInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [maritalStatus, setMaritalStatus] = useState("")

  const handleChange = (event) =>  {
    setNameInput(event.target.value)
  
  }
  const handleChange2 = (event) =>  {
    setAgeInput(event.target.value)
  }

  const handleChange3 = (event) =>  {
    setEmailInput(event.target.value)
  }

  const handleChange4 = (event) =>  {
    setPasswordInput(event.target.value)
  }

  const handleChange5 = (event) =>  {
    setMaritalStatus(event.target.value)
  }

  const cleanInputsValues = (event) => {
    event.preventDefault()
    
    setNameInput("")
    setAgeInput("")
    setEmailInput("")
    setPasswordInput("")
    setMaritalStatus("")
  }




  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form onSubmit={cleanInputsValues}>
        <label>
          Nome:
          <Input onChange={handleChange} value={nameInput}/>
        </label>

        <label>
          Idade:
          <Input onChange={handleChange2} value={ageInput}/>
        </label>

        <label>
          Email:
          <Input type= {"email"} onChange={handleChange3} value={emailInput}/>
        </label>

        <label>
          Senha:
          <Input type= "password" onChange={handleChange4} value={passwordInput}/>
        </label>

        <select onChange={handleChange5} value={maritalStatus}>
          <option disabled value="">Selecione</option>
          <option value="Solteiro">Solteiro(a)</option>
          <option value="Casado">Casado(a)</option>
          <option value="Viuvo">Viuvo(a)</option>
          <option value="Divorciado">Divorciado(a)</option>
        </select>
        <button onClick={cleanInputsValues}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
