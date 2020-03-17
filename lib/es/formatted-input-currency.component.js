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

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      clearTimeout(_this.timeout);
    });

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

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (e) {
      var selectValueOnClick = _this.props.selectValueOnClick;
      var currentTarget = e.currentTarget,
          value = e.currentTarget.value;

      if (document.activeElement !== currentTarget && selectValueOnClick && value !== undefined && value !== null) {
        _this.timeout = setTimeout(function () {
          currentTarget.setSelectionRange(0, value.length);
        }, 10);
      }
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
      onMouseDown: this.handleMouseDown,
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
  onBlur: function onBlur() {},
  selectValueOnClick: false
});

export default FormattedInputCurrency;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImZvcm1hdEN1cnJlbmN5QW1vdW50IiwiRm9ybWF0dGVkSW5wdXQiLCJGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IiwiY2xlYXJUaW1lb3V0IiwidGltZW91dCIsInZhbCIsInByb3BzIiwidGhvdXNhbmRTZXBhcmF0b3IiLCJkZWNpbWFsU2VwYXJhdG9yIiwidmFsdWUiLCJyZXBsYWNlIiwiUmVnRXhwIiwidW5mb3JtYXQiLCJjdXJyZW5jeSIsImRlY2ltYWxzIiwidW5kZWZpbmVkIiwidW5mb3JtYXRJbnB1dCIsIk51bWJlciIsImlzTmFOIiwibGVuZ3RoIiwiZGVjaW1hbFNlcGFyYXRvckluZGV4IiwibGFzdEluZGV4T2YiLCJlIiwic2VsZWN0VmFsdWVPbkNsaWNrIiwiY3VycmVudFRhcmdldCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInNldFRpbWVvdXQiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInJlbmRlciIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwiaW5wdXRQcm9wcyIsImNsYXNzTmFtZSIsImhhbmRsZU1vdXNlRG93biIsImVkaXRGb3JtYXR0ZXIiLCJmb3JtYXR0ZXIiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLG9CQUFULFFBQXFDLDBCQUFyQyxDLENBRUE7O0FBQ0EsT0FBT0MsY0FBUCxNQUEyQiw2QkFBM0I7O0lBRU1DLHNCOzs7Ozs7Ozs7Ozs7OzsyRUF5Qm1CLFlBQU07QUFDM0JDLE1BQUFBLFlBQVksQ0FBQyxNQUFLQyxPQUFOLENBQVo7QUFDRCxLOztvRUFFZSxVQUFDQyxHQUFELEVBQVM7QUFBQSx3QkFHbkIsTUFBS0MsS0FIYztBQUFBLFVBRXJCQyxp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QUFBQSxRQUVvQnVCLFVBRnBCLGdCQUVvQkEsVUFGcEI7QUFBQSxRQUVnQ0MsU0FGaEMsZ0JBRWdDQSxTQUZoQztBQUlQLFdBQ0Usb0JBQUMsY0FBRDtBQUNFLE1BQUEsTUFBTSxFQUFFSCxNQURWO0FBRUUsTUFBQSxRQUFRLEVBQUVDLFFBRlo7QUFHRSxNQUFBLFdBQVcsRUFBRSxLQUFLRyxlQUhwQjtBQUlFLE1BQUEsYUFBYSxFQUFFLEtBQUtDLGFBSnRCO0FBS0UsTUFBQSxTQUFTLEVBQUUsS0FBS0MsU0FMbEI7QUFNRSxNQUFBLFNBQVMsRUFBRUgsU0FOYjtBQU9FLE1BQUEsS0FBSyxFQUFFeEIsS0FQVDtBQVFFLE1BQUEsVUFBVSxFQUFFdUI7QUFSZCxNQURGO0FBWUQsRzs7O0VBN0hrQ2xDLEtBQUssQ0FBQ3VDLGE7O2dCQUFyQ25DLHNCLGtCQWNrQjtBQUNwQlksRUFBQUEsUUFBUSxFQUFFQyxTQURVO0FBRXBCUixFQUFBQSxpQkFBaUIsRUFBRVEsU0FGQztBQUdwQlAsRUFBQUEsZ0JBQWdCLEVBQUUsR0FIRTtBQUlwQkMsRUFBQUEsS0FBSyxFQUFFLEVBSmE7QUFLcEJ1QixFQUFBQSxVQUFVLEVBQUVqQixTQUxRO0FBTXBCa0IsRUFBQUEsU0FBUyxFQUFFLEVBTlM7QUFPcEJILEVBQUFBLE1BQU0sRUFBRSxrQkFBTSxDQUFFLENBUEk7QUFRcEJQLEVBQUFBLGtCQUFrQixFQUFFO0FBUkEsQzs7QUFrSHhCLGVBQWVyQixzQkFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3lBbW91bnQgfSBmcm9tICdAb3B1c2NhcGl0YS9mb3JtYXQtdXRpbHMnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IEZvcm1hdHRlZElucHV0IGZyb20gJy4vZm9ybWF0dGVkLWlucHV0LmNvbXBvbmVudCc7XG5cbmNsYXNzIEZvcm1hdHRlZElucHV0Q3VycmVuY3kgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRlY2ltYWxzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRob3VzYW5kU2VwYXJhdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlY2ltYWxTZXBhcmF0b3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNlbGVjdFZhbHVlT25DbGljazogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZWNpbWFsczogdW5kZWZpbmVkLFxuICAgIHRob3VzYW5kU2VwYXJhdG9yOiB1bmRlZmluZWQsXG4gICAgZGVjaW1hbFNlcGFyYXRvcjogJy4nLFxuICAgIHZhbHVlOiAnJyxcbiAgICBpbnB1dFByb3BzOiB1bmRlZmluZWQsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBvbkJsdXI6ICgpID0+IHt9LFxuICAgIHNlbGVjdFZhbHVlT25DbGljazogZmFsc2UsXG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gIH1cblxuICB1bmZvcm1hdElucHV0ID0gKHZhbCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSByZXR1cm4gdmFsO1xuXG4gICAgbGV0IHZhbHVlID0gdmFsO1xuICAgIGlmICh0aG91c2FuZFNlcGFyYXRvcikge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYFxcXFwke3Rob3VzYW5kU2VwYXJhdG9yfWAsICdnJyksICcnKTtcbiAgICB9XG4gICAgaWYgKGRlY2ltYWxTZXBhcmF0b3IgIT09ICcuJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYFxcXFwke2RlY2ltYWxTZXBhcmF0b3J9YCwgJ2cnKSwgJy4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0cyB0aGUgdmFsdWUgd2l0aCBAb3B1c2NhcGl0YS9mb3JtYXQtdXRpbHMgZm9ybWF0Q3VycmVuY3lBbW91bnQgZnVuY3Rpb25cbiAgICogQHBhcmFtIHZhbFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGZvcm1hdHRlciA9ICh2YWwsIHVuZm9ybWF0ID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW5jeSwgZGVjaW1hbHMsIHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09ICcnKSByZXR1cm4gJyc7XG5cbiAgICBjb25zdCB2YWx1ZSA9IGZvcm1hdEN1cnJlbmN5QW1vdW50KHVuZm9ybWF0ID8gdGhpcy51bmZvcm1hdElucHV0KHZhbCkgOiB2YWwsIHtcbiAgICAgIGN1cnJlbmN5LCBkZWNpbWFscywgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gTnVtYmVyLmlzTmFOKHZhbHVlKVxuICAgICAgPyBmb3JtYXRDdXJyZW5jeUFtb3VudCgwLCB7IGRlY2ltYWxzLCB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvciB9KVxuICAgICAgOiB2YWx1ZTtcbiAgfTtcblxuICBlZGl0Rm9ybWF0dGVyID0gKHZhbCkgPT4ge1xuICAgIGNvbnN0IHsgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSBudWxsIHx8IHZhbCA9PT0gJycpIHJldHVybiAnJztcbiAgICAvLyAtIG9yICsgYXJlIG5vdCBmb3JtYXR0ZWRcbiAgICBpZiAodmFsLmxlbmd0aCA8PSAxKSByZXR1cm4gdmFsO1xuXG4gICAgY29uc3QgZGVjaW1hbFNlcGFyYXRvckluZGV4ID0gdmFsLmxhc3RJbmRleE9mKGRlY2ltYWxTZXBhcmF0b3IpO1xuICAgIGNvbnN0IGRlY2ltYWxzID0gZGVjaW1hbFNlcGFyYXRvckluZGV4ID4gLTFcbiAgICAgID8gdmFsLmxlbmd0aCAtIGRlY2ltYWxTZXBhcmF0b3JJbmRleCAtIDFcbiAgICAgIDogMDtcblxuICAgIGNvbnN0IHZhbHVlID0gZm9ybWF0Q3VycmVuY3lBbW91bnQodGhpcy51bmZvcm1hdElucHV0KHZhbCksIHtcbiAgICAgIGRlY2ltYWxzLCB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvcixcbiAgICB9KTtcblxuICAgIC8vIHRoaXMgYXZvaWRzIG1pbnVzIHNpZ24gcmVtb3ZhbCBpbiB0aGUgZWRpdGluZyBwaGFzZSBsaWtlIHRoaXM6IDAuMDAgLS0+IC0wLjAwIC0tPiAtMTAuMDBcbiAgICBpZiAodmFsID09PSBgLSR7dmFsdWV9YCkgcmV0dXJuIHZhbDtcblxuICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3lBbW91bnQoMCwgeyBkZWNpbWFscywgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IgfSk7XG4gICAgfVxuXG4gICAgaWYgKGRlY2ltYWxTZXBhcmF0b3JJbmRleCA+IC0xICYmIGRlY2ltYWxzID09PSAwKSByZXR1cm4gYCR7dmFsdWV9JHtkZWNpbWFsU2VwYXJhdG9yfWA7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBoYW5kbGVNb3VzZURvd24gPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0VmFsdWVPbkNsaWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY3VycmVudFRhcmdldCwgY3VycmVudFRhcmdldDogeyB2YWx1ZSB9IH0gPSBlO1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBjdXJyZW50VGFyZ2V0XG4gICAgICAmJiBzZWxlY3RWYWx1ZU9uQ2xpY2tcbiAgICAgICYmIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY3VycmVudFRhcmdldC5zZXRTZWxlY3Rpb25SYW5nZSgwLCB2YWx1ZS5sZW5ndGgpO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBvbkJsdXIsIG9uQ2hhbmdlLCB2YWx1ZSwgaW5wdXRQcm9wcywgY2xhc3NOYW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlTW91c2VEb3dufVxuICAgICAgICBlZGl0Rm9ybWF0dGVyPXt0aGlzLmVkaXRGb3JtYXR0ZXJ9XG4gICAgICAgIGZvcm1hdHRlcj17dGhpcy5mb3JtYXR0ZXJ9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGlucHV0UHJvcHM9e2lucHV0UHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0dGVkSW5wdXRDdXJyZW5jeTtcbiJdfQ==