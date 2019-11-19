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
      if (val === undefined || val === null || val === '') return '';
      var value = formatCurrencyAmount(val, {
        currency: currency,
        decimals: decimals,
        thousandSeparator: thousandSeparator,
        decimalSeparator: decimalSeparator
      });
      return Number.isNaN(value) ? val : value;
    });

    _defineProperty(_assertThisInitialized(_this), "editFormatter", function (val) {
      var _this$props2 = _this.props,
          thousandSeparator = _this$props2.thousandSeparator,
          decimalSeparator = _this$props2.decimalSeparator;
      if (val === undefined || val === null || val === '') return ''; // - or + are not formatted

      if (val.length <= 1) return val;
      var decimalSeparatorIndex = val.lastIndexOf(decimalSeparator);
      var decimals = decimalSeparatorIndex > -1 ? val.length - decimalSeparatorIndex - 1 : 0;
      var value = formatCurrencyAmount(val, {
        decimals: decimals,
        thousandSeparator: thousandSeparator,
        decimalSeparator: decimalSeparator
      });

      if (Number.isNaN(value)) {
        return formatCurrencyAmount(0, {
          decimals: decimals,
          thousandSeparator: thousandSeparator,
          decimalSeparator: decimalSeparator
        });
      }

      if (decimalSeparatorIndex > -1 && decimals === 0) return "" + value + decimalSeparator;
      return value;
    });

    return _this;
  }

  var _proto = FormattedInputCurrency.prototype;

  _proto.render = function render() {
    var _this$props3 = this.props,
        onBlur = _this$props3.onBlur,
        onChange = _this$props3.onChange,
        value = _this$props3.value,
        inputProps = _this$props3.inputProps,
        className = _this$props3.className;
    return React.createElement(FormattedInput, {
      onBlur: onBlur,
      onChange: onChange,
      editFormatter: this.editFormatter,
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
  className: '',
  onBlur: function onBlur() {}
});

export default FormattedInputCurrency;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImZvcm1hdEN1cnJlbmN5QW1vdW50IiwiRm9ybWF0dGVkSW5wdXQiLCJGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IiwidmFsIiwicHJvcHMiLCJjdXJyZW5jeSIsImRlY2ltYWxzIiwidGhvdXNhbmRTZXBhcmF0b3IiLCJkZWNpbWFsU2VwYXJhdG9yIiwidW5kZWZpbmVkIiwidmFsdWUiLCJOdW1iZXIiLCJpc05hTiIsImxlbmd0aCIsImRlY2ltYWxTZXBhcmF0b3JJbmRleCIsImxhc3RJbmRleE9mIiwicmVuZGVyIiwib25CbHVyIiwib25DaGFuZ2UiLCJpbnB1dFByb3BzIiwiY2xhc3NOYW1lIiwiZWRpdEZvcm1hdHRlciIsImZvcm1hdHRlciIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0Msb0JBQVQsUUFBcUMsMEJBQXJDLEMsQ0FFQTs7QUFDQSxPQUFPQyxjQUFQLE1BQTJCLDZCQUEzQjs7SUFFTUMsc0I7Ozs7Ozs7Ozs7Ozs7O2dFQTRCUSxVQUFDQyxHQUFELEVBQVM7QUFBQSx3QkFHZixNQUFLQyxLQUhVO0FBQUEsVUFFakJDLFFBRmlCLGVBRWpCQSxRQUZpQjtBQUFBLFVBRVBDLFFBRk8sZUFFUEEsUUFGTztBQUFBLFVBRUdDLGlCQUZILGVBRUdBLGlCQUZIO0FBQUEsVUFFc0JDLGdCQUZ0QixlQUVzQkEsZ0JBRnRCO0FBS25CLFVBQUlMLEdBQUcsS0FBS00sU0FBUixJQUFxQk4sR0FBRyxLQUFLLElBQTdCLElBQXFDQSxHQUFHLEtBQUssRUFBakQsRUFBcUQsT0FBTyxFQUFQO0FBRXJELFVBQU1PLEtBQUssR0FBR1Ysb0JBQW9CLENBQUNHLEdBQUQsRUFBTTtBQUN0Q0Us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dCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5QW1vdW50IH0gZnJvbSAnQG9wdXNjYXBpdGEvZm9ybWF0LXV0aWxzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCBGb3JtYXR0ZWRJbnB1dCBmcm9tICcuL2Zvcm1hdHRlZC1pbnB1dC5jb21wb25lbnQnO1xuXG5jbGFzcyBGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkZWNpbWFsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aG91c2FuZFNlcGFyYXRvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWNpbWFsU2VwYXJhdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRlY2ltYWxzOiB1bmRlZmluZWQsXG4gICAgdGhvdXNhbmRTZXBhcmF0b3I6IHVuZGVmaW5lZCxcbiAgICBkZWNpbWFsU2VwYXJhdG9yOiAnLicsXG4gICAgdmFsdWU6ICcnLFxuICAgIGlucHV0UHJvcHM6IHVuZGVmaW5lZCxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIG9uQmx1cjogKCkgPT4ge30sXG4gIH07XG5cbiAgLyoqXG4gICAqIEZvcm1hdHMgdGhlIHZhbHVlIHdpdGggQG9wdXNjYXBpdGEvZm9ybWF0LXV0aWxzIGZvcm1hdEN1cnJlbmN5QW1vdW50IGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB2YWxcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBmb3JtYXR0ZXIgPSAodmFsKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY3VycmVuY3ksIGRlY2ltYWxzLCB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IG51bGwgfHwgdmFsID09PSAnJykgcmV0dXJuICcnO1xuXG4gICAgY29uc3QgdmFsdWUgPSBmb3JtYXRDdXJyZW5jeUFtb3VudCh2YWwsIHtcbiAgICAgIGN1cnJlbmN5LCBkZWNpbWFscywgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IsXG4gICAgfSk7XG4gICAgcmV0dXJuIE51bWJlci5pc05hTih2YWx1ZSkgPyB2YWwgOiB2YWx1ZTtcbiAgfTtcblxuICBlZGl0Rm9ybWF0dGVyID0gKHZhbCkgPT4ge1xuICAgIGNvbnN0IHsgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSBudWxsIHx8IHZhbCA9PT0gJycpIHJldHVybiAnJztcbiAgICAvLyAtIG9yICsgYXJlIG5vdCBmb3JtYXR0ZWRcbiAgICBpZiAodmFsLmxlbmd0aCA8PSAxKSByZXR1cm4gdmFsO1xuXG4gICAgY29uc3QgZGVjaW1hbFNlcGFyYXRvckluZGV4ID0gdmFsLmxhc3RJbmRleE9mKGRlY2ltYWxTZXBhcmF0b3IpO1xuICAgIGNvbnN0IGRlY2ltYWxzID0gZGVjaW1hbFNlcGFyYXRvckluZGV4ID4gLTFcbiAgICAgID8gdmFsLmxlbmd0aCAtIGRlY2ltYWxTZXBhcmF0b3JJbmRleCAtIDFcbiAgICAgIDogMDtcblxuICAgIGNvbnN0IHZhbHVlID0gZm9ybWF0Q3VycmVuY3lBbW91bnQodmFsLCB7IGRlY2ltYWxzLCB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvciB9KTtcblxuICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3lBbW91bnQoMCwgeyBkZWNpbWFscywgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IgfSk7XG4gICAgfVxuXG4gICAgaWYgKGRlY2ltYWxTZXBhcmF0b3JJbmRleCA+IC0xICYmIGRlY2ltYWxzID09PSAwKSByZXR1cm4gYCR7dmFsdWV9JHtkZWNpbWFsU2VwYXJhdG9yfWA7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb25CbHVyLCBvbkNoYW5nZSwgdmFsdWUsIGlucHV0UHJvcHMsIGNsYXNzTmFtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1hdHRlZElucHV0XG4gICAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIGVkaXRGb3JtYXR0ZXI9e3RoaXMuZWRpdEZvcm1hdHRlcn1cbiAgICAgICAgZm9ybWF0dGVyPXt0aGlzLmZvcm1hdHRlcn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgaW5wdXRQcm9wcz17aW5wdXRQcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5O1xuIl19