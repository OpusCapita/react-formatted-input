import { storiesOf } from '@storybook/react';
import FormattedInputCurrencyStory from './formatted-input-currency.story';
import FormattedInputStory from './formatted-input.story';

const stories = storiesOf('ReactFormattedInput', module);
// add simple story with knobs (component props)
stories
  .add('FormattedInput', FormattedInputStory)
  .add('FormattedInputCurrency', FormattedInputCurrencyStory)
