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
      if (val === undefined || val === null || val === '') return '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IiwidmFsIiwicHJvcHMiLCJjdXJyZW5jeSIsImRlY2ltYWxzIiwidGhvdXNhbmRTZXBhcmF0b3IiLCJkZWNpbWFsU2VwYXJhdG9yIiwidW5kZWZpbmVkIiwicmVuZGVyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImlucHV0UHJvcHMiLCJjbGFzc05hbWUiLCJmb3JtYXR0ZXIiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7SUFFTUEsc0I7Ozs7Ozs7Ozs7Ozs7O2dFQTBCUSxVQUFDQyxHQUFELEVBQVM7QUFBQSx3QkFHZixNQUFLQyxLQUhVO0FBQUEsVUFFakJDLFFBRmlCLGVBRWpCQSxRQUZpQjtBQUFBLFVBRVBDLFFBRk8sZUFFUEEsUUFGTztBQUFBLFVBRUdDLGlCQUZILGVBRUdBLGlCQUZIO0FBQUEsVUFFc0JDLGdCQUZ0QixlQUVzQkEsZ0JBRnRCO0FBS25CLFVBQUlMLEdBQUcsS0FBS00sU0FBUixJQUFxQk4sR0FBRyxLQUFLLElBQTdCLElBQXFDQSxHQUFHLEtBQUssRUFBakQsRUFBcUQsT0FBTyxFQUFQO0FBRXJELGFBQU8sdUNBQXFCQSxHQUFyQixFQUEwQjtBQUMvQkUsUUFBQUEsUUFBUSxFQUFSQSxRQUQrQjtBQUNyQkMsUUFBQUEsUUFBUSxFQUFSQSxRQURxQjtBQUNYQyxRQUFBQSxpQkFBaUIsRUFBakJBLGlCQURXO0FBQ1FDLFFBQUFBLGdCQUFnQixFQUFoQkE7QUFEUixPQUExQixDQUFQO0FBR0QsSzs7Ozs7OztTQUVERSxNLEdBQUEsa0JBQVM7QUFBQSx1QkFHSCxLQUFLTixLQUhGO0FBQUEsUUFFTE8sUUFGSyxnQkFFTEEsUUFGSztBQUFBLFFBRUtDLEtBRkwsZ0JBRUtBLEtBRkw7QUFBQSxRQUVZQyxVQUZaLGdCQUVZQSxVQUZaO0FBQUEsUUFFd0JDLFNBRnhCLGdCQUV3QkEsU0FGeEI7QUFJUCxXQUNFLDZCQUFDLHVCQUFEO0FBQ0UsTUFBQSxRQUFRLEVBQUVILFFBRFo7QUFFRSxNQUFBLFNBQVMsRUFBRSxLQUFLSSxTQUZsQjtBQUdFLE1BQUEsU0FBUyxFQUFFRCxTQUhiO0FBSUUsTUFBQSxLQUFLLEVBQUVGLEtBSlQ7QUFLRSxNQUFBLFVBQVUsRUFBRUM7QUFMZCxNQURGO0FBU0QsRzs7O0VBbkRrQ0csZUFBTUMsYTs7Z0JBQXJDZixzQixrQkFZa0I7QUFDcEJJLEVBQUFBLFFBQVEsRUFBRUcsU0FEVTtBQUVwQkYsRUFBQUEsaUJBQWlCLEVBQUVFLFNBRkM7QUFHcEJELEVBQUFBLGdCQUFnQixFQUFFLEdBSEU7QUFJcEJJLEVBQUFBLEtBQUssRUFBRSxFQUphO0FBS3BCQyxFQUFBQSxVQUFVLEVBQUVKLFNBTFE7QUFNcEJLLEVBQUFBLFNBQVMsRUFBRTtBQU5TLEM7O2VBMENUWixzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3lBbW91bnQgfSBmcm9tICdAb3B1c2NhcGl0YS9mb3JtYXQtdXRpbHMnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IEZvcm1hdHRlZElucHV0IGZyb20gJy4vZm9ybWF0dGVkLWlucHV0LmNvbXBvbmVudCc7XG5cbmNsYXNzIEZvcm1hdHRlZElucHV0Q3VycmVuY3kgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRlY2ltYWxzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRob3VzYW5kU2VwYXJhdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlY2ltYWxTZXBhcmF0b3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRlY2ltYWxzOiB1bmRlZmluZWQsXG4gICAgdGhvdXNhbmRTZXBhcmF0b3I6IHVuZGVmaW5lZCxcbiAgICBkZWNpbWFsU2VwYXJhdG9yOiAnLicsXG4gICAgdmFsdWU6ICcnLFxuICAgIGlucHV0UHJvcHM6IHVuZGVmaW5lZCxcbiAgICBjbGFzc05hbWU6ICcnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBGb3JtYXRzIHRoZSB2YWx1ZSB3aXRoIEBvcHVzY2FwaXRhL2Zvcm1hdC11dGlscyBmb3JtYXRDdXJyZW5jeUFtb3VudCBmdW5jdGlvblxuICAgKiBAcGFyYW0gdmFsXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZm9ybWF0dGVyID0gKHZhbCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGN1cnJlbmN5LCBkZWNpbWFscywgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSBudWxsIHx8IHZhbCA9PT0gJycpIHJldHVybiAnJztcblxuICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeUFtb3VudCh2YWwsIHtcbiAgICAgIGN1cnJlbmN5LCBkZWNpbWFscywgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uQ2hhbmdlLCB2YWx1ZSwgaW5wdXRQcm9wcywgY2xhc3NOYW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICBmb3JtYXR0ZXI9e3RoaXMuZm9ybWF0dGVyfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBpbnB1dFByb3BzPXtpbnB1dFByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRlZElucHV0Q3VycmVuY3k7XG4iXX0=