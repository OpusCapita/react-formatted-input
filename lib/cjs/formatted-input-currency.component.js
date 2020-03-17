"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formatUtils = require("@opuscapita/format-utils");

var _formattedInput = _interopRequireDefault(require("./formatted-input.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      var value = (0, _formatUtils.formatCurrencyAmount)(unformat ? _this.unformatInput(val) : val, {
        currency: currency,
        decimals: decimals,
        thousandSeparator: thousandSeparator,
        decimalSeparator: decimalSeparator
      });
      return Number.isNaN(value) ? (0, _formatUtils.formatCurrencyAmount)(0, {
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
      var value = (0, _formatUtils.formatCurrencyAmount)(_this.unformatInput(val), {
        decimals: decimals,
        thousandSeparator: thousandSeparator,
        decimalSeparator: decimalSeparator
      }); // this avoids minus sign removal in the editing phase like this: 0.00 --> -0.00 --> -10.00

      if (val === "-" + value) return val;

      if (Number.isNaN(value)) {
        return (0, _formatUtils.formatCurrencyAmount)(0, {
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
    return _react["default"].createElement(_formattedInput["default"], {
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
}(_react["default"].PureComponent);

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

var _default = FormattedInputCurrency;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IiwiY2xlYXJUaW1lb3V0IiwidGltZW91dCIsInZhbCIsInByb3BzIiwidGhvdXNhbmRTZXBhcmF0b3IiLCJkZWNpbWFsU2VwYXJhdG9yIiwidmFsdWUiLCJyZXBsYWNlIiwiUmVnRXhwIiwidW5mb3JtYXQiLCJjdXJyZW5jeSIsImRlY2ltYWxzIiwidW5kZWZpbmVkIiwidW5mb3JtYXRJbnB1dCIsIk51bWJlciIsImlzTmFOIiwibGVuZ3RoIiwiZGVjaW1hbFNlcGFyYXRvckluZGV4IiwibGFzdEluZGV4T2YiLCJlIiwic2VsZWN0VmFsdWVPbkNsaWNrIiwiY3VycmVudFRhcmdldCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInNldFRpbWVvdXQiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInJlbmRlciIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwiaW5wdXRQcm9wcyIsImNsYXNzTmFtZSIsImhhbmRsZU1vdXNlRG93biIsImVkaXRGb3JtYXR0ZXIiLCJmb3JtYXR0ZXIiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7SUFFTUEsc0I7Ozs7Ozs7Ozs7Ozs7OzJFQXlCbUIsWUFBTTtBQUMzQkMsTUFBQUEsWUFBWSxDQUFDLE1BQUtDLE9BQU4sQ0FBWjtBQUNELEs7O29FQUVlLFVBQUNDLEdBQUQsRUFBUztBQUFBLHdCQUduQixNQUFLQyxLQUhjO0FBQUEsVUFFckJDLGlCQUZxQixlQUVyQkEsaUJBRnFCO0FBQUEsVUFFRkMsZ0JBRkUsZUFFRkEsZ0JBRkU7QUFLdkIsVUFBSSxPQUFPSCxHQUFQLEtBQWUsUUFBbkIsRUFBNkIsT0FBT0EsR0FBUDtBQUU3QixVQUFJSSxLQUFLLEdBQUdKLEdBQVo7O0FBQ0EsVUFBSUUsaUJBQUos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SHBCO0FBSUUsTUFBQSxhQUFhLEVBQUUsS0FBS0MsYUFKdEI7QUFLRSxNQUFBLFNBQVMsRUFBRSxLQUFLQyxTQUxsQjtBQU1FLE1BQUEsU0FBUyxFQUFFSCxTQU5iO0FBT0UsTUFBQSxLQUFLLEVBQUV4QixLQVBUO0FBUUUsTUFBQSxVQUFVLEVBQUV1QjtBQVJkLE1BREY7QUFZRCxHOzs7RUE3SGtDSyxrQkFBTUMsYTs7Z0JBQXJDcEMsc0Isa0JBY2tCO0FBQ3BCWSxFQUFBQSxRQUFRLEVBQUVDLFNBRFU7QUFFcEJSLEVBQUFBLGlCQUFpQixFQUFFUSxTQUZDO0FBR3BCUCxFQUFBQSxnQkFBZ0IsRUFBRSxHQUhFO0FBSXBCQyxFQUFBQSxLQUFLLEVBQUUsRUFKYTtBQUtwQnVCLEVBQUFBLFVBQVUsRUFBRWpCLFNBTFE7QUFNcEJrQixFQUFBQSxTQUFTLEVBQUUsRUFOUztBQU9wQkgsRUFBQUEsTUFBTSxFQUFFLGtCQUFNLENBQUUsQ0FQSTtBQVFwQlAsRUFBQUEsa0JBQWtCLEVBQUU7QUFSQSxDOztlQWtIVHJCLHNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeUFtb3VudCB9IGZyb20gJ0BvcHVzY2FwaXRhL2Zvcm1hdC11dGlscyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgRm9ybWF0dGVkSW5wdXQgZnJvbSAnLi9mb3JtYXR0ZWQtaW5wdXQuY29tcG9uZW50JztcblxuY2xhc3MgRm9ybWF0dGVkSW5wdXRDdXJyZW5jeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGVjaW1hbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGhvdXNhbmRTZXBhcmF0b3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVjaW1hbFNlcGFyYXRvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSksXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2VsZWN0VmFsdWVPbkNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRlY2ltYWxzOiB1bmRlZmluZWQsXG4gICAgdGhvdXNhbmRTZXBhcmF0b3I6IHVuZGVmaW5lZCxcbiAgICBkZWNpbWFsU2VwYXJhdG9yOiAnLicsXG4gICAgdmFsdWU6ICcnLFxuICAgIGlucHV0UHJvcHM6IHVuZGVmaW5lZCxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIG9uQmx1cjogKCkgPT4ge30sXG4gICAgc2VsZWN0VmFsdWVPbkNsaWNrOiBmYWxzZSxcbiAgfTtcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgfVxuXG4gIHVuZm9ybWF0SW5wdXQgPSAodmFsKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHJldHVybiB2YWw7XG5cbiAgICBsZXQgdmFsdWUgPSB2YWw7XG4gICAgaWYgKHRob3VzYW5kU2VwYXJhdG9yKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXCR7dGhvdXNhbmRTZXBhcmF0b3J9YCwgJ2cnKSwgJycpO1xuICAgIH1cbiAgICBpZiAoZGVjaW1hbFNlcGFyYXRvciAhPT0gJy4nKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXCR7ZGVjaW1hbFNlcGFyYXRvcn1gLCAnZycpLCAnLicpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXRzIHRoZSB2YWx1ZSB3aXRoIEBvcHVzY2FwaXRhL2Zvcm1hdC11dGlscyBmb3JtYXRDdXJyZW5jeUFtb3VudCBmdW5jdGlvblxuICAgKiBAcGFyYW0gdmFsXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZm9ybWF0dGVyID0gKHZhbCwgdW5mb3JtYXQgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGN1cnJlbmN5LCBkZWNpbWFscywgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSBudWxsIHx8IHZhbCA9PT0gJycpIHJldHVybiAnJztcblxuICAgIGNvbnN0IHZhbHVlID0gZm9ybWF0Q3VycmVuY3lBbW91bnQodW5mb3JtYXQgPyB0aGlzLnVuZm9ybWF0SW5wdXQodmFsKSA6IHZhbCwge1xuICAgICAgY3VycmVuY3ksIGRlY2ltYWxzLCB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvcixcbiAgICB9KTtcblxuICAgIHJldHVybiBOdW1iZXIuaXNOYU4odmFsdWUpXG4gICAgICA/IGZvcm1hdEN1cnJlbmN5QW1vdW50KDAsIHsgZGVjaW1hbHMsIHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yIH0pXG4gICAgICA6IHZhbHVlO1xuICB9O1xuXG4gIGVkaXRGb3JtYXR0ZXIgPSAodmFsKSA9PiB7XG4gICAgY29uc3QgeyB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IG51bGwgfHwgdmFsID09PSAnJykgcmV0dXJuICcnO1xuICAgIC8vIC0gb3IgKyBhcmUgbm90IGZvcm1hdHRlZFxuICAgIGlmICh2YWwubGVuZ3RoIDw9IDEpIHJldHVybiB2YWw7XG5cbiAgICBjb25zdCBkZWNpbWFsU2VwYXJhdG9ySW5kZXggPSB2YWwubGFzdEluZGV4T2YoZGVjaW1hbFNlcGFyYXRvcik7XG4gICAgY29uc3QgZGVjaW1hbHMgPSBkZWNpbWFsU2VwYXJhdG9ySW5kZXggPiAtMVxuICAgICAgPyB2YWwubGVuZ3RoIC0gZGVjaW1hbFNlcGFyYXRvckluZGV4IC0gMVxuICAgICAgOiAwO1xuXG4gICAgY29uc3QgdmFsdWUgPSBmb3JtYXRDdXJyZW5jeUFtb3VudCh0aGlzLnVuZm9ybWF0SW5wdXQodmFsKSwge1xuICAgICAgZGVjaW1hbHMsIHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yLFxuICAgIH0pO1xuXG4gICAgLy8gdGhpcyBhdm9pZHMgbWludXMgc2lnbiByZW1vdmFsIGluIHRoZSBlZGl0aW5nIHBoYXNlIGxpa2UgdGhpczogMC4wMCAtLT4gLTAuMDAgLS0+IC0xMC4wMFxuICAgIGlmICh2YWwgPT09IGAtJHt2YWx1ZX1gKSByZXR1cm4gdmFsO1xuXG4gICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeUFtb3VudCgwLCB7IGRlY2ltYWxzLCB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvciB9KTtcbiAgICB9XG5cbiAgICBpZiAoZGVjaW1hbFNlcGFyYXRvckluZGV4ID4gLTEgJiYgZGVjaW1hbHMgPT09IDApIHJldHVybiBgJHt2YWx1ZX0ke2RlY2ltYWxTZXBhcmF0b3J9YDtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGhhbmRsZU1vdXNlRG93biA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RWYWx1ZU9uQ2xpY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0LCBjdXJyZW50VGFyZ2V0OiB7IHZhbHVlIH0gfSA9IGU7XG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGN1cnJlbnRUYXJnZXRcbiAgICAgICYmIHNlbGVjdFZhbHVlT25DbGlja1xuICAgICAgJiYgdmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjdXJyZW50VGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKDAsIHZhbHVlLmxlbmd0aCk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uQmx1ciwgb25DaGFuZ2UsIHZhbHVlLCBpbnB1dFByb3BzLCBjbGFzc05hbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtYXR0ZWRJbnB1dFxuICAgICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVNb3VzZURvd259XG4gICAgICAgIGVkaXRGb3JtYXR0ZXI9e3RoaXMuZWRpdEZvcm1hdHRlcn1cbiAgICAgICAgZm9ybWF0dGVyPXt0aGlzLmZvcm1hdHRlcn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgaW5wdXRQcm9wcz17aW5wdXRQcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5O1xuIl19