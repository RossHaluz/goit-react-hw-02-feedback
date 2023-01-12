import { OptionBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => {
    return (
      <OptionBtn
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </OptionBtn>
    );
  });

export default FeedbackOptions;
