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

  unformatInput = (val) => {
    const {
      thousandSeparator, decimalSeparator,
    } = this.props;

    if (typeof val === 'number') return val;

    let value = val;
    if (thousandSeparator) {
      value = value.replace(new RegExp(`\\${thousandSeparator}`, 'g'), '');
    }
    if (decimalSeparator !== '.') {
      value = value.replace(new RegExp(`\\${decimalSeparator}`, 'g'), '.');
    }

    return value;
  }

  /**
   * Formats the value with @opuscapita/format-utils formatCurrencyAmount function
   * @param val
   * @returns {*}
   */
  formatter = (val, unformat = false) => {
    const {
      currency, decimals, thousandSeparator, decimalSeparator,
    } = this.props;

    if (val === undefined || val === null || val === '') return '';

    const value = formatCurrencyAmount(unformat ? this.unformatInput(val) : val, {
      currency, decimals, thousandSeparator, decimalSeparator,
    });

    return Number.isNaN(value)
      ? formatCurrencyAmount(0, { decimals, thousandSeparator, decimalSeparator })
      : value;
  };

  editFormatter = (val) => {
    const { thousandSeparator, decimalSeparator } = this.props;

    if (val === undefined || val === null || val === '') return '';
    // - or + are not formatted
    if (val.length <= 1) return val;

    const decimalSeparatorIndex = val.lastIndexOf(decimalSeparator);
    const decimals = decimalSeparatorIndex > -1
      ? val.length - decimalSeparatorIndex - 1
      : 0;

    const value = formatCurrencyAmount(this.unformatInput(val), { decimals, thousandSeparator, decimalSeparator });

    // this avoids minus sign removal in the editing phase like this: 0.00 --> -0.00 --> -10.00
    if (val === `-${value}`) return val;

    if (Number.isNaN(value)) {
      return formatCurrencyAmount(0, { decimals, thousandSeparator, decimalSeparator });
    }

    if (decimalSeparatorIndex > -1 && decimals === 0) return `${value}${decimalSeparator}`;

    return value;
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
        inputProps={inputProps}
      />
    );
  }
}

export default FormattedInputCurrency;
