import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    const filtered = props.expenses.filter(
        (item) => item.date.getFullYear() === parseInt(props.filteredYear)
    );

    if (filtered.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses exist.</h2>;
    }

    return (
        <ul className="expenses-list">
            {filtered.map((item) => {
                const { id, title, amount, date } = item;
                return (
                    <ExpenseItem
                        key={id}
                        title={title}
                        amount={amount}
                        date={date}
                    />
                );
            })}
        </ul>
    );
};

export default ExpensesList;
