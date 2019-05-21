# react-formatted-input

### Description
Describe the component here

### Installation
```
npm install @opuscapita/react-formatted-input
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-formatted-input)

### Change log
View the [Change log](CHANGELOG.md)

### Migrate guide
View the [Migrate guide](MIGRATEGUIDE.md) between major versions

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### FormattedInput API
| Prop name                | Type             | Default                                  | Description                                               |
| ------------------------ | ---------------- | ---------------------------------------- | --------------------------------------------------------- |
| onChange                 | func             | Required                                 | Called upon change                                        |
| formatter                | func             | Noop function                            | Function that formats the value                           |
| inputProps               | object           |                                          | Collection of props that are be passed to the input field |
| value                    | text, number     |                                          | Input value                                               |


### FormattedInputCurrency API
| Prop name                | Type             | Default                                  | Description                                               |
| ------------------------ | ---------------- | ---------------------------------------- | --------------------------------------------------------- |
| onChange                 | func             | Required                                 | Called upon change                                        |
| currency                 | string           | undefined                                | Currency code to get number of decimals from              |
| decimals                 | string           | undefined                                | Number of decimals, overrides currency decimals           |
| thousandSeparator        | string           | undefined                                | Thousand separator                                        |
| decimalSeparator         | string           | "."                                      | Decimal separator                                         |

### Code example
```jsx
import React from 'react';
import FormattedInput, { FormatInputCurrency } from '@opuscapita/react-formatted-input';

export default class ReactView extends React.Component {
  formatter = (value) => `formatted-${value}`; 

  render() {
    return (
      <React.Fragment>
      <FormattedInput 
        onChange="..."
        formatter={this.formatter}
      />
      <FormattedInputCurrency
        currency="EUR"
        onChange="..."
      />
      <React.Fragment>
    );
  }
}
```
