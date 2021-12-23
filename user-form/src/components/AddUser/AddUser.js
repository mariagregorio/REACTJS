import React, { useState } from 'react'
import Card from '../UI/Card/Card'
import styles from './AddUser.module.css'

const AddUser = ({ addUser }) => {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [usernameValid, setUsernameValid] = useState(true)
  const [ageValid, setAgeValid] = useState(true)

  const usernameHandler = (e) => {
    if (e.target.value !== '') setUsernameValid(true)
    setUsername(e.target.value)
  }

  const ageHandler = (e) => {
    if (e.target.value !== '' && e.target.value.match(/^\d+$/)) setAgeValid(true)
    setAge(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (username === '') {
      setUsernameValid(false)
      return
    }
    if (age === '' || !age.match(/^\d+$/)) {
      setAgeValid(false)
      return
    }
    setUsername('')
    setAge('')
    addUser({ username: username, age: Number(age) })
  }

  return (
    <Card>
      <h3>Add new user</h3>
      <form onSubmit={submitHandler} className={styles['add-user-form']}>
        <div className={styles['form-control']}>
          <label htmlFor='usernameInput'>Username</label>
          <input type='text' 
            id='usernameInput' 
            value={username} 
            onChange={usernameHandler} 
            className={!usernameValid ? styles.invalid : ''} />
          {!usernameValid && <p className={styles['invalid-feedback']}>Please enter username</p>}
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='ageInput'>Age (years)</label>
          <input type='text' 
            id='ageInput' 
            value={age} 
            onChange={ageHandler} 
            className={!ageValid ? styles.invalid : ''} />
          {!ageValid && <p className={styles['invalid-feedback']}>Please enter age in numbers only</p>}
        </div>
        <div className={styles.actions}>
          <button type='submit'>Add user</button>
        </div>
      </form>
    </Card>
  )
}

export default AddUser