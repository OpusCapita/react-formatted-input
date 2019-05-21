import { text } from '@storybook/addon-knobs';
import React from 'react';
import FormattedInput from '../src';

const FormattedInputStory = () => {
  const onChange = (val) => {
    console.log('onChange called with', val); // eslint-disable-line
  };

  const formatter = value => `Formatter output: ${value}`;

  const knobs = {
    value: text('Initial value', 'Default'),
  };

  return (<FormattedInput {...knobs} onChange={onChange} formatter={formatter} />);
};

export default FormattedInputStory;
