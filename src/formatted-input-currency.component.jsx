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

    return formatCurrencyAmount(val, {
      currency, decimals, thousandSeparator, decimalSeparator,
    });
  };

  editFormatter = (val) => {
    const { thousandSeparator, decimalSeparator } = this.props;

    if (val === undefined || val === null || val === '') return '';

    return val.includes(decimalSeparator) || Number.isNaN(Number(val))
      ? val
      : formatCurrencyAmount(val, { decimals: 0, thousandSeparator, decimalSeparator });
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
