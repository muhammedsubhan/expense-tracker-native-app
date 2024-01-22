import { FlatList, Text } from "react-native";

const renderExpensesItem = (itemData) => {
  return (
    <>
      <Text>{itemData.item.description}</Text>
    </>
  );
};

const ExpensesList = ({ expenses }) => {
  return (
    <>
      <FlatList
        data={expenses}
        renderItem={renderExpensesItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default ExpensesList;
