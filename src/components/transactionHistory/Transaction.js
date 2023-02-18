import PropTypes from 'prop-types';
import css from "components/transactionHistory/TransactionHistory.module.css";

export const Transaction = ({ type, amount, currency }) => {
    return (
        <>
            <td className={css.type}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </>
    );
}

Transaction.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
};
