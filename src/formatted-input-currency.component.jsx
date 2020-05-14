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
    selectValueOnClick: PropTypes.bool,
  };

  static defaultProps = {
    decimals: undefined,
    thousandSeparator: undefined,
    decimalSeparator: '.',
    value: '',
    inputProps: undefined,
    className: '',
    onBlur: () => {},
    selectValueOnClick: false,
  };

  componentWillUnmount = () => {
    clearTimeout(this.timeout);
  }

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

    let allDecimals;
    const unformattedValue = unformat ? this.unformatInput(val) : val;

    // if no currency or decimals, then the number is not rounded to the certain amount of decimals
    if (!currency && (decimals === undefined || decimals === null)) {
      const separator = '.';
      const fraction = unformattedValue.toString().split(separator)[1];
      allDecimals = (fraction && fraction.length) || 0;
    }
    const value = formatCurrencyAmount(unformattedValue, {
      currency, decimals: allDecimals || decimals, thousandSeparator, decimalSeparator,
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

    const value = formatCurrencyAmount(this.unformatInput(val), {
      decimals, thousandSeparator, decimalSeparator,
    });

    // this avoids minus sign removal in the editing phase like this: 0.00 --> -0.00 --> -10.00
    if (val === `-${value}`) return val;

    if (Number.isNaN(value)) {
      return formatCurrencyAmount(0, { decimals, thousandSeparator, decimalSeparator });
    }

    if (decimalSeparatorIndex > -1 && decimals === 0) return `${value}${decimalSeparator}`;

    return value;
  }

  handleMouseDown = (e) => {
    const { selectValueOnClick } = this.props;
    const { currentTarget, currentTarget: { value } } = e;
    if (document.activeElement !== currentTarget
      && selectValueOnClick
      && value !== undefined
      && value !== null) {
      this.timeout = setTimeout(() => {
        currentTarget.setSelectionRange(0, value.length);
      }, 10);
    }
  }

  render() {
    const {
      onBlur, onChange, value, inputProps, className,
    } = this.props;
    return (
      <FormattedInput
        onBlur={onBlur}
        onChange={onChange}
        onMouseDown={this.handleMouseDown}
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
