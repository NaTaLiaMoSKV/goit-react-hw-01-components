import PropTypes from 'prop-types';
import css from "components/statistics/Statistics.module.css";

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            { (title !== undefined) && <h2 className={css.title}>{title}</h2> }
            <ul className={css.statList}>
                {stats.map(el => (
                    <li className={css.item} style={{ backgroundColor: getRandomBgColor() }} key={el.id}>
                        <span className={css.label}>{el.label}</span>
                        <span className={css.percentage}>{el.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function getRandomBgColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
    title: PropTypes.string, 
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    )
};
