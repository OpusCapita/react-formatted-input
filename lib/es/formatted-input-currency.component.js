function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { formatCurrencyAmount } from '@opuscapita/format-utils'; // App imports

import FormattedInput from './formatted-input.component';

var FormattedInputCurrency =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(FormattedInputCurrency, _React$PureComponent);

  function FormattedInputCurrency() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "formatter", function (val) {
      var _this$props = _this.props,
          currency = _this$props.currency,
          decimals = _this$props.decimals,
          thousandSeparator = _this$props.thousandSeparator,
          decimalSeparator = _this$props.decimalSeparator;
      if (val === undefined || val === null) return '';
      return formatCurrencyAmount(val, {
        currency: currency,
        decimals: decimals,
        thousandSeparator: thousandSeparator,
        decimalSeparator: decimalSeparator
      });
    });

    return _this;
  }

  var _proto = FormattedInputCurrency.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        onChange = _this$props2.onChange,
        value = _this$props2.value,
        inputProps = _this$props2.inputProps,
        className = _this$props2.className;
    return React.createElement(FormattedInput, {
      onChange: onChange,
      formatter: this.formatter,
      className: className,
      value: value,
      inputProps: inputProps
    });
  };

  return FormattedInputCurrency;
}(React.PureComponent);

_defineProperty(FormattedInputCurrency, "defaultProps", {
  decimals: undefined,
  thousandSeparator: undefined,
  decimalSeparator: '.',
  value: '',
  inputProps: undefined,
  className: ''
});

export default FormattedInputCurrency;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImZvcm1hdEN1cnJlbmN5QW1vdW50IiwiRm9ybWF0dGVkSW5wdXQiLCJGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IiwidmFsIiwicHJvcHMiLCJjdXJyZW5jeSIsImRlY2ltYWxzIiwidGhvdXNhbmRTZXBhcmF0b3IiLCJkZWNpbWFsU2VwYXJhdG9yIiwidW5kZWZpbmVkIiwicmVuZGVyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImlucHV0UHJvcHMiLCJjbGFzc05hbWUiLCJmb3JtYXR0ZXIiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLG9CQUFULFFBQXFDLDBCQUFyQyxDLENBRUE7O0FBQ0EsT0FBT0MsY0FBUCxNQUEyQiw2QkFBM0I7O0lBRU1DLHNCOzs7Ozs7Ozs7Ozs7OztnRUEwQlEsVUFBQ0MsR0FBRCxFQUFTO0FBQUEsd0JBR2YsTUFBS0MsS0FIVTtBQUFBLFVBRWpCQyxRQUZpQixlQUVqQkEsUUFGaUI7QUFBQSxVQUVQQyxRQUZPLGVBRVBBLFFBRk87QUFBQSxVQUVHQyxpQkFGSCxlQUVHQSxpQkFGSDtBQUFBLFVBRXNCQyxnQkFGdEIsZUFFc0JBLGdCQUZ0QjtBQUtuQixVQUFJTCxHQUFHLEtBQUtNLFNBQVIsSUFBcUJOLEdBQUcsS0FBSyxJQUFqQyxFQUF1QyxPQUFPLEVBQVA7QUFFdkMsYUFBT0gsb0JBQW9CLENBQUNHLEdBQUQsRUFBTTtBQUMvQkUsUUFBQUEsUUFBUSxFQUFSQSxRQUQrQjtBQUNyQkMsUUFBQUEsUUFBUSxFQUFSQSxRQURxQjtBQUNYQyxRQUFBQSxpQkFBaUIsRUFBakJBLGlCQURXO0FBQ1FDLFFBQUFBLGdCQUFnQixFQUFoQkE7QUFEUixPQUFOLENBQTNCO0FBR0QsSzs7Ozs7OztTQUVERSxNLEdBQUEsa0JBQVM7QUFBQSx1QkFHSCxLQUFLTixLQUhGO0FBQUEsUUFFTE8sUUFGSyxnQkFFTEEsUUFGSztBQUFBLFFBRUtDLEtBRkwsZ0JBRUtBLEtBRkw7QUFBQSxRQUVZQyxVQUZaLGdCQUVZQSxVQUZaO0FBQUEsUUFFd0JDLFNBRnhCLGdCQUV3QkEsU0FGeEI7QUFJUCxXQUNFLG9CQUFDLGNBQUQ7QUFDRSxNQUFBLFFBQVEsRUFBRUgsUUFEWjtBQUVFLE1BQUEsU0FBUyxFQUFFLEtBQUtJLFNBRmxCO0FBR0UsTUFBQSxTQUFTLEVBQUVELFNBSGI7QUFJRSxNQUFBLEtBQUssRUFBRUYsS0FKVDtBQUtFLE1BQUEsVUFBVSxFQUFFQztBQUxkLE1BREY7QUFTRCxHOzs7RUFuRGtDZixLQUFLLENBQUNrQixhOztnQkFBckNkLHNCLGtCQVlrQjtBQUNwQkksRUFBQUEsUUFBUSxFQUFFRyxTQURVO0FBRXBCRixFQUFBQSxpQkFBaUIsRUFBRUUsU0FGQztBQUdwQkQsRUFBQUEsZ0JBQWdCLEVBQUUsR0FIRTtBQUlwQkksRUFBQUEsS0FBSyxFQUFFLEVBSmE7QUFLcEJDLEVBQUFBLFVBQVUsRUFBRUosU0FMUTtBQU1wQkssRUFBQUEsU0FBUyxFQUFFO0FBTlMsQzs7QUEwQ3hCLGVBQWVaLHNCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeUFtb3VudCB9IGZyb20gJ0BvcHVzY2FwaXRhL2Zvcm1hdC11dGlscyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgRm9ybWF0dGVkSW5wdXQgZnJvbSAnLi9mb3JtYXR0ZWQtaW5wdXQuY29tcG9uZW50JztcblxuY2xhc3MgRm9ybWF0dGVkSW5wdXRDdXJyZW5jeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGVjaW1hbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGhvdXNhbmRTZXBhcmF0b3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVjaW1hbFNlcGFyYXRvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSksXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVjaW1hbHM6IHVuZGVmaW5lZCxcbiAgICB0aG91c2FuZFNlcGFyYXRvcjogdW5kZWZpbmVkLFxuICAgIGRlY2ltYWxTZXBhcmF0b3I6ICcuJyxcbiAgICB2YWx1ZTogJycsXG4gICAgaW5wdXRQcm9wczogdW5kZWZpbmVkLFxuICAgIGNsYXNzTmFtZTogJycsXG4gIH07XG5cbiAgLyoqXG4gICAqIEZvcm1hdHMgdGhlIHZhbHVlIHdpdGggQG9wdXNjYXBpdGEvZm9ybWF0LXV0aWxzIGZvcm1hdEN1cnJlbmN5QW1vdW50IGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB2YWxcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBmb3JtYXR0ZXIgPSAodmFsKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY3VycmVuY3ksIGRlY2ltYWxzLCB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IG51bGwpIHJldHVybiAnJztcblxuICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeUFtb3VudCh2YWwsIHtcbiAgICAgIGN1cnJlbmN5LCBkZWNpbWFscywgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uQ2hhbmdlLCB2YWx1ZSwgaW5wdXRQcm9wcywgY2xhc3NOYW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICBmb3JtYXR0ZXI9e3RoaXMuZm9ybWF0dGVyfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBpbnB1dFByb3BzPXtpbnB1dFByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRlZElucHV0Q3VycmVuY3k7XG4iXX0=