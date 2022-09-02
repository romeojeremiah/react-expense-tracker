import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [isError, setIsError] = useState(false);

    const handleTitleInput = (e) => {
        setTitle(e.target.value);
    };
    const handleAmountInput = (e) => {
        setAmount(e.target.value);
    };
    const handleDateInput = (e) => {
        setDate(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (title !== "" && amount !== "" && date !== "") {
            setIsError(false);
            const newExpense = {
                title: title,
                amount: +amount,
                date: new Date(date),
                id: Math.random().toString(),
            };

            props.onSavedExpense(newExpense);
            props.onHandleIsNewExpense();
            setTitle("");
            setAmount("");
            setDate("");
        } else {
            setIsError(true);
            alert("Expense can't be blank");
        }
    };

    const handleCancelBtn = () => {
        props.onHandleIsNewExpense();
        setTitle("");
        setAmount("");
        setDate("");
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleInput}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={handleAmountInput}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-3"
                        value={date}
                        onChange={handleDateInput}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={handleCancelBtn}>
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
