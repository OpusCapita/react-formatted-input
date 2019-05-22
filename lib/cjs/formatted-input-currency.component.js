"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formatUtils = require("@opuscapita/format-utils");

var _formattedInput = _interopRequireDefault(require("./formatted-input.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      if (val === undefined || val === null) return '';
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
    return _react.default.createElement(_formattedInput.default, {
      onChange: onChange,
      formatter: this.formatter,
      className: className,
      value: value,
      inputProps: inputProps
    });
  };

  return FormattedInputCurrency;
}(_react.default.PureComponent);

_defineProperty(FormattedInputCurrency, "defaultProps", {
  decimals: undefined,
  thousandSeparator: undefined,
  decimalSeparator: '.',
  value: '',
  inputProps: undefined,
  className: ''
});

var _default = FormattedInputCurrency;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IiwidmFsIiwicHJvcHMiLCJjdXJyZW5jeSIsImRlY2ltYWxzIiwidGhvdXNhbmRTZXBhcmF0b3IiLCJkZWNpbWFsU2VwYXJhdG9yIiwidW5kZWZpbmVkIiwicmVuZGVyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImlucHV0UHJvcHMiLCJjbGFzc05hbWUiLCJmb3JtYXR0ZXIiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7SUFFTUEsc0I7Ozs7Ozs7Ozs7Ozs7O2dFQTBCUSxVQUFDQyxHQUFELEVBQVM7QUFBQSx3QkFHZixNQUFLQyxLQUhVO0FBQUEsVUFFakJDLFFBRmlCLGVBRWpCQSxRQUZpQjtBQUFBLFVBRVBDLFFBRk8sZUFFUEEsUUFGTztBQUFBLFVBRUdDLGlCQUZILGVBRUdBLGlCQUZIO0FBQUEsVUFFc0JDLGdCQUZ0QixlQUVzQkEsZ0JBRnRCO0FBS25CLFVBQUlMLEdBQUcsS0FBS00sU0FBUixJQUFxQk4sR0FBRyxLQUFLLElBQWpDLEVBQXVDLE9BQU8sRUFBUDtBQUV2QyxhQUFPLHVDQUFxQkEsR0FBckIsRUFBMEI7QUFDL0JFLFFBQUFBLFFBQVEsRUFBUkEsUUFEK0I7QUFDckJDLFFBQUFBLFFBQVEsRUFBUkEsUUFEcUI7QUFDWEMsUUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFEVztBQUNRQyxRQUFBQSxnQkFBZ0IsRUFBaEJBO0FBRFIsT0FBMUIsQ0FBUDtBQUdELEs7Ozs7Ozs7U0FFREUsTSxHQUFBLGtCQUFTO0FBQUEsdUJBR0gsS0FBS04sS0FIRjtBQUFBLFFBRUxPLFFBRkssZ0JBRUxBLFFBRks7QUFBQSxRQUVLQyxLQUZMLGdCQUVLQSxLQUZMO0FBQUEsUUFFWUMsVUFGWixnQkFFWUEsVUFGWjtBQUFBLFFBRXdCQyxTQUZ4QixnQkFFd0JBLFNBRnhCO0FBSVAsV0FDRSw2QkFBQyx1QkFBRDtBQUNFLE1BQUEsUUFBUSxFQUFFSCxRQURaO0FBRUUsTUFBQSxTQUFTLEVBQUUsS0FBS0ksU0FGbEI7QUFHRSxNQUFBLFNBQVMsRUFBRUQsU0FIYjtBQUlFLE1BQUEsS0FBSyxFQUFFRixLQUpUO0FBS0UsTUFBQSxVQUFVLEVBQUVDO0FBTGQsTUFERjtBQVNELEc7OztFQW5Ea0NHLGVBQU1DLGE7O2dCQUFyQ2Ysc0Isa0JBWWtCO0FBQ3BCSSxFQUFBQSxRQUFRLEVBQUVHLFNBRFU7QUFFcEJGLEVBQUFBLGlCQUFpQixFQUFFRSxTQUZDO0FBR3BCRCxFQUFBQSxnQkFBZ0IsRUFBRSxHQUhFO0FBSXBCSSxFQUFBQSxLQUFLLEVBQUUsRUFKYTtBQUtwQkMsRUFBQUEsVUFBVSxFQUFFSixTQUxRO0FBTXBCSyxFQUFBQSxTQUFTLEVBQUU7QUFOUyxDOztlQTBDVFosc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5QW1vdW50IH0gZnJvbSAnQG9wdXNjYXBpdGEvZm9ybWF0LXV0aWxzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCBGb3JtYXR0ZWRJbnB1dCBmcm9tICcuL2Zvcm1hdHRlZC1pbnB1dC5jb21wb25lbnQnO1xuXG5jbGFzcyBGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkZWNpbWFsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aG91c2FuZFNlcGFyYXRvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWNpbWFsU2VwYXJhdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZWNpbWFsczogdW5kZWZpbmVkLFxuICAgIHRob3VzYW5kU2VwYXJhdG9yOiB1bmRlZmluZWQsXG4gICAgZGVjaW1hbFNlcGFyYXRvcjogJy4nLFxuICAgIHZhbHVlOiAnJyxcbiAgICBpbnB1dFByb3BzOiB1bmRlZmluZWQsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgfTtcblxuICAvKipcbiAgICogRm9ybWF0cyB0aGUgdmFsdWUgd2l0aCBAb3B1c2NhcGl0YS9mb3JtYXQtdXRpbHMgZm9ybWF0Q3VycmVuY3lBbW91bnQgZnVuY3Rpb25cbiAgICogQHBhcmFtIHZhbFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGZvcm1hdHRlciA9ICh2YWwpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW5jeSwgZGVjaW1hbHMsIHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gbnVsbCkgcmV0dXJuICcnO1xuXG4gICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5QW1vdW50KHZhbCwge1xuICAgICAgY3VycmVuY3ksIGRlY2ltYWxzLCB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvcixcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb25DaGFuZ2UsIHZhbHVlLCBpbnB1dFByb3BzLCBjbGFzc05hbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtYXR0ZWRJbnB1dFxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIGZvcm1hdHRlcj17dGhpcy5mb3JtYXR0ZXJ9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGlucHV0UHJvcHM9e2lucHV0UHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0dGVkSW5wdXRDdXJyZW5jeTtcbiJdfQ==