import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isNewExpense, setIsNewExpense] = useState(false);

    const handleIsNewExpense = (e) => {
        setIsNewExpense(!isNewExpense);
    };

    const savedExpenseHandler = (newExpense) => {
        props.onNewExpense(newExpense);
    };

    return (
        <div className="new-expense">
            {isNewExpense ? (
                <ExpenseForm
                    onSavedExpense={savedExpenseHandler}
                    onHandleIsNewExpense={handleIsNewExpense}
                />
            ) : (
                <button onClick={handleIsNewExpense}>Add New Expense</button>
            )}
        </div>
    );
};

export default NewExpense;
