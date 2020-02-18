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

    _defineProperty(_assertThisInitialized(_this), "unformatInput", function (val) {
      var _this$props = _this.props,
          thousandSeparator = _this$props.thousandSeparator,
          decimalSeparator = _this$props.decimalSeparator;
      if (typeof val === 'number') return val;
      var value = val;

      if (thousandSeparator) {
        value = value.replace(new RegExp("\\" + thousandSeparator, 'g'), '');
      }

      if (decimalSeparator !== '.') {
        value = value.replace(new RegExp("\\" + decimalSeparator, 'g'), '.');
      }

      return value;
    });

    _defineProperty(_assertThisInitialized(_this), "formatter", function (val, unformat) {
      if (unformat === void 0) {
        unformat = false;
      }

      var _this$props2 = _this.props,
          currency = _this$props2.currency,
          decimals = _this$props2.decimals,
          thousandSeparator = _this$props2.thousandSeparator,
          decimalSeparator = _this$props2.decimalSeparator;
      if (val === undefined || val === null || val === '') return '';
      var value = formatCurrencyAmount(unformat ? _this.unformatInput(val) : val, {
        currency: currency,
        decimals: decimals,
        thousandSeparator: thousandSeparator,
        decimalSeparator: decimalSeparator
      });
      return Number.isNaN(value) ? formatCurrencyAmount(0, {
        decimals: decimals,
        thousandSeparator: thousandSeparator,
        decimalSeparator: decimalSeparator
      }) : value;
    });

    _defineProperty(_assertThisInitialized(_this), "editFormatter", function (val) {
      var _this$props3 = _this.props,
          thousandSeparator = _this$props3.thousandSeparator,
          decimalSeparator = _this$props3.decimalSeparator;
      if (val === undefined || val === null || val === '') return ''; // - or + are not formatted

      if (val.length <= 1) return val;
      var decimalSeparatorIndex = val.lastIndexOf(decimalSeparator);
      var decimals = decimalSeparatorIndex > -1 ? val.length - decimalSeparatorIndex - 1 : 0;
      var value = formatCurrencyAmount(_this.unformatInput(val), {
        decimals: decimals,
        thousandSeparator: thousandSeparator,
        decimalSeparator: decimalSeparator
      }); // this avoids minus sign removal in the editing phase like this: 0.00 --> -0.00 --> -10.00

      if (val === "-" + value) return val;

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
    var _this$props4 = this.props,
        onBlur = _this$props4.onBlur,
        onChange = _this$props4.onChange,
        value = _this$props4.value,
        inputProps = _this$props4.inputProps,
        className = _this$props4.className;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImZvcm1hdEN1cnJlbmN5QW1vdW50IiwiRm9ybWF0dGVkSW5wdXQiLCJGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IiwidmFsIiwicHJvcHMiLCJ0aG91c2FuZFNlcGFyYXRvciIsImRlY2ltYWxTZXBhcmF0b3IiLCJ2YWx1ZSIsInJlcGxhY2UiLCJSZWdFeHAiLCJ1bmZvcm1hdCIsImN1cnJlbmN5IiwiZGVjaW1hbHMiLCJ1bmRlZmluZWQiLCJ1bmZvcm1hdElucHV0IiwiTnVtYmVyIiwiaXNOYU4iLCJsZW5ndGgiLCJkZWNpbWFsU2VwYXJhdG9ySW5kZXgiLCJsYXN0SW5kZXhPZiIsInJlbmRlciIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwiaW5wdXRQcm9wcyIsImNsYXNzTmFtZSIsImVkaXRGb3JtYXR0ZXIiLCJmb3JtYXR0ZXIiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLG9CQUFULFFBQXFDLDBCQUFyQyxDLENBRUE7O0FBQ0EsT0FBT0MsY0FBUCxNQUEyQiw2QkFBM0I7O0lBRU1DLHNCOzs7Ozs7Ozs7Ozs7OztvRUF1QlksVUFBQ0MsR0FBRCxFQUFTO0FBQUEsd0JBR25CLE1BQUtDLEtBSGM7QUFBQSxVQUVyQkMsaUJBRnFCLGVBRXJCQSxpQkFGcUI7QUFBQSxVQUVGQyxnQkFGRSxlQUVGQSxnQkFGRTtBQUt2QixVQUFJLE9BQU9ILEdBQVAsS0FBZSxRQUFuQixFQUE2QixPQUFPQSxHQUFQO0FBRTdCLFVBQUlJLEtBQUssR0FBR0osR0FBWjs7QUFDQSxVQUFJRSxpQkFBSixFQUF1QjtBQUNyQkUsUUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxJQUFJQyxN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O1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5QW1vdW50IH0gZnJvbSAnQG9wdXNjYXBpdGEvZm9ybWF0LXV0aWxzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCBGb3JtYXR0ZWRJbnB1dCBmcm9tICcuL2Zvcm1hdHRlZC1pbnB1dC5jb21wb25lbnQnO1xuXG5jbGFzcyBGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkZWNpbWFsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aG91c2FuZFNlcGFyYXRvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWNpbWFsU2VwYXJhdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRlY2ltYWxzOiB1bmRlZmluZWQsXG4gICAgdGhvdXNhbmRTZXBhcmF0b3I6IHVuZGVmaW5lZCxcbiAgICBkZWNpbWFsU2VwYXJhdG9yOiAnLicsXG4gICAgdmFsdWU6ICcnLFxuICAgIGlucHV0UHJvcHM6IHVuZGVmaW5lZCxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIG9uQmx1cjogKCkgPT4ge30sXG4gIH07XG5cbiAgdW5mb3JtYXRJbnB1dCA9ICh2YWwpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykgcmV0dXJuIHZhbDtcblxuICAgIGxldCB2YWx1ZSA9IHZhbDtcbiAgICBpZiAodGhvdXNhbmRTZXBhcmF0b3IpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKGBcXFxcJHt0aG91c2FuZFNlcGFyYXRvcn1gLCAnZycpLCAnJyk7XG4gICAgfVxuICAgIGlmIChkZWNpbWFsU2VwYXJhdG9yICE9PSAnLicpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKGBcXFxcJHtkZWNpbWFsU2VwYXJhdG9yfWAsICdnJyksICcuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdHMgdGhlIHZhbHVlIHdpdGggQG9wdXNjYXBpdGEvZm9ybWF0LXV0aWxzIGZvcm1hdEN1cnJlbmN5QW1vdW50IGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB2YWxcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBmb3JtYXR0ZXIgPSAodmFsLCB1bmZvcm1hdCA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY3VycmVuY3ksIGRlY2ltYWxzLCB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IG51bGwgfHwgdmFsID09PSAnJykgcmV0dXJuICcnO1xuXG4gICAgY29uc3QgdmFsdWUgPSBmb3JtYXRDdXJyZW5jeUFtb3VudCh1bmZvcm1hdCA/IHRoaXMudW5mb3JtYXRJbnB1dCh2YWwpIDogdmFsLCB7XG4gICAgICBjdXJyZW5jeSwgZGVjaW1hbHMsIHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE51bWJlci5pc05hTih2YWx1ZSlcbiAgICAgID8gZm9ybWF0Q3VycmVuY3lBbW91bnQoMCwgeyBkZWNpbWFscywgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IgfSlcbiAgICAgIDogdmFsdWU7XG4gIH07XG5cbiAgZWRpdEZvcm1hdHRlciA9ICh2YWwpID0+IHtcbiAgICBjb25zdCB7IHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09ICcnKSByZXR1cm4gJyc7XG4gICAgLy8gLSBvciArIGFyZSBub3QgZm9ybWF0dGVkXG4gICAgaWYgKHZhbC5sZW5ndGggPD0gMSkgcmV0dXJuIHZhbDtcblxuICAgIGNvbnN0IGRlY2ltYWxTZXBhcmF0b3JJbmRleCA9IHZhbC5sYXN0SW5kZXhPZihkZWNpbWFsU2VwYXJhdG9yKTtcbiAgICBjb25zdCBkZWNpbWFscyA9IGRlY2ltYWxTZXBhcmF0b3JJbmRleCA+IC0xXG4gICAgICA/IHZhbC5sZW5ndGggLSBkZWNpbWFsU2VwYXJhdG9ySW5kZXggLSAxXG4gICAgICA6IDA7XG5cbiAgICBjb25zdCB2YWx1ZSA9IGZvcm1hdEN1cnJlbmN5QW1vdW50KHRoaXMudW5mb3JtYXRJbnB1dCh2YWwpLCB7XG4gICAgICBkZWNpbWFscywgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IsXG4gICAgfSk7XG5cbiAgICAvLyB0aGlzIGF2b2lkcyBtaW51cyBzaWduIHJlbW92YWwgaW4gdGhlIGVkaXRpbmcgcGhhc2UgbGlrZSB0aGlzOiAwLjAwIC0tPiAtMC4wMCAtLT4gLTEwLjAwXG4gICAgaWYgKHZhbCA9PT0gYC0ke3ZhbHVlfWApIHJldHVybiB2YWw7XG5cbiAgICBpZiAoTnVtYmVyLmlzTmFOKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5QW1vdW50KDAsIHsgZGVjaW1hbHMsIHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yIH0pO1xuICAgIH1cblxuICAgIGlmIChkZWNpbWFsU2VwYXJhdG9ySW5kZXggPiAtMSAmJiBkZWNpbWFscyA9PT0gMCkgcmV0dXJuIGAke3ZhbHVlfSR7ZGVjaW1hbFNlcGFyYXRvcn1gO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uQmx1ciwgb25DaGFuZ2UsIHZhbHVlLCBpbnB1dFByb3BzLCBjbGFzc05hbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtYXR0ZWRJbnB1dFxuICAgICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICBlZGl0Rm9ybWF0dGVyPXt0aGlzLmVkaXRGb3JtYXR0ZXJ9XG4gICAgICAgIGZvcm1hdHRlcj17dGhpcy5mb3JtYXR0ZXJ9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGlucHV0UHJvcHM9e2lucHV0UHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0dGVkSW5wdXRDdXJyZW5jeTtcbiJdfQ==