import Notification from '../Notification/Notification';

const Statistics = ({ good, neutral, bad, total = 0 }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <>
          <p>Good {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
        </>
      )}
    </div>
  );
};

export default Statistics;
