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
  onBlur: function onBlur() {},
  inputProps: {},
  value: '',
  className: '',
  editFormatter: function editFormatter(val) {
    return val;
  }
});

var _default = FormattedInput;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJ1c2VyVHlwaW5nIiwiRm9ybWF0dGVkSW5wdXQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXh0UHJvcHMiLCJwcmV2U3RhdGUiLCJmb3JtYXR0ZXIiLCJuZXh0VmFsdWUiLCJ2YWx1ZSIsInByZXZTdGF0ZVZhbHVlIiwicHJvcHMiLCJlIiwib25CbHVyIiwidmFsIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJlZGl0Rm9ybWF0dGVyIiwib25DaGFuZ2UiLCJzdGF0ZSIsInJlbmRlciIsImlucHV0UHJvcHMiLCJjbGFzc05hbWUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVUsR0FBRyxLQUFqQjs7SUFFTUMsYzs7Ozs7aUJBb0JHQyx3QixHQUFQLGtDQUFnQ0MsU0FBaEMsRUFBMkNDLFNBQTNDLEVBQXNEO0FBQUEsUUFDNUNDLFNBRDRDLEdBQ1pGLFNBRFksQ0FDNUNFLFNBRDRDO0FBQUEsUUFDMUJDLFNBRDBCLEdBQ1pILFNBRFksQ0FDakNJLEtBRGlDO0FBQUEsUUFFckNDLGNBRnFDLEdBRWxCSixTQUZrQixDQUU1Q0csS0FGNEMsRUFJcEQ7QUFDQTs7QUFDQSxRQUFJLENBQUNQLFVBQUQsSUFBZVEsY0FBYyxLQUFLSCxTQUFTLENBQUNDLFNBQUQsQ0FBL0MsRUFBNEQ7QUFDMUQsYUFBTztBQUFFQyxRQUFBQSxLQUFLLEVBQUVGLFNBQVMsQ0FBQ0MsU0FBRDtBQUFsQixPQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxJQUFQO0FBQ0QsRzs7QUFFRCwwQkFBWUcsS0FBWixFQUFtQjtBQUFBOztBQUNqQiw0Q0FBTUEsS0FBTjs7QUFEaUIsNkRBVVYsVUFBQ0MsQ0FBRCxFQUFPO0FBQUEsd0JBQ2dCLE1BQUtELEtBRHJCO0FBQUEsVUFDTkosU0FETSxlQUNOQSxTQURNO0FBQUEsVUFDS00sTUFETCxlQUNLQSxNQURMO0FBQUEsVUFFV0MsR0FGWCxHQUVxQkYsQ0FGckIsQ0FFTkcsTUFGTSxDQUVJTixLQUZKO0FBSWQsVUFBTUEsS0FBSyxHQUFHRixTQUFTLENBQUNPLEdBQUQsQ0FBdkI7O0FBRUEsWUFBS0UsUUFBTCxDQUFjO0FBQUVQLFFBQUFBLEtBQUssRUFBTEE7QUFBRixPQUFkLEVBQXlCLFlBQU07QUFDN0JQLFFBQUFBLFVBQVUsR0FBRyxLQUFiO0FBQ0FXLFFBQUFBLE1BQU0sQ0FBQ0MsR0FBRCxDQUFOO0FBQ0QsT0FIRDtBQUlELEtBcEJrQjs7QUFBQSwrREEyQlIsVUFBQ0YsQ0FBRCxFQUFPO0FBQUEseUJBQ29CLE1BQUtELEtBRHpCO0FBQUEsVUFDUk0sYUFEUSxnQkFDUkEsYUFEUTtBQUFBLFVBQ09DLFFBRFAsZ0JBQ09BLFFBRFA7QUFBQSxVQUVFVCxLQUZGLEdBRWNHLENBRmQsQ0FFUkcsTUFGUSxDQUVFTixLQUZGO0FBR2hCUCxNQUFBQSxVQUFVLEdBQUcsSUFBYjs7QUFFQSxZQUFLYyxRQUFMLENBQWM7QUFBRVAsUUFBQUEsS0FBSyxFQUFFUSxhQUFhLENBQUNSLEtBQUQ7QUFBdEIsT0FBZCxFQUErQyxZQUFNO0FBQ25EUyxRQUFBQSxRQUFRLENBQUNULEtBQUQsQ0FBUjtBQUNELE9BRkQ7QUFHRCxLQW5Da0I7O0FBQUEsUUFFVEEsTUFGUyxHQUVZRSxLQUZaLENBRVRGLEtBRlM7QUFBQSxRQUVGRixVQUZFLEdBRVlJLEtBRlosQ0FFRkosU0FGRTtBQUdqQixVQUFLWSxLQUFMLEdBQWE7QUFBRVYsTUFBQUEsS0FBSyxFQUFFRixVQUFTLENBQUNFLE1BQUQ7QUFBbEIsS0FBYjtBQUhpQjtBQUlsQjtBQUVEOzs7Ozs7OztTQStCQVcsTSxHQUFBLGtCQUFTO0FBQUEsdUJBQzJCLEtBQUtULEtBRGhDO0FBQUEsUUFDQ1UsVUFERCxnQkFDQ0EsVUFERDtBQUFBLFFBQ2FDLFNBRGIsZ0JBQ2FBLFNBRGI7QUFFUCxXQUNFLG1EQUNNRCxVQUROO0FBRUUsTUFBQSxTQUFTLDBCQUF3QkMsU0FGbkM7QUFHRSxNQUFBLFFBQVEsRUFBRSxLQUFLSixRQUhqQjtBQUlFLE1BQUEsTUFBTSxFQUFFLEtBQUtMLE1BSmY7QUFLRSxNQUFBLEtBQUssRUFBRSxLQUFLTSxLQUFMLENBQVdWO0FBTHBCLE9BREY7QUFTRCxHOzs7RUFoRjBCYyxlQUFNQyxhOztnQkFBN0JyQixjLGtCQVdrQjtBQUNwQkksRUFBQUEsU0FBUyxFQUFFLG1CQUFBTyxHQUFHO0FBQUEsV0FBSUEsR0FBSjtBQUFBLEdBRE07QUFFcEJELEVBQUFBLE1BQU0sRUFBRSxrQkFBTSxDQUFFLENBRkk7QUFHcEJRLEVBQUFBLFVBQVUsRUFBRSxFQUhRO0FBSXBCWixFQUFBQSxLQUFLLEVBQUUsRUFKYTtBQUtwQmEsRUFBQUEsU0FBUyxFQUFFLEVBTFM7QUFNcEJMLEVBQUFBLGFBQWEsRUFBRSx1QkFBQUgsR0FBRztBQUFBLFdBQUlBLEdBQUo7QUFBQTtBQU5FLEM7O2VBd0VUWCxjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgJy4vZm9ybWF0dGVkLWlucHV0LnNjc3MnO1xuXG5sZXQgdXNlclR5cGluZyA9IGZhbHNlO1xuXG5jbGFzcyBGb3JtYXR0ZWRJbnB1dCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZvcm1hdHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVkaXRGb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZm9ybWF0dGVyOiB2YWwgPT4gdmFsLFxuICAgIG9uQmx1cjogKCkgPT4ge30sXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgdmFsdWU6ICcnLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgZWRpdEZvcm1hdHRlcjogdmFsID0+IHZhbCxcbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgY29uc3QgeyBmb3JtYXR0ZXIsIHZhbHVlOiBuZXh0VmFsdWUgfSA9IG5leHRQcm9wcztcbiAgICBjb25zdCB7IHZhbHVlOiBwcmV2U3RhdGVWYWx1ZSB9ID0gcHJldlN0YXRlO1xuXG4gICAgLy8gRm9ybWF0IHZhbHVlIGlmIGNoYW5nZSBpcyBub3QgaW5pdGlhdGVkIGJ5IGEgdXNlciBhbmQgcHJldmlvdXMgc3RhdGUgdmFsdWUgZGlmZmVyc1xuICAgIC8vIGZyb20gdGhlIGZvcm1hdHRlZCB2YWx1ZVxuICAgIGlmICghdXNlclR5cGluZyAmJiBwcmV2U3RhdGVWYWx1ZSAhPT0gZm9ybWF0dGVyKG5leHRWYWx1ZSkpIHtcbiAgICAgIHJldHVybiB7IHZhbHVlOiBmb3JtYXR0ZXIobmV4dFZhbHVlKSB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgdmFsdWUsIGZvcm1hdHRlciB9ID0gcHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWU6IGZvcm1hdHRlcih2YWx1ZSkgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB1c2VyIGxlYXZlcyB0aGUgZmllbGQsIGZpcmVzIHRoZSBmb3JtYXR0ZXJcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uQmx1ciA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtYXR0ZXIsIG9uQmx1ciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRhcmdldDogeyB2YWx1ZTogdmFsIH0gfSA9IGU7XG5cbiAgICBjb25zdCB2YWx1ZSA9IGZvcm1hdHRlcih2YWwpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0sICgpID0+IHtcbiAgICAgIHVzZXJUeXBpbmcgPSBmYWxzZTtcbiAgICAgIG9uQmx1cih2YWwpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBpbnB1dCB2YWx1ZSBjaGFuZ2VzLiBcInVzZXJUeXBpbmdcIiBoZWxwcyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICogdG8gZGlzdGluZ3Vpc2ggYSB1c2VyIGluaXRpYXRlZCBjaGFuZ2UgZnJvbSBvdGhlciBvdGhlciB2YWx1ZSBwcm9wIGNoYW5nZXNcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IGVkaXRGb3JtYXR0ZXIsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSA9IGU7XG4gICAgdXNlclR5cGluZyA9IHRydWU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGVkaXRGb3JtYXR0ZXIodmFsdWUpIH0sICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbnB1dFByb3BzLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dFxuICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgY2xhc3NOYW1lPXtgb2MtZm9ybWF0dGVkLWlucHV0ICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0ZWRJbnB1dDtcbiJdfQ==