import { useState } from 'react'
import './App.css'
import { SignupForm } from './components/signup-form/component'
import { Thanks } from './components/thankyou-modal/component'

function App() {
  const [email, setEmail] = useState<string>("")
  const [initial, isInitial] = useState<boolean>(true)
  const [submitted, setSubmitted] = useState<boolean>(false)

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const email = setEmail(e.target.value)
    console.log(email)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    isInitial(false)
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if (emailPattern.test(email)) {
      setEmail(email)
      setSubmitted(true)
    }
  }

  return (
    <>
      {
        !submitted ?
          <SignupForm initial={initial} email={email} onChange={handleEmailChange} onSubmit={handleSubmit} />
          :
          <Thanks email="jamesvu1998@gmail.com" />
      }
    </>
  )
}

export default App
