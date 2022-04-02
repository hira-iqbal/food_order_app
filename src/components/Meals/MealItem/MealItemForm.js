import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input/Input';
const MealItemForm = (props) => {

  const[amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enterdAmount = amountInputRef.current.value;
    // current value return from ref is always a string to convert it into a number use
    const enterdAmountInNumber = +enterdAmount;

    if (
      enterdAmount.trim().length === 0 ||
      enterdAmountInNumber < 1 ||
      enterdAmountInNumber > 5
    )
    {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enterdAmountInNumber);
  };
  return (
    <form className={ classes.form } onSubmit={ submitHandler }>
    <Input
    ref= { amountInputRef }
    label="Amount"
    input={{
      id: 'amount_'+ props.id,
      type: 'number',
      min: '1',
      max: '5',
      step:'1',
      defaultValue: '1',
    }}/>
    <button>+ Add</button>
    { !amountIsValid && <p>Please enter a valid amount (1-5).</p> }
    </form>
  );
};

export default MealItemForm;
