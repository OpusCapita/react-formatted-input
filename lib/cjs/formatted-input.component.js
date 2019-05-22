"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./formatted-input.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var userTyping = false;

var FormattedInput =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(FormattedInput, _React$PureComponent);

  FormattedInput.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var formatter = nextProps.formatter,
        nextValue = nextProps.value;
    var prevStateValue = prevState.value; // Format value if change is not initiated by a user and previous state value differs
    // from the formatted value

    if (!userTyping && prevStateValue !== formatter(nextValue)) {
      return {
        value: formatter(nextValue)
      };
    }

    return null;
  };

  function FormattedInput(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (e) {
      var _this$props = _this.props,
          formatter = _this$props.formatter,
          onChange = _this$props.onChange;
      var value = e.target.value;

      _this.setState({
        value: formatter(value)
      }, function () {
        onChange(formatter(value));
        userTyping = false;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var onChange = _this.props.onChange;
      var value = e.target.value;
      userTyping = true;

      _this.setState({
        value: value
      }, function () {
        onChange(value);
      });
    });

    var _value = props.value,
        _formatter = props.formatter;
    _this.state = {
      value: _formatter(_value)
    };
    return _this;
  }
  /**
   * Called when user leaves the field, fires the formatter
   * @param e
   */


  var _proto = FormattedInput.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        inputProps = _this$props2.inputProps,
        className = _this$props2.className;
    return _react.default.createElement("input", _extends({}, inputProps, {
      className: "oc-formatted-input " + className,
      onChange: this.onChange,
      onBlur: this.onBlur,
      value: this.state.value
    }));
  };

  return FormattedInput;
}(_react.default.PureComponent);

_defineProperty(FormattedInput, "defaultProps", {
  formatter: function formatter(val) {
    return val;
  },
  inputProps: {},
  value: '',
  className: ''
});

var _default = FormattedInput;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJ1c2VyVHlwaW5nIiwiRm9ybWF0dGVkSW5wdXQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXh0UHJvcHMiLCJwcmV2U3RhdGUiLCJmb3JtYXR0ZXIiLCJuZXh0VmFsdWUiLCJ2YWx1ZSIsInByZXZTdGF0ZVZhbHVlIiwicHJvcHMiLCJlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInN0YXRlIiwicmVuZGVyIiwiaW5wdXRQcm9wcyIsImNsYXNzTmFtZSIsIm9uQmx1ciIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsVUFBVSxHQUFHLEtBQWpCOztJQUVNQyxjOzs7OztpQkFnQkdDLHdCLEdBQVAsa0NBQWdDQyxTQUFoQyxFQUEyQ0MsU0FBM0MsRUFBc0Q7QUFBQSxRQUM1Q0MsU0FENEMsR0FDWkYsU0FEWSxDQUM1Q0UsU0FENEM7QUFBQSxRQUMxQkMsU0FEMEIsR0FDWkgsU0FEWSxDQUNqQ0ksS0FEaUM7QUFBQSxRQUVyQ0MsY0FGcUMsR0FFbEJKLFNBRmtCLENBRTVDRyxLQUY0QyxFQUlwRDtBQUNBOztBQUNBLFFBQUksQ0FBQ1AsVUFBRCxJQUFlUSxjQUFjLEtBQUtILFNBQVMsQ0FBQ0MsU0FBRCxDQUEvQyxFQUE0RDtBQUMxRCxhQUFPO0FBQUVDLFFBQUFBLEtBQUssRUFBRUYsU0FBUyxDQUFDQyxTQUFEO0FBQWxCLE9BQVA7QUFDRDs7QUFDRCxXQUFPLElBQVA7QUFDRCxHOztBQUVELDBCQUFZRyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLDRDQUFNQSxLQUFOOztBQURpQiw2REFVVixVQUFDQyxDQUFELEVBQU87QUFBQSx3QkFDa0IsTUFBS0QsS0FEdkI7QUFBQSxVQUNOSixTQURNLGVBQ05BLFNBRE07QUFBQSxVQUNLTSxRQURMLGVBQ0tBLFFBREw7QUFBQSxVQUVJSixLQUZKLEdBRWdCRyxDQUZoQixDQUVORSxNQUZNLENBRUlMLEtBRko7O0FBSWQsWUFBS00sUUFBTCxDQUFjO0FBQUVOLFFBQUFBLEtBQUssRUFBRUYsU0FBUyxDQUFDRSxLQUFEO0FBQWxCLE9BQWQsRUFBMkMsWUFBTTtBQUMvQ0ksUUFBQUEsUUFBUSxDQUFDTixTQUFTLENBQUNFLEtBQUQsQ0FBVixDQUFSO0FBQ0FQLFFBQUFBLFVBQVUsR0FBRyxLQUFiO0FBQ0QsT0FIRDtBQUlELEtBbEJrQjs7QUFBQSwrREF5QlIsVUFBQ1UsQ0FBRCxFQUFPO0FBQUEsVUFDUkMsUUFEUSxHQUNLLE1BQUtGLEtBRFYsQ0FDUkUsUUFEUTtBQUFBLFVBRUVKLEtBRkYsR0FFY0csQ0FGZCxDQUVSRSxNQUZRLENBRUVMLEtBRkY7QUFHaEJQLE1BQUFBLFVBQVUsR0FBRyxJQUFiOztBQUVBLFlBQUthLFFBQUwsQ0FBYztBQUFFTixRQUFBQSxLQUFLLEVBQUxBO0FBQUYsT0FBZCxFQUF5QixZQUFNO0FBQzdCSSxRQUFBQSxRQUFRLENBQUNKLEtBQUQsQ0FBUjtBQUNELE9BRkQ7QUFHRCxLQWpDa0I7O0FBQUEsUUFFVEEsTUFGUyxHQUVZRSxLQUZaLENBRVRGLEtBRlM7QUFBQSxRQUVGRixVQUZFLEdBRVlJLEtBRlosQ0FFRkosU0FGRTtBQUdqQixVQUFLUyxLQUFMLEdBQWE7QUFBRVAsTUFBQUEsS0FBSyxFQUFFRixVQUFTLENBQUNFLE1BQUQ7QUFBbEIsS0FBYjtBQUhpQjtBQUlsQjtBQUVEOzs7Ozs7OztTQTZCQVEsTSxHQUFBLGtCQUFTO0FBQUEsdUJBQzJCLEtBQUtOLEtBRGhDO0FBQUEsUUFDQ08sVUFERCxnQkFDQ0EsVUFERDtBQUFBLFFBQ2FDLFNBRGIsZ0JBQ2FBLFNBRGI7QUFFUCxXQUNFLG1EQUNNRCxVQUROO0FBRUUsTUFBQSxTQUFTLDBCQUF3QkMsU0FGbkM7QUFHRSxNQUFBLFFBQVEsRUFBRSxLQUFLTixRQUhqQjtBQUlFLE1BQUEsTUFBTSxFQUFFLEtBQUtPLE1BSmY7QUFLRSxNQUFBLEtBQUssRUFBRSxLQUFLSixLQUFMLENBQVdQO0FBTHBCLE9BREY7QUFTRCxHOzs7RUExRTBCWSxlQUFNQyxhOztnQkFBN0JuQixjLGtCQVNrQjtBQUNwQkksRUFBQUEsU0FBUyxFQUFFLG1CQUFBZ0IsR0FBRztBQUFBLFdBQUlBLEdBQUo7QUFBQSxHQURNO0FBRXBCTCxFQUFBQSxVQUFVLEVBQUUsRUFGUTtBQUdwQlQsRUFBQUEsS0FBSyxFQUFFLEVBSGE7QUFJcEJVLEVBQUFBLFNBQVMsRUFBRTtBQUpTLEM7O2VBb0VUaEIsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0ICcuL2Zvcm1hdHRlZC1pbnB1dC5zY3NzJztcblxubGV0IHVzZXJUeXBpbmcgPSBmYWxzZTtcblxuY2xhc3MgRm9ybWF0dGVkSW5wdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBmb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSksXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBmb3JtYXR0ZXI6IHZhbCA9PiB2YWwsXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgdmFsdWU6ICcnLFxuICAgIGNsYXNzTmFtZTogJycsXG4gIH07XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHsgZm9ybWF0dGVyLCB2YWx1ZTogbmV4dFZhbHVlIH0gPSBuZXh0UHJvcHM7XG4gICAgY29uc3QgeyB2YWx1ZTogcHJldlN0YXRlVmFsdWUgfSA9IHByZXZTdGF0ZTtcblxuICAgIC8vIEZvcm1hdCB2YWx1ZSBpZiBjaGFuZ2UgaXMgbm90IGluaXRpYXRlZCBieSBhIHVzZXIgYW5kIHByZXZpb3VzIHN0YXRlIHZhbHVlIGRpZmZlcnNcbiAgICAvLyBmcm9tIHRoZSBmb3JtYXR0ZWQgdmFsdWVcbiAgICBpZiAoIXVzZXJUeXBpbmcgJiYgcHJldlN0YXRlVmFsdWUgIT09IGZvcm1hdHRlcihuZXh0VmFsdWUpKSB7XG4gICAgICByZXR1cm4geyB2YWx1ZTogZm9ybWF0dGVyKG5leHRWYWx1ZSkgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IHZhbHVlLCBmb3JtYXR0ZXIgfSA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7IHZhbHVlOiBmb3JtYXR0ZXIodmFsdWUpIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdXNlciBsZWF2ZXMgdGhlIGZpZWxkLCBmaXJlcyB0aGUgZm9ybWF0dGVyXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBvbkJsdXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybWF0dGVyLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRhcmdldDogeyB2YWx1ZSB9IH0gPSBlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBmb3JtYXR0ZXIodmFsdWUpIH0sICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKGZvcm1hdHRlcih2YWx1ZSkpO1xuICAgICAgdXNlclR5cGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBpbnB1dCB2YWx1ZSBjaGFuZ2VzLiBcInVzZXJUeXBpbmdcIiBoZWxwcyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICogdG8gZGlzdGluZ3Vpc2ggYSB1c2VyIGluaXRpYXRlZCBjaGFuZ2UgZnJvbSBvdGhlciBvdGhlciB2YWx1ZSBwcm9wIGNoYW5nZXNcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSA9IGU7XG4gICAgdXNlclR5cGluZyA9IHRydWU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSwgKCkgPT4ge1xuICAgICAgb25DaGFuZ2UodmFsdWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlucHV0UHJvcHMsIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0XG4gICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICBjbGFzc05hbWU9e2BvYy1mb3JtYXR0ZWQtaW5wdXQgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJ9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRlZElucHV0O1xuIl19