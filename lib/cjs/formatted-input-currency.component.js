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
      var value = (0, _formatUtils.formatCurrencyAmount)(val, {
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
      var value = (0, _formatUtils.formatCurrencyAmount)(val, {
        decimals: decimals,
        thousandSeparator: thousandSeparator,
        decimalSeparator: decimalSeparator
      });
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
    return _react.default.createElement(_formattedInput.default, {
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
}(_react.default.PureComponent);

_defineProperty(FormattedInputCurrency, "defaultProps", {
  decimals: undefined,
  thousandSeparator: undefined,
  decimalSeparator: '.',
  value: '',
  inputProps: undefined,
  className: '',
  onBlur: function onBlur() {}
});

var _default = FormattedInputCurrency;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IiwidmFsIiwicHJvcHMiLCJjdXJyZW5jeSIsImRlY2ltYWxzIiwidGhvdXNhbmRTZXBhcmF0b3IiLCJkZWNpbWFsU2VwYXJhdG9yIiwidW5kZWZpbmVkIiwidmFsdWUiLCJOdW1iZXIiLCJpc05hTiIsImxlbmd0aCIsImRlY2ltYWxTZXBhcmF0b3JJbmRleCIsImxhc3RJbmRleE9mIiwicmVuZGVyIiwib25CbHVyIiwib25DaGFuZ2UiLCJpbnB1dFByb3BzIiwiY2xhc3NOYW1lIiwiZWRpdEZvcm1hdHRlciIsImZvcm1hdHRlciIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7OztJQUVNQSxzQjs7Ozs7Ozs7Ozs7Ozs7Z0VBNEJRLFVBQUNDLEdBQUQsRUFBUztBQUFBLHdCQUdmLE1BQUtDLEtBSFU7QUFBQSxVQUVqQkMsUUFGaUIsZUFFakJBLFFBRmlCO0FBQUEsVUFFUEMsUUFGTyxlQUVQQSxRQUZPO0FBQUEsVUFFR0MsaUJBRkgsZUFFR0EsaUJBRkg7QUFBQSxVQUVzQkMsZ0JBRnRCLGVBRXNCQSxnQkFGdEI7QUFLbkIsVUFBSUwsR0FBRyxLQUFLTSxTQUFSLElBQXFCTixHQUFHLEtBQUssSUFBN0IsSUFBcUNBLEdBQUcsS0FBSyxFQUFqRCxFQUFxRCxPQUFPLEVBQVA7QUFFckQsVUFBTU8sS0FBSyxHQUFHLHVDQUFxQlAsR0FBckIsRUFBMEI7QUFDdENFLFFBQUFBLFFBQVEsRUFBUkEsUUFEc0M7QUFDNUJDLFFBQUFBLFFBQVEsRUFBUkEsUUFENEI7QUFDbEJDLFFBQUFBLGlCQUFpQixFQUFqQkEsaUJBRGtCO0FBQ0NDLFFBQUFBLGdCQUFnQixFQUFoQkE7QUFERCxPQUExQixDQUFkO0FBR0EsYUFBT0csTUFBTSxDQUFDQyxLQUFQLENBQWFGLEtBQWIsSUFBc0JQLEdBQXRCLEdBQTRCTyxLQUFuQztBQUNELEs7O29FQUVlLFVBQUNQLEdBQUQsRUFBUztBQUFBLHlCQUN5QixNQUFLQyxLQUQ5QjtBQUFBLFVBQ2ZHLGlCQURlLGdCQUNmQSxpQkFEZTtBQUFBLFVBQ0lDLGdCQURKLGdCQUNJQSxnQkFESjtBQUd2QixVQUFJTCxHQUFHLEtBQUtNLFNBQVIsSUFBcUJOLEdBQUcsS0FBSyxJQUE3QixJQUFxQ0EsR0FBRyxLQUFLLEVBQWpELEVBQXFELE9BQU8sRUFBUCxDQUg5QixDQUl2Qjs7QUFDQSxVQUFJQSxHQUFHLENBQUNVLE1BQUosSUFBYyxDQUFsQixFQUFxQixPQUFPVixHQUFQO0FBRXJCLFVBQU1XLHFCQUFxQixHQUFHWCxHQUFHLENBQUNZLFdBQUosQ0FBZ0JQLGdCQUFoQixDQUE5QjtBQUNBLFVBQU1GLFFBQVEsR0FBR1EscUJBQXFCLEdBQUcsQ0FBQyxDQUF6QixHQUNiWCxHQUFHLENBQUNVLE1BQUosR0FBYUMscUJBQWIsR0FBcUMsQ0FEeEIsR0FFYixDQUZKO0FBSUEsVUFBTUosS0FBSyxHQUFHLHVDQUFxQlAsR0FBckIsRUFBMEI7QUFBRUcsUUFBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlDLFFBQUFBLGlCQUFpQixFQUFqQkEsaUJBQVo7QUFBK0JDLFFBQUFBLGdCQUFnQixFQUFoQkE7QUFBL0IsT0FBMUIsQ0FBZDtBQUVBLFVBQUlNLHFCQUFxQixHQUFHLENBQUMsQ0FBekIsSUFBOEJSLFFBQVEsS0FBSyxDQUEvQyxFQUFrRCxZQUFVSSxLQUFWLEdBQWtCRixnQkFBbEI7QUFFbEQsYUFBT0UsS0FBUDtBQUNELEs7Ozs7Ozs7U0FFRE0sTSxHQUFBLGtCQUFTO0FBQUEsdUJBR0gsS0FBS1osS0FIRjtBQUFBLFFBRUxhLE1BRkssZ0JBRUxBLE1BRks7QUFBQSxRQUVHQyxRQUZILGdCQUVHQSxRQUZIO0FBQUEsUUFFYVIsS0FGYixnQkFFYUEsS0FGYjtBQUFBLFFBRW9CUyxVQUZwQixnQkFFb0JBLFVBRnBCO0FBQUEsUUFFZ0NDLFNBRmhDLGdCQUVnQ0EsU0FGaEM7QUFJUCxXQUNFLDZCQUFDLHVCQUFEO0FBQ0UsTUFBQSxNQUFNLEVBQUVILE1BRFY7QUFFRSxNQUFBLFFBQVEsRUFBRUMsUUFGWjtBQUdFLE1BQUEsYUFBYSxFQUFFLEtBQUtHLGFBSHRCO0FBSUUsTUFBQSxTQUFTLEVBQUUsS0FBS0MsU0FKbEI7QUFLRSxNQUFBLFNBQVMsRUFBRUYsU0FMYjtBQU1FLE1BQUEsS0FBSyxFQUFFVixLQU5UO0FBT0UsTUFBQSxVQUFVLEVBQUVTO0FBUGQsTUFERjtBQVdELEc7OztFQTNFa0NJLGVBQU1DLGE7O2dCQUFyQ3RCLHNCLGtCQWFrQjtBQUNwQkksRUFBQUEsUUFBUSxFQUFFRyxTQURVO0FBRXBCRixFQUFBQSxpQkFBaUIsRUFBRUUsU0FGQztBQUdwQkQsRUFBQUEsZ0JBQWdCLEVBQUUsR0FIRTtBQUlwQkUsRUFBQUEsS0FBSyxFQUFFLEVBSmE7QUFLcEJTLEVBQUFBLFVBQVUsRUFBRVYsU0FMUTtBQU1wQlcsRUFBQUEsU0FBUyxFQUFFLEVBTlM7QUFPcEJILEVBQUFBLE1BQU0sRUFBRSxrQkFBTSxDQUFFO0FBUEksQzs7ZUFpRVRmLHNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeUFtb3VudCB9IGZyb20gJ0BvcHVzY2FwaXRhL2Zvcm1hdC11dGlscyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgRm9ybWF0dGVkSW5wdXQgZnJvbSAnLi9mb3JtYXR0ZWQtaW5wdXQuY29tcG9uZW50JztcblxuY2xhc3MgRm9ybWF0dGVkSW5wdXRDdXJyZW5jeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGN1cnJlbmN5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGVjaW1hbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGhvdXNhbmRTZXBhcmF0b3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVjaW1hbFNlcGFyYXRvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSksXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZWNpbWFsczogdW5kZWZpbmVkLFxuICAgIHRob3VzYW5kU2VwYXJhdG9yOiB1bmRlZmluZWQsXG4gICAgZGVjaW1hbFNlcGFyYXRvcjogJy4nLFxuICAgIHZhbHVlOiAnJyxcbiAgICBpbnB1dFByb3BzOiB1bmRlZmluZWQsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBvbkJsdXI6ICgpID0+IHt9LFxuICB9O1xuXG4gIC8qKlxuICAgKiBGb3JtYXRzIHRoZSB2YWx1ZSB3aXRoIEBvcHVzY2FwaXRhL2Zvcm1hdC11dGlscyBmb3JtYXRDdXJyZW5jeUFtb3VudCBmdW5jdGlvblxuICAgKiBAcGFyYW0gdmFsXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZm9ybWF0dGVyID0gKHZhbCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGN1cnJlbmN5LCBkZWNpbWFscywgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSBudWxsIHx8IHZhbCA9PT0gJycpIHJldHVybiAnJztcblxuICAgIGNvbnN0IHZhbHVlID0gZm9ybWF0Q3VycmVuY3lBbW91bnQodmFsLCB7XG4gICAgICBjdXJyZW5jeSwgZGVjaW1hbHMsIHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yLFxuICAgIH0pO1xuICAgIHJldHVybiBOdW1iZXIuaXNOYU4odmFsdWUpID8gdmFsIDogdmFsdWU7XG4gIH07XG5cbiAgZWRpdEZvcm1hdHRlciA9ICh2YWwpID0+IHtcbiAgICBjb25zdCB7IHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09ICcnKSByZXR1cm4gJyc7XG4gICAgLy8gLSBvciArIGFyZSBub3QgZm9ybWF0dGVkXG4gICAgaWYgKHZhbC5sZW5ndGggPD0gMSkgcmV0dXJuIHZhbDtcblxuICAgIGNvbnN0IGRlY2ltYWxTZXBhcmF0b3JJbmRleCA9IHZhbC5sYXN0SW5kZXhPZihkZWNpbWFsU2VwYXJhdG9yKTtcbiAgICBjb25zdCBkZWNpbWFscyA9IGRlY2ltYWxTZXBhcmF0b3JJbmRleCA+IC0xXG4gICAgICA/IHZhbC5sZW5ndGggLSBkZWNpbWFsU2VwYXJhdG9ySW5kZXggLSAxXG4gICAgICA6IDA7XG5cbiAgICBjb25zdCB2YWx1ZSA9IGZvcm1hdEN1cnJlbmN5QW1vdW50KHZhbCwgeyBkZWNpbWFscywgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IgfSk7XG5cbiAgICBpZiAoZGVjaW1hbFNlcGFyYXRvckluZGV4ID4gLTEgJiYgZGVjaW1hbHMgPT09IDApIHJldHVybiBgJHt2YWx1ZX0ke2RlY2ltYWxTZXBhcmF0b3J9YDtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBvbkJsdXIsIG9uQ2hhbmdlLCB2YWx1ZSwgaW5wdXRQcm9wcywgY2xhc3NOYW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgZWRpdEZvcm1hdHRlcj17dGhpcy5lZGl0Rm9ybWF0dGVyfVxuICAgICAgICBmb3JtYXR0ZXI9e3RoaXMuZm9ybWF0dGVyfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBpbnB1dFByb3BzPXtpbnB1dFByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRlZElucHV0Q3VycmVuY3k7XG4iXX0=