import React from 'react';
import PropTypes from 'prop-types';
import { formatCurrencyAmount } from '@opuscapita/format-utils';

// App imports
import FormattedInput from './formatted-input.component';

class FormattedInputCurrency extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    currency: PropTypes.string.isRequired,
    decimals: PropTypes.string,
    thousandSeparator: PropTypes.string,
    decimalSeparator: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    inputProps: PropTypes.shape({}),
    className: PropTypes.string,
    onBlur: PropTypes.func,
  };

  static defaultProps = {
    decimals: undefined,
    thousandSeparator: undefined,
    decimalSeparator: '.',
    value: '',
    inputProps: undefined,
    className: '',
    onBlur: () => {},
  };

  constructor() {
    super();
    this.state = {
      decimalPointIndex: undefined,
    };
  }

  /**
   * Formats the value with @opuscapita/format-utils formatCurrencyAmount function
   * @param val
   * @returns {*}
   */
  formatter = (val) => {
    const {
      currency, decimals, thousandSeparator, decimalSeparator,
    } = this.props;

    if (val === undefined || val === null || val === '') return '';

    const value = formatCurrencyAmount(val, {
      currency, decimals, thousandSeparator, decimalSeparator,
    });

    return Number.isNaN(value)
      ? formatCurrencyAmount(0, { decimals, thousandSeparator, decimalSeparator })
      : value;
  };

  editFormatter = (val) => {
    const { thousandSeparator, decimalSeparator } = this.props;
    const { decimalPointIndex } = this.state;

    let value = val;

    if (value === undefined || value === null || value === '') return '';

    // - or + are not formatted
    if (value.length <= 1) return value;

    if (decimalPointIndex !== undefined) {
      const separator = value.charAt(decimalPointIndex);
      if (value.charAt(decimalPointIndex) !== decimalSeparator) {
        value = `${value.slice(0, decimalPointIndex)}${value.slice(decimalPointIndex).replace(separator, decimalSeparator)}`;
      }
    }

    const decimalSeparatorIndex = value.lastIndexOf(decimalSeparator);
    const decimals = decimalSeparatorIndex > -1
      ? value.length - decimalSeparatorIndex - 1
      : 0;

    value = formatCurrencyAmount(value, { decimals, thousandSeparator, decimalSeparator });

    if (Number.isNaN(value)) {
      return formatCurrencyAmount(0, { decimals, thousandSeparator, decimalSeparator });
    }

    if (decimalSeparatorIndex > -1 && decimals === 0) return `${value}${decimalSeparator}`;

    return value;
  }

  handleKeyDown = (e) => {
    const { keyCode, target: { selectionStart } } = e;
    this.setState({ decimalPointIndex: keyCode === 110 ? selectionStart : undefined });
  }

  render() {
    const {
      onBlur, onChange, value, inputProps, className,
    } = this.props;
    return (
      <FormattedInput
        onBlur={onBlur}
        onChange={onChange}
        editFormatter={this.editFormatter}
        formatter={this.formatter}
        className={className}
        value={value}
        inputProps={{ ...inputProps, onKeyDown: this.handleKeyDown }}
      />
    );
  }
}

export default FormattedInputCurrency;
