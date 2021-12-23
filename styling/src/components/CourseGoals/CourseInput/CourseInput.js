import React, { useState } from 'react';
// import styled from 'styled-components'

import Button from '../../UI/Button/Button'
import styles from './CourseInput.module.css'

/*const FormControl = styled.div`
margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.invalid label{
  color: #8b0000;
}

&.invalid input {
  outline: none;
  background: #fad0d0;
  border-color: #8b0000;
}

&.invalid p {
  color: #8b0000;
  font-size: 12px;
}
`
*/

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if (enteredValue !== '') {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue === '') {
      setIsValid(false)
      return
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
        {!isValid && <p>Please enter a goal</p>}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
