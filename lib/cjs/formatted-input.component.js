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
    console.log(inputProps);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJ1c2VyVHlwaW5nIiwiRm9ybWF0dGVkSW5wdXQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXh0UHJvcHMiLCJwcmV2U3RhdGUiLCJmb3JtYXR0ZXIiLCJuZXh0VmFsdWUiLCJ2YWx1ZSIsInByZXZTdGF0ZVZhbHVlIiwicHJvcHMiLCJlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInN0YXRlIiwicmVuZGVyIiwiaW5wdXRQcm9wcyIsImNsYXNzTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJvbkJsdXIiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVUsR0FBRyxLQUFqQjs7SUFFTUMsYzs7Ozs7aUJBZ0JHQyx3QixHQUFQLGtDQUFnQ0MsU0FBaEMsRUFBMkNDLFNBQTNDLEVBQXNEO0FBQUEsUUFDNUNDLFNBRDRDLEdBQ1pGLFNBRFksQ0FDNUNFLFNBRDRDO0FBQUEsUUFDMUJDLFNBRDBCLEdBQ1pILFNBRFksQ0FDakNJLEtBRGlDO0FBQUEsUUFFckNDLGNBRnFDLEdBRWxCSixTQUZrQixDQUU1Q0csS0FGNEMsRUFJcEQ7QUFDQTs7QUFDQSxRQUFJLENBQUNQLFVBQUQsSUFBZVEsY0FBYyxLQUFLSCxTQUFTLENBQUNDLFNBQUQsQ0FBL0MsRUFBNEQ7QUFDMUQsYUFBTztBQUFFQyxRQUFBQSxLQUFLLEVBQUVGLFNBQVMsQ0FBQ0MsU0FBRDtBQUFsQixPQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxJQUFQO0FBQ0QsRzs7QUFFRCwwQkFBWUcsS0FBWixFQUFtQjtBQUFBOztBQUNqQiw0Q0FBTUEsS0FBTjs7QUFEaUIsNkRBVVYsVUFBQ0MsQ0FBRCxFQUFPO0FBQUEsd0JBQ2tCLE1BQUtELEtBRHZCO0FBQUEsVUFDTkosU0FETSxlQUNOQSxTQURNO0FBQUEsVUFDS00sUUFETCxlQUNLQSxRQURMO0FBQUEsVUFFSUosS0FGSixHQUVnQkcsQ0FGaEIsQ0FFTkUsTUFGTSxDQUVJTCxLQUZKOztBQUlkLFlBQUtNLFFBQUwsQ0FBYztBQUFFTixRQUFBQSxLQUFLLEVBQUVGLFNBQVMsQ0FBQ0UsS0FBRDtBQUFsQixPQUFkLEVBQTJDLFlBQU07QUFDL0NJLFFBQUFBLFFBQVEsQ0FBQ04sU0FBUyxDQUFDRSxLQUFELENBQVYsQ0FBUjtBQUNBUCxRQUFBQSxVQUFVLEdBQUcsS0FBYjtBQUNELE9BSEQ7QUFJRCxLQWxCa0I7O0FBQUEsK0RBeUJSLFVBQUNVLENBQUQsRUFBTztBQUFBLFVBQ1JDLFFBRFEsR0FDSyxNQUFLRixLQURWLENBQ1JFLFFBRFE7QUFBQSxVQUVFSixLQUZGLEdBRWNHLENBRmQsQ0FFUkUsTUFGUSxDQUVFTCxLQUZGO0FBR2hCUCxNQUFBQSxVQUFVLEdBQUcsSUFBYjs7QUFFQSxZQUFLYSxRQUFMLENBQWM7QUFBRU4sUUFBQUEsS0FBSyxFQUFMQTtBQUFGLE9BQWQsRUFBeUIsWUFBTTtBQUM3QkksUUFBQUEsUUFBUSxDQUFDSixLQUFELENBQVI7QUFDRCxPQUZEO0FBR0QsS0FqQ2tCOztBQUFBLFFBRVRBLE1BRlMsR0FFWUUsS0FGWixDQUVURixLQUZTO0FBQUEsUUFFRkYsVUFGRSxHQUVZSSxLQUZaLENBRUZKLFNBRkU7QUFHakIsVUFBS1MsS0FBTCxHQUFhO0FBQUVQLE1BQUFBLEtBQUssRUFBRUYsVUFBUyxDQUFDRSxNQUFEO0FBQWxCLEtBQWI7QUFIaUI7QUFJbEI7QUFFRDs7Ozs7Ozs7U0E2QkFRLE0sR0FBQSxrQkFBUztBQUFBLHVCQUMyQixLQUFLTixLQURoQztBQUFBLFFBQ0NPLFVBREQsZ0JBQ0NBLFVBREQ7QUFBQSxRQUNhQyxTQURiLGdCQUNhQSxTQURiO0FBRVBDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxVQUFaO0FBQ0EsV0FDRSxtREFDTUEsVUFETjtBQUVFLE1BQUEsU0FBUywwQkFBd0JDLFNBRm5DO0FBR0UsTUFBQSxRQUFRLEVBQUUsS0FBS04sUUFIakI7QUFJRSxNQUFBLE1BQU0sRUFBRSxLQUFLUyxNQUpmO0FBS0UsTUFBQSxLQUFLLEVBQUUsS0FBS04sS0FBTCxDQUFXUDtBQUxwQixPQURGO0FBU0QsRzs7O0VBM0UwQmMsZUFBTUMsYTs7Z0JBQTdCckIsYyxrQkFTa0I7QUFDcEJJLEVBQUFBLFNBQVMsRUFBRSxtQkFBQWtCLEdBQUc7QUFBQSxXQUFJQSxHQUFKO0FBQUEsR0FETTtBQUVwQlAsRUFBQUEsVUFBVSxFQUFFLEVBRlE7QUFHcEJULEVBQUFBLEtBQUssRUFBRSxFQUhhO0FBSXBCVSxFQUFBQSxTQUFTLEVBQUU7QUFKUyxDOztlQXFFVGhCLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCAnLi9mb3JtYXR0ZWQtaW5wdXQuc2Nzcyc7XG5cbmxldCB1c2VyVHlwaW5nID0gZmFsc2U7XG5cbmNsYXNzIEZvcm1hdHRlZElucHV0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZm9ybWF0dGVyOiB2YWwgPT4gdmFsLFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIHZhbHVlOiAnJyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICB9O1xuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBjb25zdCB7IGZvcm1hdHRlciwgdmFsdWU6IG5leHRWYWx1ZSB9ID0gbmV4dFByb3BzO1xuICAgIGNvbnN0IHsgdmFsdWU6IHByZXZTdGF0ZVZhbHVlIH0gPSBwcmV2U3RhdGU7XG5cbiAgICAvLyBGb3JtYXQgdmFsdWUgaWYgY2hhbmdlIGlzIG5vdCBpbml0aWF0ZWQgYnkgYSB1c2VyIGFuZCBwcmV2aW91cyBzdGF0ZSB2YWx1ZSBkaWZmZXJzXG4gICAgLy8gZnJvbSB0aGUgZm9ybWF0dGVkIHZhbHVlXG4gICAgaWYgKCF1c2VyVHlwaW5nICYmIHByZXZTdGF0ZVZhbHVlICE9PSBmb3JtYXR0ZXIobmV4dFZhbHVlKSkge1xuICAgICAgcmV0dXJuIHsgdmFsdWU6IGZvcm1hdHRlcihuZXh0VmFsdWUpIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyB2YWx1ZSwgZm9ybWF0dGVyIH0gPSBwcm9wcztcbiAgICB0aGlzLnN0YXRlID0geyB2YWx1ZTogZm9ybWF0dGVyKHZhbHVlKSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHVzZXIgbGVhdmVzIHRoZSBmaWVsZCwgZmlyZXMgdGhlIGZvcm1hdHRlclxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgb25CbHVyID0gKGUpID0+IHtcbiAgICBjb25zdCB7IGZvcm1hdHRlciwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB0YXJnZXQ6IHsgdmFsdWUgfSB9ID0gZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZm9ybWF0dGVyKHZhbHVlKSB9LCAoKSA9PiB7XG4gICAgICBvbkNoYW5nZShmb3JtYXR0ZXIodmFsdWUpKTtcbiAgICAgIHVzZXJUeXBpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gaW5wdXQgdmFsdWUgY2hhbmdlcy4gXCJ1c2VyVHlwaW5nXCIgaGVscHMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAqIHRvIGRpc3Rpbmd1aXNoIGEgdXNlciBpbml0aWF0ZWQgY2hhbmdlIGZyb20gb3RoZXIgb3RoZXIgdmFsdWUgcHJvcCBjaGFuZ2VzXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRhcmdldDogeyB2YWx1ZSB9IH0gPSBlO1xuICAgIHVzZXJUeXBpbmcgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0sICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbnB1dFByb3BzLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2coaW5wdXRQcm9wcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dFxuICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgY2xhc3NOYW1lPXtgb2MtZm9ybWF0dGVkLWlucHV0ICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0ZWRJbnB1dDtcbiJdfQ==