import { number, select, text } from '@storybook/addon-knobs';
import React from 'react';
import { FormattedInputCurrency } from '../src';

const currencyOpts = ['USD', 'JPY', 'EUR', 'LYD'];

const FormattedInputCurrencyStory = () => {
  const onChange = (val) => {
    console.log('onChange called with', val); // eslint-disable-line
  };


  const knobs = {
    currency: select('Currency', currencyOpts, 'EUR'),
    value: number('Initial value', '100'),
    decimals: number('Decimals', undefined),
    thousandSeparator: text('Thousand separator', undefined),
    decimalSeparator: text('Decimal separator', '.'),
  };

  return (<FormattedInputCurrency {...knobs} onChange={onChange} />);
};

export default FormattedInputCurrencyStory;
