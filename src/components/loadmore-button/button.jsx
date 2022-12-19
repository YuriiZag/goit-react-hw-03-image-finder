import { LoadButton } from "./button.styled";
import PropTypes from 'prop-types';

export const LoadMoreButton = ({ onButtonClick }) => {
    return (
      <LoadButton type="button" onClick={onButtonClick}>
        Load more
      </LoadButton>
    );
}

LoadMoreButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired
}