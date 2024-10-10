import styles from "./transaction-history.module.css";

export interface Transaction {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

export interface TransactionHistoryProps {
  items: Transaction[];
}
export function TransactionHistory({ items }: TransactionHistoryProps) {
  const renderRow = (transaction: Transaction) => {
    return (
      <tr key={transaction.id}>
        <td>{transaction.type}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.currency}</td>
      </tr>
    );
  };

  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{items.map(renderRow)}</tbody>
    </table>
  );
}
