import React from 'react';
import PropTypes from 'prop-types';

// App imports
import './formatted-input.scss';

class FormattedInput extends React.PureComponent {
  static propTypes = {
    formatter: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    inputProps: PropTypes.shape({}),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    editFormatter: PropTypes.func,
  };

  static defaultProps = {
    formatter: val => val,
    onBlur: () => {},
    inputProps: {},
    value: '',
    className: '',
    editFormatter: val => val,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { formatter, value: nextValue } = nextProps;
    const { prevPropsValue } = prevState;

    // Format value if change is not initiated by a user and previous state value differs
    // from the formatted value
    if (!prevState.userTyping && prevPropsValue !== formatter(nextValue)) {
      const formattedValue = formatter(nextValue);
      return { value: formattedValue, prevPropsValue: formattedValue };
    }
    return null;
  }

  constructor(props) {
    super(props);
    const { value, formatter } = props;
    this.state = {
      value: formatter(value),
      prevPropsValue: null,
      userTyping: false,
    };
  }

  /**
   * Called when user leaves the field, fires the formatter
   * @param e
   */
  onBlur = (e) => {
    const { formatter, onBlur } = this.props;
    const { target: { value: val } } = e;

    const value = formatter(val, true);

    this.setState({ value }, () => {
      onBlur(val);
      this.setState(() => ({ userTyping: false }));
    });
  };


  /**
   * Called when input value changes. "userTyping" helps getDerivedStateFromProps
   * to distinguish a user initiated change from other other value prop changes
   * @param e
   */
  onChange = (e) => {
    const { editFormatter, onChange } = this.props;
    const { target: { value } } = e;

    this.setState({ value: editFormatter(value), userTyping: true }, () => {
      onChange(value);
    });
  };

  render() {
    const { inputProps, className } = this.props;
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
