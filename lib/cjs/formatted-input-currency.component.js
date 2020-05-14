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
      var allDecimals;
      var unformattedValue = unformat ? _this.unformatInput(val) : val; // if no currency or decimals, then the number is not rounded to the certain amount of decimals

      if (!currency && (decimals === undefined || decimals === null)) {
        var separator = '.';
        var fraction = unformattedValue.toString().split(separator)[1];
        allDecimals = fraction && fraction.length || 0;
      }

      var value = (0, _formatUtils.formatCurrencyAmount)(unformattedValue, {
        currency: currency,
        decimals: allDecimals || decimals || 0,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IiwiY2xlYXJUaW1lb3V0IiwidGltZW91dCIsInZhbCIsInByb3BzIiwidGhvdXNhbmRTZXBhcmF0b3IiLCJkZWNpbWFsU2VwYXJhdG9yIiwidmFsdWUiLCJyZXBsYWNlIiwiUmVnRXhwIiwidW5mb3JtYXQiLCJjdXJyZW5jeSIsImRlY2ltYWxzIiwidW5kZWZpbmVkIiwiYWxsRGVjaW1hbHMiLCJ1bmZvcm1hdHRlZFZhbHVlIiwidW5mb3JtYXRJbnB1dCIsInNlcGFyYXRvciIsImZyYWN0aW9uIiwidG9TdHJpbmciLCJzcGxpdCIsImxlbmd0aCIsIk51bWJlciIsImlzTmFOIiwiZGVjaW1hbFNlcGFyYXRvckluZGV4IiwibGFzdEluZGV4T2YiLCJlIiwic2VsZWN0VmFsdWVPbkNsaWNrIiwiY3VycmVudFRhcmdldCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInNldFRpbWVvdXQiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInJlbmRlciIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwiaW5wdXRQcm9wcyIsImNsYXNzTmFtZSIsImhhbmRsZU1vdXNlRG93biIsImVkaXRGb3JtYXR0ZXIiLCJmb3JtYXR0ZXIiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7SUFFTUEsc0I7Ozs7Ozs7Ozs7Ozs7OzJFQXlCbUIsWUFBTTtBQUMzQkMsTUFBQUEsWUFBWSxDQUFDLE1BQUtDLE9BQU4sQ0FBWjtBQUNELEs7O29FQUVlLFVBQUNDLEdBQUQsRUFBUztBQUFBLHdCQUduQixNQUFLQyxLQUhjO0FBQUEsVUFFckJDLGlCQUZxQixlQUVyQkEsaUJBRnFCO0FBQUEsVUFFRkMsZ0JBRkUsZUFFRkEsZ0JBRkU7QUFLdkIsVUFBSSxPQUFPSCxHQUFQLEtBQWUsUUFBbkIsRUFBNkIsT0FBT0EsR0FBUDtBQUU3QixVQUFJSSxLQUFLLEdBQUdKLEdBQVo7O0FBQ0EsVUFBSUUsaUJBQUosRUFBdUI7QUFDckJFLFFBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDQyxPQUFOLENBQWMsSUFBSUMsTUFBSixRQUFnQkosaUJBQWhCLEVBQXFDLEdBQXJDLENBQWQsRUFBeUQsRUFBekQsQ0FBUjtBQUNEOztBQUNELFVBQUlDLGdCQUFnQixLQUFLLEdBQXpCLEVBQThCO0FBQzVCQyxRQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ0MsT0FBTixDQUFjLElBQUlDLE1BQUosUUFBZ0JILGdCQUFoQixFQUFvQyxHQUFwQyxDQUFkLEVBQXdELEdBQXhELENBQVI7QUFDRDs7QUFFRCxhQUFPQyxLQUFQO0FBQ0QsSzs7Z0VBT1csVUFBQ0osR0FBRCxFQUFNTyxRQUFOLEVBQTJCO0FBQUEsVUFBckJBLFFBQXFCO0FBQXJCQSxRQUFBQSxRQUFxQixHQUFWLEtBQVU7QUFBQTs7QUFBQSx5QkFHakMsTUFBS04sS0FINEI7QUFBQSxVQUVuQ08sUUFGbUMsZ0JBRW5DQSxRQUZtQztBQUFBLFVBRXpCQyxRQUZ5QixnQkFFekJBLFFBRnlCO0FBQUEsVUFFZlAsaUJBRmUsZ0JBRWZBLGlCQUZlO0FBQUEsVUFFSUMsZ0JBRkosZ0JBRUlBLGdCQUZKO0FBS3JDLFVBQUlILEdBQUcsS0FBS1UsU0FBUixJQUFxQlYsR0FBRyxLQUFLLElBQTdCLElBQXFDQSxHQUFHLEtBQUssRUFBakQsRUFBcUQsT0FBTyxFQUFQO0FBRXJELFVBQUlXLFdBQUo7QUFDQSxVQUFNQyxnQkFBZ0IsR0FBR0wsUUFBUSxHQUFHLE1BQUtNLGFBQUwsQ0FBbUJiLEdBQW5CLENBQUgsR0FBNkJBLEdBQTlELENBUnFDLENBVXJDOztBQUNBLFVBQUksQ0FBQ1EsUUFBRCxLQUFjQyxRQUFRLEtBQUtDLFNBQWIsSUFBMEJELFFBQVEsS0FBSyxJQUFyRCxDQUFKLEVBQWdFO0FBQzlELFlBQU1LLFNBQVMsR0FBRyxHQUFsQjtBQUNBLFlBQU1DLFFBQVEsR0FBR0gsZ0JBQWdCLENBQUNJLFFBQWpCLEdBQTRCQyxLQUE1QixDQUFrQ0gsU0FBbEMsRUFBNkMsQ0FBN0MsQ0FBakI7QUFDQUgsUUFBQUEsV0FBVyxHQUFJSSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0csTUFBdEIsSUFBaUMsQ0FBL0M7QUFDRDs7QUFDRCxVQUFNZCxLQUFLLEdBQUcsdUNBQXFCUSxnQkFBckIsRUFBdUM7QUFDbkRKLFFBQUFBLFFBQVEsRUFBUkEsUUFEbUQ7QUFDekNDLFFBQUFBLFFBQVEsRUFBRUUsV0FBVyxJQUFJRixRQUFmLElBQTJCLENBREk7QUFDRFAsUUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFEQztBQUNrQkMsUUFBQUEsZ0JBQWdCLEVBQWhCQTtBQURsQixPQUF2QyxDQUFkO0FBSUEsYUFBT2dCLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhaEIsS0FBYixJQUNILHVDQUFxQixDQUFyQixFQUF3QjtBQUFFSyxRQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWVAsUUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFBWjtBQUErQkMsUUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUEvQixPQUF4QixDQURHLEdBRUhDLEtBRko7QUFHRCxLOztvRUFFZSxVQUFDSixHQUFELEVBQVM7QUFBQSx5QkFDeUIsTUFBS0MsS0FEOUI7QUFBQSxVQUNmQyxpQkFEZSxnQkFDZkEsaUJBRGU7QUFBQSxVQUNJQyxnQkFESixnQkFDSUEsZ0JBREo7QUFHdkIsVUFBSUgsR0FBRyxLQUFLVSxTQUFSLElBQXFCVixHQUFHLEtBQUssSUFBN0IsSUFBcUNBLEdBQUcsS0FBSyxFQUFqRCxFQUFxRCxPQUFPLEVBQVAsQ0FIOUIsQ0FJdkI7O0FBQ0EsVUFBSUEsR0FBRyxDQUFDa0IsTUFBSixJQUFjLENBQWxCLEVBQXFCLE9BQU9sQixHQUFQO0FBRXJCLFVBQU1xQixxQkFBcUIsR0FBR3JCLEdBQUcsQ0FBQ3NCLFdBQUosQ0FBZ0JuQixnQkFBaEIsQ0FBOUI7QUFDQSxVQUFNTSxRQUFRLEdBQUdZLHFCQUFxQixHQUFHLENBQUMsQ0FBekIsR0FDYnJCLEdBQUcsQ0FBQ2tCLE1BQUosR0FBYUcscUJBQWIsR0FBcUMsQ0FEeEIsR0FFYixDQUZKO0FBSUEsVUFBTWpCLEtBQUssR0FBRyx1Q0FBcUIsTUFBS1MsYUFBTCxDQUFtQmIsR0FBbkIsQ0FBckIsRUFBOEM7QUFDMURTLFFBQUFBLFFBQVEsRUFBUkEsUUFEMEQ7QUFDaERQLFFBQUFBLGlCQUFpQixFQUFqQkEsaUJBRGdEO0FBQzdCQyxRQUFBQSxnQkFBZ0IsRUFBaEJBO0FBRDZCLE9BQTlDLENBQWQsQ0FadUIsQ0FnQnZCOztBQUNBLFVBQUlILEdBQUcsV0FBU0ksS0FBaEIsRUFBeUIsT0FBT0osR0FBUDs7QUFFekIsVUFBSW1CLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhaEIsS0FBYixDQUFKLEVBQXlCO0FBQ3ZCLGVBQU8sdUNBQXFCLENBQXJCLEVBQXdCO0FBQUVLLFVBQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZUCxVQUFBQSxpQkFBaUIsRUFBakJBLGlCQUFaO0FBQStCQyxVQUFBQSxnQkFBZ0IsRUFBaEJBO0FBQS9CLFNBQXhCLENBQVA7QUFDRDs7QUFFRCxVQUFJa0IscUJBQXFCLEdBQUcsQ0FBQyxDQUF6QixJQUE4QlosUUFBUSxLQUFLLENBQS9DLEVBQWtELFlBQVVMLEtBQVYsR0FBa0JELGdCQUFsQjtBQUVsRCxhQUFPQyxLQUFQO0FBQ0QsSzs7c0VBRWlCLFVBQUNtQixDQUFELEVBQU87QUFBQSxVQUNmQyxrQkFEZSxHQUNRLE1BQUt2QixLQURiLENBQ2Z1QixrQkFEZTtBQUFBLFVBRWZDLGFBRmUsR0FFNkJGLENBRjdCLENBRWZFLGFBRmU7QUFBQSxVQUVpQnJCLEtBRmpCLEdBRTZCbUIsQ0FGN0IsQ0FFQUUsYUFGQSxDQUVpQnJCLEtBRmpCOztBQUd2QixVQUFJc0IsUUFBUSxDQUFDQyxhQUFULEtBQTJCRixhQUEzQixJQUNDRCxrQkFERCxJQUVDcEIsS0FBSyxLQUFLTSxTQUZYLElBR0NOLEtBQUssS0FBSyxJQUhmLEVBR3FCO0FBQ25CLGNBQUtMLE9BQUwsR0FBZTZCLFVBQVUsQ0FBQyxZQUFNO0FBQzlCSCxVQUFBQSxhQUFhLENBQUNJLGlCQUFkLENBQWdDLENBQWhDLEVBQW1DekIsS0FBSyxDQUFDYyxNQUF6QztBQUNELFNBRndCLEVBRXRCLEVBRnNCLENBQXpCO0FBR0Q7QUFDRixLOzs7Ozs7O1NBRURZLE0sR0FBQSxrQkFBUztBQUFBLHVCQUdILEtBQUs3QixLQUhGO0FBQUEsUUFFTDhCLE1BRkssZ0JBRUxBLE1BRks7QUFBQSxRQUVHQyxRQUZILGdCQUVHQSxRQUZIO0FBQUEsUUFFYTVCLEtBRmIsZ0JBRWFBLEtBRmI7QUFBQSxRQUVvQjZCLFVBRnBCLGdCQUVvQkEsVUFGcEI7QUFBQSxRQUVnQ0MsU0FGaEMsZ0JBRWdDQSxTQUZoQztBQUlQLFdBQ0UsZ0NBQUMsMEJBQUQ7QUFDRSxNQUFBLE1BQU0sRUFBRUgsTUFEVjtBQUVFLE1BQUEsUUFBUSxFQUFFQyxRQUZaO0FBR0UsTUFBQSxXQUFXLEVBQUUsS0FBS0csZUFIcEI7QUFJRSxNQUFBLGFBQWEsRUFBRSxLQUFLQyxhQUp0QjtBQUtFLE1BQUEsU0FBUyxFQUFFLEtBQUtDLFNBTGxCO0FBTUUsTUFBQSxTQUFTLEVBQUVILFNBTmI7QUFPRSxNQUFBLEtBQUssRUFBRTlCLEtBUFQ7QUFRRSxNQUFBLFVBQVUsRUFBRTZCO0FBUmQsTUFERjtBQVlELEc7OztFQXRJa0NLLGtCQUFNQyxhOztnQkFBckMxQyxzQixrQkFja0I7QUFDcEJZLEVBQUFBLFFBQVEsRUFBRUMsU0FEVTtBQUVwQlIsRUFBQUEsaUJBQWlCLEVBQUVRLFNBRkM7QUFHcEJQLEVBQUFBLGdCQUFnQixFQUFFLEdBSEU7QUFJcEJDLEVBQUFBLEtBQUssRUFBRSxFQUphO0FBS3BCNkIsRUFBQUEsVUFBVSxFQUFFdkIsU0FMUTtBQU1wQndCLEVBQUFBLFNBQVMsRUFBRSxFQU5TO0FBT3BCSCxFQUFBQSxNQUFNLEVBQUUsa0JBQU0sQ0FBRSxDQVBJO0FBUXBCUCxFQUFBQSxrQkFBa0IsRUFBRTtBQVJBLEM7O2VBMkhUM0Isc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5QW1vdW50IH0gZnJvbSAnQG9wdXNjYXBpdGEvZm9ybWF0LXV0aWxzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCBGb3JtYXR0ZWRJbnB1dCBmcm9tICcuL2Zvcm1hdHRlZC1pbnB1dC5jb21wb25lbnQnO1xuXG5jbGFzcyBGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkZWNpbWFsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aG91c2FuZFNlcGFyYXRvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWNpbWFsU2VwYXJhdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzZWxlY3RWYWx1ZU9uQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVjaW1hbHM6IHVuZGVmaW5lZCxcbiAgICB0aG91c2FuZFNlcGFyYXRvcjogdW5kZWZpbmVkLFxuICAgIGRlY2ltYWxTZXBhcmF0b3I6ICcuJyxcbiAgICB2YWx1ZTogJycsXG4gICAgaW5wdXRQcm9wczogdW5kZWZpbmVkLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgb25CbHVyOiAoKSA9PiB7fSxcbiAgICBzZWxlY3RWYWx1ZU9uQ2xpY2s6IGZhbHNlLFxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9XG5cbiAgdW5mb3JtYXRJbnB1dCA9ICh2YWwpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykgcmV0dXJuIHZhbDtcblxuICAgIGxldCB2YWx1ZSA9IHZhbDtcbiAgICBpZiAodGhvdXNhbmRTZXBhcmF0b3IpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKGBcXFxcJHt0aG91c2FuZFNlcGFyYXRvcn1gLCAnZycpLCAnJyk7XG4gICAgfVxuICAgIGlmIChkZWNpbWFsU2VwYXJhdG9yICE9PSAnLicpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKGBcXFxcJHtkZWNpbWFsU2VwYXJhdG9yfWAsICdnJyksICcuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdHMgdGhlIHZhbHVlIHdpdGggQG9wdXNjYXBpdGEvZm9ybWF0LXV0aWxzIGZvcm1hdEN1cnJlbmN5QW1vdW50IGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB2YWxcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBmb3JtYXR0ZXIgPSAodmFsLCB1bmZvcm1hdCA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY3VycmVuY3ksIGRlY2ltYWxzLCB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IG51bGwgfHwgdmFsID09PSAnJykgcmV0dXJuICcnO1xuXG4gICAgbGV0IGFsbERlY2ltYWxzO1xuICAgIGNvbnN0IHVuZm9ybWF0dGVkVmFsdWUgPSB1bmZvcm1hdCA/IHRoaXMudW5mb3JtYXRJbnB1dCh2YWwpIDogdmFsO1xuXG4gICAgLy8gaWYgbm8gY3VycmVuY3kgb3IgZGVjaW1hbHMsIHRoZW4gdGhlIG51bWJlciBpcyBub3Qgcm91bmRlZCB0byB0aGUgY2VydGFpbiBhbW91bnQgb2YgZGVjaW1hbHNcbiAgICBpZiAoIWN1cnJlbmN5ICYmIChkZWNpbWFscyA9PT0gdW5kZWZpbmVkIHx8IGRlY2ltYWxzID09PSBudWxsKSkge1xuICAgICAgY29uc3Qgc2VwYXJhdG9yID0gJy4nO1xuICAgICAgY29uc3QgZnJhY3Rpb24gPSB1bmZvcm1hdHRlZFZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoc2VwYXJhdG9yKVsxXTtcbiAgICAgIGFsbERlY2ltYWxzID0gKGZyYWN0aW9uICYmIGZyYWN0aW9uLmxlbmd0aCkgfHwgMDtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSBmb3JtYXRDdXJyZW5jeUFtb3VudCh1bmZvcm1hdHRlZFZhbHVlLCB7XG4gICAgICBjdXJyZW5jeSwgZGVjaW1hbHM6IGFsbERlY2ltYWxzIHx8IGRlY2ltYWxzIHx8IDAsIHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE51bWJlci5pc05hTih2YWx1ZSlcbiAgICAgID8gZm9ybWF0Q3VycmVuY3lBbW91bnQoMCwgeyBkZWNpbWFscywgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IgfSlcbiAgICAgIDogdmFsdWU7XG4gIH07XG5cbiAgZWRpdEZvcm1hdHRlciA9ICh2YWwpID0+IHtcbiAgICBjb25zdCB7IHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09ICcnKSByZXR1cm4gJyc7XG4gICAgLy8gLSBvciArIGFyZSBub3QgZm9ybWF0dGVkXG4gICAgaWYgKHZhbC5sZW5ndGggPD0gMSkgcmV0dXJuIHZhbDtcblxuICAgIGNvbnN0IGRlY2ltYWxTZXBhcmF0b3JJbmRleCA9IHZhbC5sYXN0SW5kZXhPZihkZWNpbWFsU2VwYXJhdG9yKTtcbiAgICBjb25zdCBkZWNpbWFscyA9IGRlY2ltYWxTZXBhcmF0b3JJbmRleCA+IC0xXG4gICAgICA/IHZhbC5sZW5ndGggLSBkZWNpbWFsU2VwYXJhdG9ySW5kZXggLSAxXG4gICAgICA6IDA7XG5cbiAgICBjb25zdCB2YWx1ZSA9IGZvcm1hdEN1cnJlbmN5QW1vdW50KHRoaXMudW5mb3JtYXRJbnB1dCh2YWwpLCB7XG4gICAgICBkZWNpbWFscywgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IsXG4gICAgfSk7XG5cbiAgICAvLyB0aGlzIGF2b2lkcyBtaW51cyBzaWduIHJlbW92YWwgaW4gdGhlIGVkaXRpbmcgcGhhc2UgbGlrZSB0aGlzOiAwLjAwIC0tPiAtMC4wMCAtLT4gLTEwLjAwXG4gICAgaWYgKHZhbCA9PT0gYC0ke3ZhbHVlfWApIHJldHVybiB2YWw7XG5cbiAgICBpZiAoTnVtYmVyLmlzTmFOKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5QW1vdW50KDAsIHsgZGVjaW1hbHMsIHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yIH0pO1xuICAgIH1cblxuICAgIGlmIChkZWNpbWFsU2VwYXJhdG9ySW5kZXggPiAtMSAmJiBkZWNpbWFscyA9PT0gMCkgcmV0dXJuIGAke3ZhbHVlfSR7ZGVjaW1hbFNlcGFyYXRvcn1gO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaGFuZGxlTW91c2VEb3duID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdFZhbHVlT25DbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGN1cnJlbnRUYXJnZXQsIGN1cnJlbnRUYXJnZXQ6IHsgdmFsdWUgfSB9ID0gZTtcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gY3VycmVudFRhcmdldFxuICAgICAgJiYgc2VsZWN0VmFsdWVPbkNsaWNrXG4gICAgICAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRUYXJnZXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgdmFsdWUubGVuZ3RoKTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb25CbHVyLCBvbkNoYW5nZSwgdmFsdWUsIGlucHV0UHJvcHMsIGNsYXNzTmFtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1hdHRlZElucHV0XG4gICAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgZWRpdEZvcm1hdHRlcj17dGhpcy5lZGl0Rm9ybWF0dGVyfVxuICAgICAgICBmb3JtYXR0ZXI9e3RoaXMuZm9ybWF0dGVyfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBpbnB1dFByb3BzPXtpbnB1dFByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRlZElucHV0Q3VycmVuY3k7XG4iXX0=