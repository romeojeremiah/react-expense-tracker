import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const savedExpenseHandler = (newExpense) => {
        props.onNewExpense(newExpense);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSavedExpense={savedExpenseHandler} />
        </div>
    );
};

export default NewExpense;
