"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formatUtils = require("@opuscapita/format-utils");

var _formattedInput = _interopRequireDefault(require("./formatted-input.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      return (0, _formatUtils.formatCurrencyAmount)(val, {
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
    return _react.default.createElement(_formattedInput.default, _extends({
      onChange: onChange,
      formatter: this.formatter,
      className: className,
      value: value
    }, inputProps));
  };

  return FormattedInputCurrency;
}(_react.default.PureComponent);

_defineProperty(FormattedInputCurrency, "defaultProps", {
  decimals: undefined,
  thousandSeparator: undefined,
  decimalSeparator: '.',
  value: '',
  inputProps: undefined,
  className: undefined
});

var _default = FormattedInputCurrency;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IiwidmFsIiwicHJvcHMiLCJjdXJyZW5jeSIsImRlY2ltYWxzIiwidGhvdXNhbmRTZXBhcmF0b3IiLCJkZWNpbWFsU2VwYXJhdG9yIiwicmVuZGVyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImlucHV0UHJvcHMiLCJjbGFzc05hbWUiLCJmb3JtYXR0ZXIiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7OztJQUVNQSxzQjs7Ozs7Ozs7Ozs7Ozs7Z0VBMEJRLFVBQUNDLEdBQUQsRUFBUztBQUFBLHdCQUdmLE1BQUtDLEtBSFU7QUFBQSxVQUVqQkMsUUFGaUIsZUFFakJBLFFBRmlCO0FBQUEsVUFFUEMsUUFGTyxlQUVQQSxRQUZPO0FBQUEsVUFFR0MsaUJBRkgsZUFFR0EsaUJBRkg7QUFBQSxVQUVzQkMsZ0JBRnRCLGVBRXNCQSxnQkFGdEI7QUFLbkIsYUFBTyx1Q0FBcUJMLEdBQXJCLEVBQTBCO0FBQy9CRSxRQUFBQSxRQUFRLEVBQVJBLFFBRCtCO0FBQ3JCQyxRQUFBQSxRQUFRLEVBQVJBLFFBRHFCO0FBQ1hDLFFBQUFBLGlCQUFpQixFQUFqQkEsaUJBRFc7QUFDUUMsUUFBQUEsZ0JBQWdCLEVBQWhCQTtBQURSLE9BQTFCLENBQVA7QUFHRCxLOzs7Ozs7O1NBRURDLE0sR0FBQSxrQkFBUztBQUFBLHVCQUdILEtBQUtMLEtBSEY7QUFBQSxRQUVMTSxRQUZLLGdCQUVMQSxRQUZLO0FBQUEsUUFFS0MsS0FGTCxnQkFFS0EsS0FGTDtBQUFBLFFBRVlDLFVBRlosZ0JBRVlBLFVBRlo7QUFBQSxRQUV3QkMsU0FGeEIsZ0JBRXdCQSxTQUZ4QjtBQUlQLFdBQ0UsNkJBQUMsdUJBQUQ7QUFDRSxNQUFBLFFBQVEsRUFBRUgsUUFEWjtBQUVFLE1BQUEsU0FBUyxFQUFFLEtBQUtJLFNBRmxCO0FBR0UsTUFBQSxTQUFTLEVBQUVELFNBSGI7QUFJRSxNQUFBLEtBQUssRUFBRUY7QUFKVCxPQUtNQyxVQUxOLEVBREY7QUFTRCxHOzs7RUFqRGtDRyxlQUFNQyxhOztnQkFBckNkLHNCLGtCQVlrQjtBQUNwQkksRUFBQUEsUUFBUSxFQUFFVyxTQURVO0FBRXBCVixFQUFBQSxpQkFBaUIsRUFBRVUsU0FGQztBQUdwQlQsRUFBQUEsZ0JBQWdCLEVBQUUsR0FIRTtBQUlwQkcsRUFBQUEsS0FBSyxFQUFFLEVBSmE7QUFLcEJDLEVBQUFBLFVBQVUsRUFBRUssU0FMUTtBQU1wQkosRUFBQUEsU0FBUyxFQUFFSTtBQU5TLEM7O2VBd0NUZixzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3lBbW91bnQgfSBmcm9tICdAb3B1c2NhcGl0YS9mb3JtYXQtdXRpbHMnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IEZvcm1hdHRlZElucHV0IGZyb20gJy4vZm9ybWF0dGVkLWlucHV0LmNvbXBvbmVudCc7XG5cbmNsYXNzIEZvcm1hdHRlZElucHV0Q3VycmVuY3kgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRlY2ltYWxzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRob3VzYW5kU2VwYXJhdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlY2ltYWxTZXBhcmF0b3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRlY2ltYWxzOiB1bmRlZmluZWQsXG4gICAgdGhvdXNhbmRTZXBhcmF0b3I6IHVuZGVmaW5lZCxcbiAgICBkZWNpbWFsU2VwYXJhdG9yOiAnLicsXG4gICAgdmFsdWU6ICcnLFxuICAgIGlucHV0UHJvcHM6IHVuZGVmaW5lZCxcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgfTtcblxuICAvKipcbiAgICogRm9ybWF0cyB0aGUgdmFsdWUgd2l0aCBAb3B1c2NhcGl0YS9mb3JtYXQtdXRpbHMgZm9ybWF0Q3VycmVuY3lBbW91bnQgZnVuY3Rpb25cbiAgICogQHBhcmFtIHZhbFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGZvcm1hdHRlciA9ICh2YWwpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW5jeSwgZGVjaW1hbHMsIHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5QW1vdW50KHZhbCwge1xuICAgICAgY3VycmVuY3ksIGRlY2ltYWxzLCB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvcixcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb25DaGFuZ2UsIHZhbHVlLCBpbnB1dFByb3BzLCBjbGFzc05hbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtYXR0ZWRJbnB1dFxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIGZvcm1hdHRlcj17dGhpcy5mb3JtYXR0ZXJ9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRlZElucHV0Q3VycmVuY3k7XG4iXX0=