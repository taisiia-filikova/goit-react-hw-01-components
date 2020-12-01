import PropTypes from 'prop-types';
import s from './TransactionHistoryItem.module.css';

function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr className={s.row}>
      <td className={s.cell}>{type}</td>
      <td className={s.cell}>{amount}</td>
      <td className={s.cell}>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionHistoryItem;
