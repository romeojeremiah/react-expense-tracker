import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";

const Expenses = ({ items }) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const onFilteredYear = (year) => {
        console.log(year);
        setFilteredYear(year);
    };
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onChangeFilter={onFilteredYear}
                    selected={filteredYear}
                />
                <ExpenseItem
                    title={items[0].title}
                    amount={items[0].amount}
                    date={items[0].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={items[1].title}
                    amount={items[1].amount}
                    date={items[1].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={items[2].title}
                    amount={items[2].amount}
                    date={items[2].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={items[3].title}
                    amount={items[3].amount}
                    date={items[3].date}
                ></ExpenseItem>
            </Card>
        </div>
    );
};

export default Expenses;
