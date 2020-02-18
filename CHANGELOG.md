# Changelog

* In general follow (https://docs.npmjs.com/getting-started/semantic-versioning) versioning.

## <next>
* Upgraded ` @opuscapita/format-utils@2.2.5` and unformatted input before calling `formatCurrencyAmount`

## 1.2.6
* Upgraded ` @opuscapita/format-utils@2.2.4`
* Enhanced `FormattedInputCurrency`: prevented minus sign removal on change in case of 0.00 --> -0.00 (--> -10.00)

## 1.2.5
* Global shared userTyping variable removed and replaced by state variable. Global shared variable prevented programmatic updates to input values when using multiple inputs in same component (e.g. in react-grid)

## 1.2.4
* Bumped `@opuscapita/format-utils` version number to 2.2.3
* Removed not needed dependencies
* Added moment as peerDependency since it's needed by @opuscapita/format-utils

## 1.2.3
* `FormattedInput` `onBlur` returns typed value instead of formatted value

## 1.2.2
* Fixed `FormattedInputCurrency` invalid input is changed to 0 on blur

## 1.2.1
* Upgraded `@opuscapita/format-utils` version
* Fixed currency `editFormatter`, invalid input is changed to 0

## 1.2.0
* Added `onBlur` prop for both `FormattedInput` and `FormattedInputCurrency`
* Added `editFormatter` prop for `FormattedInput`

## 1.1.4
* Bumped `@opuscapita/format-utils` version number to 2.1.2

## 1.1.3
* Further tweaks to `FormattedInputCurrency` formatter function

## 1.1.2
* Minor fixes to `FormattedInputCurrency`

## 1.1.1
* Bumped `@opuscapita/format-utils` version number to 2.1.1

## 1.1.0
* Storybook 5 support for component
* `FormattedInput` and `FormattedInputCurrency` components

## 1.0.0
* Initial release
