import React from 'react';
import PropTypes from 'prop-types';

// App imports
import './formatted-input.scss';

let userTyping = false;

class FormattedInput extends React.PureComponent {
  static propTypes = {
    formatter: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    inputProps: PropTypes.shape({}),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
  };

  static defaultProps = {
    formatter: val => val,
    inputProps: {},
    value: '',
    className: '',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { formatter, value: nextValue } = nextProps;
    const { value: prevStateValue } = prevState;

    // Format value if change is not initiated by a user and previous state value differs
    // from the formatted value
    if (!userTyping && prevStateValue !== formatter(nextValue)) {
      return { value: formatter(nextValue) };
    }
    return null;
  }

  constructor(props) {
    super(props);
    const { value, formatter } = props;
    this.state = { value: formatter(value) };
  }

  /**
   * Called when user leaves the field, fires the formatter
   * @param e
   */
  onBlur = (e) => {
    const { formatter, onChange } = this.props;
    const { target: { value } } = e;

    this.setState({ value: formatter(value) }, () => {
      onChange(formatter(value));
      userTyping = false;
    });
  };

  /**
   * Called when input value changes. "userTyping" helps getDerivedStateFromProps
   * to distinguish a user initiated change from other other value prop changes
   * @param e
   */
  onChange = (e) => {
    const { onChange } = this.props;
    const { target: { value } } = e;
    userTyping = true;

    this.setState({ value }, () => {
      onChange(value);
    });
  };

  render() {
    const { inputProps, className } = this.props;
    console.log(inputProps);
    return (
      <input
        {...inputProps}
        className={`oc-formatted-input ${className}`}
        onChange={this.onChange}
        onBlur={this.onBlur}
        value={this.state.value}
      />
    );
  }
}

export default FormattedInput;
