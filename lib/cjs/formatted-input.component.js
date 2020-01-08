"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./formatted-input.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
          onBlur = _this$props.onBlur;
      var val = e.target.value;
      var value = formatter(val);

      _this.setState({
        value: value
      }, function () {
        userTyping = false;
        onBlur(val);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var _this$props2 = _this.props,
          editFormatter = _this$props2.editFormatter,
          onChange = _this$props2.onChange;
      var value = e.target.value;
      userTyping = true;

      _this.setState({
        value: editFormatter(value)
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
    var _this$props3 = this.props,
        inputProps = _this$props3.inputProps,
        className = _this$props3.className;
    return _react["default"].createElement("input", _extends({}, inputProps, {
      className: "oc-formatted-input " + className,
      onChange: this.onChange,
      onBlur: this.onBlur,
      value: this.state.value
    }));
  };

  return FormattedInput;
}(_react["default"].PureComponent);

_defineProperty(FormattedInput, "defaultProps", {
  formatter: function formatter(val) {
    return val;
  },
  onBlur: function onBlur() {},
  inputProps: {},
  value: '',
  className: '',
  editFormatter: function editFormatter(val) {
    return val;
  }
});

var _default = FormattedInput;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJ1c2VyVHlwaW5nIiwiRm9ybWF0dGVkSW5wdXQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXh0UHJvcHMiLCJwcmV2U3RhdGUiLCJmb3JtYXR0ZXIiLCJuZXh0VmFsdWUiLCJ2YWx1ZSIsInByZXZTdGF0ZVZhbHVlIiwicHJvcHMiLCJlIiwib25CbHVyIiwidmFsIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJlZGl0Rm9ybWF0dGVyIiwib25DaGFuZ2UiLCJzdGF0ZSIsInJlbmRlciIsImlucHV0UHJvcHMiLCJjbGFzc05hbWUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVUsR0FBRyxLQUFqQjs7SUFFTUMsYzs7Ozs7aUJBb0JHQyx3QixHQUFQLGtDQUFnQ0MsU0FBaEMsRUFBMkNDLFNBQTNDLEVBQXNEO0FBQUEsUUFDNUNDLFNBRDRDLEdBQ1pGLFNBRFksQ0FDNUNFLFNBRDRDO0FBQUEsUUFDMUJDLFNBRDBCLEdBQ1pILFNBRFksQ0FDakNJLEtBRGlDO0FBQUEsUUFFckNDLGNBRnFDLEdBRWxCSixTQUZrQixDQUU1Q0csS0FGNEMsRUFJcEQ7QUFDQTs7QUFDQSxRQUFJLENBQUNQLFVBQUQsSUFBZVEsY0FBYyxLQUFLSCxTQUFTLENBQUNDLFNBQUQsQ0FBL0MsRUFBNEQ7QUFDMUQsYUFBTztBQUFFQyxRQUFBQSxLQUFLLEVBQUVGLFNBQVMsQ0FBQ0MsU0FBRDtBQUFsQixPQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxJQUFQO0FBQ0QsRzs7QUFFRCwwQkFBWUcsS0FBWixFQUFtQjtBQUFBOztBQUNqQiw0Q0FBTUEsS0FBTjs7QUFEaUIsNkRBVVYsVUFBQ0MsQ0FBRCxFQUFPO0FBQUEsd0JBQ2dCLE1BQUtELEtBRHJCO0FBQUEsVUFDTkosU0FETSxlQUNOQSxTQURNO0FBQUEsVUFDS00sTUFETCxlQUNLQSxNQURMO0FBQUEsVUFFV0MsR0FGWCxHQUVxQkYsQ0FGckIsQ0FFTkcsTUFGTSxDQUVJTixLQUZKO0FBSWQsVUFBTUEsS0FBSyxHQUFHRixTQUFTLENBQUNPLEdBQUQsQ0FBdkI7O0FBRUEsWUFBS0UsUUFBTCxDQUFjO0FBQUVQLFFBQUFBLEtBQUssRUFBTEE7QUFBRixPQUFkLEVBQXlCLFlBQU07QUFDN0JQLFFBQUFBLFVBQVUsR0FBRyxLQUFiO0FBQ0FXLFFBQUFBLE1BQU0sQ0FBQ0MsR0FBRCxDQUFOO0FBQ0QsT0FIRDtBQUlELEtBcEJrQjs7QUFBQSwrREEyQlIsVUFBQ0YsQ0FBRCxFQUFPO0FBQUEseUJBQ29CLE1BQUtELEtBRHpCO0FBQUEsVUFDUk0sYUFEUSxnQkFDUkEsYUFEUTtBQUFBLFVBQ09DLFFBRFAsZ0JBQ09BLFFBRFA7QUFBQSxVQUVFVCxLQUZGLEdBRWNHLENBRmQsQ0FFUkcsTUFGUSxDQUVFTixLQUZGO0FBR2hCUCxNQUFBQSxVQUFVLEdBQUcsSUFBYjs7QUFFQSxZQUFLYyxRQUFMLENBQWM7QUFBRVAsUUFBQUEsS0FBSyxFQUFFUSxhQUFhLENBQUNSLEtBQUQ7QUFBdEIsT0FBZCxFQUErQyxZQUFNO0FBQ25EUyxRQUFBQSxRQUFRLENBQUNULEtBQUQsQ0FBUjtBQUNELE9BRkQ7QUFHRCxLQW5Da0I7O0FBQUEsUUFFVEEsTUFGUyxHQUVZRSxLQUZaLENBRVRGLEtBRlM7QUFBQSxRQUVGRixVQUZFLEdBRVlJLEtBRlosQ0FFRkosU0FGRTtBQUdqQixVQUFLWSxLQUFMLEdBQWE7QUFBRVYsTUFBQUEsS0FBSyxFQUFFRixVQUFTLENBQUNFLE1BQUQ7QUFBbEIsS0FBYjtBQUhpQjtBQUlsQjtBQUVEOzs7Ozs7OztTQStCQVcsTSxHQUFBLGtCQUFTO0FBQUEsdUJBQzJCLEtBQUtULEtBRGhDO0FBQUEsUUFDQ1UsVUFERCxnQkFDQ0EsVUFERDtBQUFBLFFBQ2FDLFNBRGIsZ0JBQ2FBLFNBRGI7QUFFUCxXQUNFLHNEQUNNRCxVQUROO0FBRUUsTUFBQSxTQUFTLDBCQUF3QkMsU0FGbkM7QUFHRSxNQUFBLFFBQVEsRUFBRSxLQUFLSixRQUhqQjtBQUlFLE1BQUEsTUFBTSxFQUFFLEtBQUtMLE1BSmY7QUFLRSxNQUFBLEtBQUssRUFBRSxLQUFLTSxLQUFMLENBQVdWO0FBTHBCLE9BREY7QUFTRCxHOzs7RUFoRjBCYyxrQkFBTUMsYTs7Z0JBQTdCckIsYyxrQkFXa0I7QUFDcEJJLEVBQUFBLFNBQVMsRUFBRSxtQkFBQU8sR0FBRztBQUFBLFdBQUlBLEdBQUo7QUFBQSxHQURNO0FBRXBCRCxFQUFBQSxNQUFNLEVBQUUsa0JBQU0sQ0FBRSxDQUZJO0FBR3BCUSxFQUFBQSxVQUFVLEVBQUUsRUFIUTtBQUlwQlosRUFBQUEsS0FBSyxFQUFFLEVBSmE7QUFLcEJhLEVBQUFBLFNBQVMsRUFBRSxFQUxTO0FBTXBCTCxFQUFBQSxhQUFhLEVBQUUsdUJBQUFILEdBQUc7QUFBQSxXQUFJQSxHQUFKO0FBQUE7QUFORSxDOztlQXdFVFgsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0ICcuL2Zvcm1hdHRlZC1pbnB1dC5zY3NzJztcblxubGV0IHVzZXJUeXBpbmcgPSBmYWxzZTtcblxuY2xhc3MgRm9ybWF0dGVkSW5wdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBmb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlZGl0Rm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGZvcm1hdHRlcjogdmFsID0+IHZhbCxcbiAgICBvbkJsdXI6ICgpID0+IHt9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIHZhbHVlOiAnJyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGVkaXRGb3JtYXR0ZXI6IHZhbCA9PiB2YWwsXG4gIH07XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHsgZm9ybWF0dGVyLCB2YWx1ZTogbmV4dFZhbHVlIH0gPSBuZXh0UHJvcHM7XG4gICAgY29uc3QgeyB2YWx1ZTogcHJldlN0YXRlVmFsdWUgfSA9IHByZXZTdGF0ZTtcblxuICAgIC8vIEZvcm1hdCB2YWx1ZSBpZiBjaGFuZ2UgaXMgbm90IGluaXRpYXRlZCBieSBhIHVzZXIgYW5kIHByZXZpb3VzIHN0YXRlIHZhbHVlIGRpZmZlcnNcbiAgICAvLyBmcm9tIHRoZSBmb3JtYXR0ZWQgdmFsdWVcbiAgICBpZiAoIXVzZXJUeXBpbmcgJiYgcHJldlN0YXRlVmFsdWUgIT09IGZvcm1hdHRlcihuZXh0VmFsdWUpKSB7XG4gICAgICByZXR1cm4geyB2YWx1ZTogZm9ybWF0dGVyKG5leHRWYWx1ZSkgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IHZhbHVlLCBmb3JtYXR0ZXIgfSA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7IHZhbHVlOiBmb3JtYXR0ZXIodmFsdWUpIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdXNlciBsZWF2ZXMgdGhlIGZpZWxkLCBmaXJlcyB0aGUgZm9ybWF0dGVyXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBvbkJsdXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybWF0dGVyLCBvbkJsdXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB0YXJnZXQ6IHsgdmFsdWU6IHZhbCB9IH0gPSBlO1xuXG4gICAgY29uc3QgdmFsdWUgPSBmb3JtYXR0ZXIodmFsKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9LCAoKSA9PiB7XG4gICAgICB1c2VyVHlwaW5nID0gZmFsc2U7XG4gICAgICBvbkJsdXIodmFsKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gaW5wdXQgdmFsdWUgY2hhbmdlcy4gXCJ1c2VyVHlwaW5nXCIgaGVscHMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAqIHRvIGRpc3Rpbmd1aXNoIGEgdXNlciBpbml0aWF0ZWQgY2hhbmdlIGZyb20gb3RoZXIgb3RoZXIgdmFsdWUgcHJvcCBjaGFuZ2VzXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBlZGl0Rm9ybWF0dGVyLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRhcmdldDogeyB2YWx1ZSB9IH0gPSBlO1xuICAgIHVzZXJUeXBpbmcgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBlZGl0Rm9ybWF0dGVyKHZhbHVlKSB9LCAoKSA9PiB7XG4gICAgICBvbkNoYW5nZSh2YWx1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5wdXRQcm9wcywgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXRcbiAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgIGNsYXNzTmFtZT17YG9jLWZvcm1hdHRlZC1pbnB1dCAke2NsYXNzTmFtZX1gfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0dGVkSW5wdXQ7XG4iXX0=