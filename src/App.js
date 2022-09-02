import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const currentYear = new Date().getFullYear();

const dummyExpenses = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(currentYear, 7, 14),
    },
    {
        id: "e2",
        title: "New TV",
        amount: 799.49,
        date: new Date(currentYear - 1, 2, 12),
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(currentYear - 2, 2, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(currentYear - 3, 5, 12),
    },
];

function App() {
    const [expenses, setExpenses] = useState(dummyExpenses);

    const newExpenseHandler = (newExpense) => {
        setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
    };

    return (
        <div>
            <NewExpense onNewExpense={newExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
