import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import { useState } from "react";

const Expenses = ({ items }) => {
    const [filteredYear, setFilteredYear] = useState("");

    const filteredYearHandler = (year) => {
        setFilteredYear(year);
    };

    const filteredExpenses =
        filteredYear === ""
            ? items
            : items.filter(
                  (item) => item.date.getFullYear() === parseInt(filteredYear)
              );

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onChangeFilter={filteredYearHandler}
                    selected={filteredYear}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList
                    expenses={filteredExpenses}
                    filteredYear={filteredYear}
                />
            </Card>
        </div>
    );
};

export default Expenses;
