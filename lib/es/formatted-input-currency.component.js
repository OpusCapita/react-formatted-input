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
      var allDecimals;
      var unformattedValue = unformat ? _this.unformatInput(val) : val; // if no currency or decimals, then the number is not rounded to the certain amount of decimals

      if (!currency && (decimals === undefined || decimals === null)) {
        var separator = '.';
        var fraction = unformattedValue.toString().split(separator)[1];
        allDecimals = fraction && fraction.length || 0;
      }

      var value = formatCurrencyAmount(unformattedValue, {
        currency: currency,
        decimals: allDecimals || decimals || 0,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImZvcm1hdEN1cnJlbmN5QW1vdW50IiwiRm9ybWF0dGVkSW5wdXQiLCJGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IiwiY2xlYXJUaW1lb3V0IiwidGltZW91dCIsInZhbCIsInByb3BzIiwidGhvdXNhbmRTZXBhcmF0b3IiLCJkZWNpbWFsU2VwYXJhdG9yIiwidmFsdWUiLCJyZXBsYWNlIiwiUmVnRXhwIiwidW5mb3JtYXQiLCJjdXJyZW5jeSIsImRlY2ltYWxzIiwidW5kZWZpbmVkIiwiYWxsRGVjaW1hbHMiLCJ1bmZvcm1hdHRlZFZhbHVlIiwidW5mb3JtYXRJbnB1dCIsInNlcGFyYXRvciIsImZyYWN0aW9uIiwidG9TdHJpbmciLCJzcGxpdCIsImxlbmd0aCIsIk51bWJlciIsImlzTmFOIiwiZGVjaW1hbFNlcGFyYXRvckluZGV4IiwibGFzdEluZGV4T2YiLCJlIiwic2VsZWN0VmFsdWVPbkNsaWNrIiwiY3VycmVudFRhcmdldCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInNldFRpbWVvdXQiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInJlbmRlciIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwiaW5wdXRQcm9wcyIsImNsYXNzTmFtZSIsImhhbmRsZU1vdXNlRG93biIsImVkaXRGb3JtYXR0ZXIiLCJmb3JtYXR0ZXIiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLG9CQUFULFFBQXFDLDBCQUFyQyxDLENBRUE7O0FBQ0EsT0FBT0MsY0FBUCxNQUEyQiw2QkFBM0I7O0lBRU1DLHNCOzs7Ozs7Ozs7Ozs7OzsyRUF5Qm1CLFlBQU07QUFDM0JDLE1BQUFBLFlBQVksQ0FBQyxNQUFLQyxPQUFOLENBQVo7QUFDRCxLOztvRUFFZSxVQUFDQyxHQUFELEVBQVM7QUFBQSx3QkFHbkIsTUFBS0MsS0FIYztBQUFBLFVBRXJCQyxpQkFGcUIsZUFFckJBLGlCQUZxQjtBQUFBLFVBRUZDLGdCQUZFLGVBRUZBLGdCQUZFO0FBS3ZCLFVBQUksT0FBT0gsR0FBUCxLQUFlLFFBQW5CLEVBQTZCLE9BQU9BLEdBQVA7QUFFN0IsVUFBSUksS0FBSyxHQUFHSixHQUFaOztBQUNBLFVBQUlFLGlCQUFKLEVBQXVCO0FBQ3JCRSxRQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ0MsT0FBTixDQUFjLElBQUlDLE1BQUosUUFBZ0JKLGlCQUFoQixFQUFxQyxHQUFyQyxDQUFkLEVBQXlELEVBQXpELENBQVI7QUFDRDs7QUFDRCxVQUFJQyxnQkFBZ0IsS0FBSyxHQUF6QixFQUE4QjtBQUM1QkMsUUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxJQUFJQyxNQUFKLFFBQWdCSCxnQkFBaEIsRUFBb0MsR0FBcEMsQ0FBZCxFQUF3RCxHQUF4RCxDQUFSO0FBQ0Q7O0FBRUQsYUFBT0MsS0FBUDtBQUNELEs7O2dFQU9XLFVBQUNKLEdBQUQsRUFBTU8sUUFBTixFQUEyQjtBQUFBLFVBQXJCQSxRQUFxQjtBQUFyQkEsUUFBQUEsUUFBcUIsR0FBVixLQUFVO0FBQUE7O0FBQUEseUJBR2pDLE1BQUtOLEtBSDRCO0FBQUEsVUFFbkNPLFFBRm1DLGdCQUVuQ0EsUUFGbUM7QUFBQSxVQUV6QkMsUUFGeUIsZ0JBRXpCQSxRQUZ5QjtBQUFBLFVBRWZQLGlCQUZlLGdCQUVmQSxpQkFGZTtBQUFBLFVBRUlDLGdCQUZKLGdCQUVJQSxnQkFGSjtBQUtyQyxVQUFJSCxHQUFHLEtBQUtVLFNBQVIsSUFBcUJWLEdBQUcsS0FBSyxJQUE3QixJQUFxQ0EsR0FBRyxLQUFLLEVBQWpELEVBQXFELE9BQU8sRUFBUDtBQUVyRCxVQUFJVyxXQUFKO0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUdMLFFBQVEsR0FBRyxNQUFLTSxhQUFMLENBQW1CYixHQUFuQixDQUFILEdBQTZCQSxHQUE5RCxDQVJxQyxDQVVyQzs7QUFDQSxVQUFJLENBQUNRLFFBQUQsS0FBY0MsUUFBUSxLQUFLQyxTQUFiLElBQTBCRCxRQUFRLEtBQUssSUFBckQsQ0FBSixFQUFnRTtBQUM5RCxZQUFNSyxTQUFTLEdBQUcsR0FBbEI7QUFDQSxZQUFNQyxRQUFRLEdBQUdILGdCQUFnQixDQUFDSSxRQUFqQixHQUE0QkMsS0FBNUIsQ0FBa0NILFNBQWxDLEVBQTZDLENBQTdDLENBQWpCO0FBQ0FILFFBQUFBLFdBQVcsR0FBSUksUUFBUSxJQUFJQSxRQUFRLENBQUNHLE1BQXRCLElBQWlDLENBQS9DO0FBQ0Q7O0FBQ0QsVUFBTWQsS0FBSyxHQUFHVCxvQkFBb0IsQ0FBQ2lCLGdCQUFELEVBQW1CO0FBQ25ESixRQUFBQSxRQUFRLEVBQVJBLFFBRG1EO0FBQ3pDQyxRQUFBQSxRQUFRLEVBQUVFLFdBQVcsSUFBSUYsUUFBZixJQUEyQixDQURJO0FBQ0RQLFFBQUFBLGlCQUFpQixFQUFqQkEsaUJBREM7QUFDa0JDLFFBQUFBLGdCQUFnQixFQUFoQkE7QUFEbEIsT0FBbkIsQ0FBbEM7QUFJQSxhQUFPZ0IsTUFBTSxDQUFDQyxLQUFQLENBQWFoQixLQUFiLElBQ0hULG9CQUFvQixDQUFDLENBQUQsRUFBSTtBQUFFYyxRQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWVAsUUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFBWjtBQUErQkMsUUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUEvQixPQUFKLENBRGpCLEdBRUhDLEtBRko7QUFHRCxLOztvRUFFZSxVQUFDSixHQUFELEVBQVM7QUFBQSx5QkFDeUIsTUFBS0MsS0FEOUI7QUFBQSxVQUNmQyxpQkFEZSxnQkFDZkEsaUJBRGU7QUFBQSxVQUNJQyxnQkFESixnQkFDSUEsZ0JBREo7QUFHdkIsVUFBSUgsR0FBRyxLQUFLVSxTQUFSLElBQXFCVixHQUFHLEtBQUssSUFBN0IsSUFBcUNBLEdBQUcsS0FBSyxFQUFqRCxFQUFxRCxPQUFPLEVBQVAsQ0FIOUIsQ0FJdkI7O0FBQ0EsVUFBSUEsR0FBRyxDQUFDa0IsTUFBSixJQUFjLENBQWxCLEVBQXFCLE9BQU9sQixHQUFQO0FBRXJCLFVBQU1xQixxQkFBcUIsR0FBR3JCLEdBQUcsQ0FBQ3NCLFdBQUosQ0FBZ0JuQixnQkFBaEIsQ0FBOUI7QUFDQSxVQUFNTSxRQUFRLEdBQUdZLHFCQUFxQixHQUFHLENBQUMsQ0FBekIsR0FDYnJCLEdBQUcsQ0FBQ2tCLE1BQUosR0FBYUcscUJBQWIsR0FBcUMsQ0FEeEIsR0FFYixDQUZKO0FBSUEsVUFBTWpCLEtBQUssR0FBR1Qsb0JBQW9CLENBQUMsTUFBS2tCLGFBQUwsQ0FBbUJiLEdBQW5CLENBQUQsRUFBMEI7QUFDMURTLFFBQUFBLFFBQVEsRUFBUkEsUUFEMEQ7QUFDaERQLFFBQUFBLGlCQUFpQixFQUFqQkEsaUJBRGdEO0FBQzdCQyxRQUFBQSxnQkFBZ0IsRUFBaEJBO0FBRDZCLE9BQTFCLENBQWxDLENBWnVCLENBZ0J2Qjs7QUFDQSxVQUFJSCxHQUFHLFdBQVNJLEtBQWhCLEVBQXlCLE9BQU9KLEdBQVA7O0FBRXpCLFVBQUltQixNQUFNLENBQUNDLEtBQVAsQ0FBYWhCLEtBQWIsQ0FBSixFQUF5QjtBQUN2QixlQUFPVCxvQkFBb0IsQ0FBQyxDQUFELEVBQUk7QUFBRWMsVUFBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlQLFVBQUFBLGlCQUFpQixFQUFqQkEsaUJBQVo7QUFBK0JDLFVBQUFBLGdCQUFnQixFQUFoQkE7QUFBL0IsU0FBSixDQUEzQjtBQUNEOztBQUVELFVBQUlrQixxQkFBcUIsR0FBRyxDQUFDLENBQXpCLElBQThCWixRQUFRLEtBQUssQ0FBL0MsRUFBa0QsWUFBVUwsS0FBVixHQUFrQkQsZ0JBQWxCO0FBRWxELGFBQU9DLEtBQVA7QUFDRCxLOztzRUFFaUIsVUFBQ21CLENBQUQsRUFBTztBQUFBLFVBQ2ZDLGtCQURlLEdBQ1EsTUFBS3ZCLEtBRGIsQ0FDZnVCLGtCQURlO0FBQUEsVUFFZkMsYUFGZSxHQUU2QkYsQ0FGN0IsQ0FFZkUsYUFGZTtBQUFBLFVBRWlCckIsS0FGakIsR0FFNkJtQixDQUY3QixDQUVBRSxhQUZBLENBRWlCckIsS0FGakI7O0FBR3ZCLFVBQUlzQixRQUFRLENBQUNDLGFBQVQsS0FBMkJGLGFBQTNCLElBQ0NELGtCQURELElBRUNwQixLQUFLLEtBQUtNLFNBRlgsSUFHQ04sS0FBSyxLQUFLLElBSGYsRUFHcUI7QUFDbkIsY0FBS0wsT0FBTCxHQUFlNkIsVUFBVSxDQUFDLFlBQU07QUFDOUJILFVBQUFBLGFBQWEsQ0FBQ0ksaUJBQWQsQ0FBZ0MsQ0FBaEMsRUFBbUN6QixLQUFLLENBQUNjLE1BQXpDO0FBQ0QsU0FGd0IsRUFFdEIsRUFGc0IsQ0FBekI7QUFHRDtBQUNGLEs7Ozs7Ozs7U0FFRFksTSxHQUFBLGtCQUFTO0FBQUEsdUJBR0gsS0FBSzdCLEtBSEY7QUFBQSxRQUVMOEIsTUFGSyxnQkFFTEEsTUFGSztBQUFBLFFBRUdDLFFBRkgsZ0JBRUdBLFFBRkg7QUFBQSxRQUVhNUIsS0FGYixnQkFFYUEsS0FGYjtBQUFBLFFBRW9CNkIsVUFGcEIsZ0JBRW9CQSxVQUZwQjtBQUFBLFFBRWdDQyxTQUZoQyxnQkFFZ0NBLFNBRmhDO0FBSVAsV0FDRSxvQkFBQyxjQUFEO0FBQ0UsTUFBQSxNQUFNLEVBQUVILE1BRFY7QUFFRSxNQUFBLFFBQVEsRUFBRUMsUUFGWjtBQUdFLE1BQUEsV0FBVyxFQUFFLEtBQUtHLGVBSHBCO0FBSUUsTUFBQSxhQUFhLEVBQUUsS0FBS0MsYUFKdEI7QUFLRSxNQUFBLFNBQVMsRUFBRSxLQUFLQyxTQUxsQjtBQU1FLE1BQUEsU0FBUyxFQUFFSCxTQU5iO0FBT0UsTUFBQSxLQUFLLEVBQUU5QixLQVBUO0FBUUUsTUFBQSxVQUFVLEVBQUU2QjtBQVJkLE1BREY7QUFZRCxHOzs7RUF0SWtDeEMsS0FBSyxDQUFDNkMsYTs7Z0JBQXJDekMsc0Isa0JBY2tCO0FBQ3BCWSxFQUFBQSxRQUFRLEVBQUVDLFNBRFU7QUFFcEJSLEVBQUFBLGlCQUFpQixFQUFFUSxTQUZDO0FBR3BCUCxFQUFBQSxnQkFBZ0IsRUFBRSxHQUhFO0FBSXBCQyxFQUFBQSxLQUFLLEVBQUUsRUFKYTtBQUtwQjZCLEVBQUFBLFVBQVUsRUFBRXZCLFNBTFE7QUFNcEJ3QixFQUFBQSxTQUFTLEVBQUUsRUFOUztBQU9wQkgsRUFBQUEsTUFBTSxFQUFFLGtCQUFNLENBQUUsQ0FQSTtBQVFwQlAsRUFBQUEsa0JBQWtCLEVBQUU7QUFSQSxDOztBQTJIeEIsZUFBZTNCLHNCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeUFtb3VudCB9IGZyb20gJ0BvcHVzY2FwaXRhL2Zvcm1hdC11dGlscyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgRm9ybWF0dGVkSW5wdXQgZnJvbSAnLi9mb3JtYXR0ZWQtaW5wdXQuY29tcG9uZW50JztcblxuY2xhc3MgRm9ybWF0dGVkSW5wdXRDdXJyZW5jeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGVjaW1hbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGhvdXNhbmRTZXBhcmF0b3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVjaW1hbFNlcGFyYXRvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSksXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2VsZWN0VmFsdWVPbkNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRlY2ltYWxzOiB1bmRlZmluZWQsXG4gICAgdGhvdXNhbmRTZXBhcmF0b3I6IHVuZGVmaW5lZCxcbiAgICBkZWNpbWFsU2VwYXJhdG9yOiAnLicsXG4gICAgdmFsdWU6ICcnLFxuICAgIGlucHV0UHJvcHM6IHVuZGVmaW5lZCxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIG9uQmx1cjogKCkgPT4ge30sXG4gICAgc2VsZWN0VmFsdWVPbkNsaWNrOiBmYWxzZSxcbiAgfTtcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgfVxuXG4gIHVuZm9ybWF0SW5wdXQgPSAodmFsKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHJldHVybiB2YWw7XG5cbiAgICBsZXQgdmFsdWUgPSB2YWw7XG4gICAgaWYgKHRob3VzYW5kU2VwYXJhdG9yKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXCR7dGhvdXNhbmRTZXBhcmF0b3J9YCwgJ2cnKSwgJycpO1xuICAgIH1cbiAgICBpZiAoZGVjaW1hbFNlcGFyYXRvciAhPT0gJy4nKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXCR7ZGVjaW1hbFNlcGFyYXRvcn1gLCAnZycpLCAnLicpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXRzIHRoZSB2YWx1ZSB3aXRoIEBvcHVzY2FwaXRhL2Zvcm1hdC11dGlscyBmb3JtYXRDdXJyZW5jeUFtb3VudCBmdW5jdGlvblxuICAgKiBAcGFyYW0gdmFsXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZm9ybWF0dGVyID0gKHZhbCwgdW5mb3JtYXQgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGN1cnJlbmN5LCBkZWNpbWFscywgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSBudWxsIHx8IHZhbCA9PT0gJycpIHJldHVybiAnJztcblxuICAgIGxldCBhbGxEZWNpbWFscztcbiAgICBjb25zdCB1bmZvcm1hdHRlZFZhbHVlID0gdW5mb3JtYXQgPyB0aGlzLnVuZm9ybWF0SW5wdXQodmFsKSA6IHZhbDtcblxuICAgIC8vIGlmIG5vIGN1cnJlbmN5IG9yIGRlY2ltYWxzLCB0aGVuIHRoZSBudW1iZXIgaXMgbm90IHJvdW5kZWQgdG8gdGhlIGNlcnRhaW4gYW1vdW50IG9mIGRlY2ltYWxzXG4gICAgaWYgKCFjdXJyZW5jeSAmJiAoZGVjaW1hbHMgPT09IHVuZGVmaW5lZCB8fCBkZWNpbWFscyA9PT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IHNlcGFyYXRvciA9ICcuJztcbiAgICAgIGNvbnN0IGZyYWN0aW9uID0gdW5mb3JtYXR0ZWRWYWx1ZS50b1N0cmluZygpLnNwbGl0KHNlcGFyYXRvcilbMV07XG4gICAgICBhbGxEZWNpbWFscyA9IChmcmFjdGlvbiAmJiBmcmFjdGlvbi5sZW5ndGgpIHx8IDA7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gZm9ybWF0Q3VycmVuY3lBbW91bnQodW5mb3JtYXR0ZWRWYWx1ZSwge1xuICAgICAgY3VycmVuY3ksIGRlY2ltYWxzOiBhbGxEZWNpbWFscyB8fCBkZWNpbWFscyB8fCAwLCB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvcixcbiAgICB9KTtcblxuICAgIHJldHVybiBOdW1iZXIuaXNOYU4odmFsdWUpXG4gICAgICA/IGZvcm1hdEN1cnJlbmN5QW1vdW50KDAsIHsgZGVjaW1hbHMsIHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yIH0pXG4gICAgICA6IHZhbHVlO1xuICB9O1xuXG4gIGVkaXRGb3JtYXR0ZXIgPSAodmFsKSA9PiB7XG4gICAgY29uc3QgeyB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IG51bGwgfHwgdmFsID09PSAnJykgcmV0dXJuICcnO1xuICAgIC8vIC0gb3IgKyBhcmUgbm90IGZvcm1hdHRlZFxuICAgIGlmICh2YWwubGVuZ3RoIDw9IDEpIHJldHVybiB2YWw7XG5cbiAgICBjb25zdCBkZWNpbWFsU2VwYXJhdG9ySW5kZXggPSB2YWwubGFzdEluZGV4T2YoZGVjaW1hbFNlcGFyYXRvcik7XG4gICAgY29uc3QgZGVjaW1hbHMgPSBkZWNpbWFsU2VwYXJhdG9ySW5kZXggPiAtMVxuICAgICAgPyB2YWwubGVuZ3RoIC0gZGVjaW1hbFNlcGFyYXRvckluZGV4IC0gMVxuICAgICAgOiAwO1xuXG4gICAgY29uc3QgdmFsdWUgPSBmb3JtYXRDdXJyZW5jeUFtb3VudCh0aGlzLnVuZm9ybWF0SW5wdXQodmFsKSwge1xuICAgICAgZGVjaW1hbHMsIHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yLFxuICAgIH0pO1xuXG4gICAgLy8gdGhpcyBhdm9pZHMgbWludXMgc2lnbiByZW1vdmFsIGluIHRoZSBlZGl0aW5nIHBoYXNlIGxpa2UgdGhpczogMC4wMCAtLT4gLTAuMDAgLS0+IC0xMC4wMFxuICAgIGlmICh2YWwgPT09IGAtJHt2YWx1ZX1gKSByZXR1cm4gdmFsO1xuXG4gICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeUFtb3VudCgwLCB7IGRlY2ltYWxzLCB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvciB9KTtcbiAgICB9XG5cbiAgICBpZiAoZGVjaW1hbFNlcGFyYXRvckluZGV4ID4gLTEgJiYgZGVjaW1hbHMgPT09IDApIHJldHVybiBgJHt2YWx1ZX0ke2RlY2ltYWxTZXBhcmF0b3J9YDtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGhhbmRsZU1vdXNlRG93biA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RWYWx1ZU9uQ2xpY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0LCBjdXJyZW50VGFyZ2V0OiB7IHZhbHVlIH0gfSA9IGU7XG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGN1cnJlbnRUYXJnZXRcbiAgICAgICYmIHNlbGVjdFZhbHVlT25DbGlja1xuICAgICAgJiYgdmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjdXJyZW50VGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKDAsIHZhbHVlLmxlbmd0aCk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uQmx1ciwgb25DaGFuZ2UsIHZhbHVlLCBpbnB1dFByb3BzLCBjbGFzc05hbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtYXR0ZWRJbnB1dFxuICAgICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVNb3VzZURvd259XG4gICAgICAgIGVkaXRGb3JtYXR0ZXI9e3RoaXMuZWRpdEZvcm1hdHRlcn1cbiAgICAgICAgZm9ybWF0dGVyPXt0aGlzLmZvcm1hdHRlcn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgaW5wdXRQcm9wcz17aW5wdXRQcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5O1xuIl19