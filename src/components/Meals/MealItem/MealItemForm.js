import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useState } from "react";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // console.log(event.target.value);
  };

  const addItemHandler = (event) => {
    event.preventDefault();
    props.onAddItem(+amount);
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
          onChange: amountChangeHandler,
        }}
      />
      <button onClick={addItemHandler}> + Add</button>
    </form>
  );
};

export default MealItemForm;
