const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => {
    return (
      <button
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    );
  });

export default FeedbackOptions;
