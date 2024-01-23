import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const { expensesState } = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesState}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!!!."
    />
  );
};

export default AllExpenses;
