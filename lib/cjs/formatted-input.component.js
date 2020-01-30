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

var FormattedInput =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(FormattedInput, _React$PureComponent);

  FormattedInput.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var formatter = nextProps.formatter,
        nextValue = nextProps.value;
    var prevPropsValue = prevState.prevPropsValue; // Format value if change is not initiated by a user and previous state value differs
    // from the formatted value

    if (!prevState.userTyping && prevPropsValue !== formatter(nextValue)) {
      var formattedValue = formatter(nextValue);
      return {
        value: formattedValue,
        prevPropsValue: formattedValue
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
        onBlur(val);

        _this.setState(function () {
          return {
            userTyping: false
          };
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var _this$props2 = _this.props,
          editFormatter = _this$props2.editFormatter,
          onChange = _this$props2.onChange;
      var value = e.target.value;

      _this.setState({
        value: editFormatter(value),
        userTyping: true
      }, function () {
        onChange(value);
      });
    });

    var _value = props.value,
        _formatter = props.formatter;
    _this.state = {
      value: _formatter(_value),
      prevPropsValue: null,
      userTyping: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJGb3JtYXR0ZWRJbnB1dCIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm5leHRQcm9wcyIsInByZXZTdGF0ZSIsImZvcm1hdHRlciIsIm5leHRWYWx1ZSIsInZhbHVlIiwicHJldlByb3BzVmFsdWUiLCJ1c2VyVHlwaW5nIiwiZm9ybWF0dGVkVmFsdWUiLCJwcm9wcyIsImUiLCJvbkJsdXIiLCJ2YWwiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsImVkaXRGb3JtYXR0ZXIiLCJvbkNoYW5nZSIsInN0YXRlIiwicmVuZGVyIiwiaW5wdXRQcm9wcyIsImNsYXNzTmFtZSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7O0lBRU1BLGM7Ozs7O2lCQW9CR0Msd0IsR0FBUCxrQ0FBZ0NDLFNBQWhDLEVBQTJDQyxTQUEzQyxFQUFzRDtBQUFBLFFBQzVDQyxTQUQ0QyxHQUNaRixTQURZLENBQzVDRSxTQUQ0QztBQUFBLFFBQzFCQyxTQUQwQixHQUNaSCxTQURZLENBQ2pDSSxLQURpQztBQUFBLFFBRTVDQyxjQUY0QyxHQUV6QkosU0FGeUIsQ0FFNUNJLGNBRjRDLEVBSXBEO0FBQ0E7O0FBQ0EsUUFBSSxDQUFDSixTQUFTLENBQUNLLFVBQVgsSUFBeUJELGNBQWMsS0FBS0gsU0FBUyxDQUFDQyxTQUFELENBQXpELEVBQXNFO0FBQ3BFLFVBQU1JLGNBQWMsR0FBR0wsU0FBUyxDQUFDQyxTQUFELENBQWhDO0FBQ0EsYUFBTztBQUFFQyxRQUFBQSxLQUFLLEVBQUVHLGNBQVQ7QUFBeUJGLFFBQUFBLGNBQWMsRUFBRUU7QUFBekMsT0FBUDtBQUNEOztBQUNELFdBQU8sSUFBUDtBQUNELEc7O0FBRUQsMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsNENBQU1BLEtBQU47O0FBRGlCLDZEQWNWLFVBQUNDLENBQUQsRUFBTztBQUFBLHdCQUNnQixNQUFLRCxLQURyQjtBQUFBLFVBQ05OLFNBRE0sZUFDTkEsU0FETTtBQUFBLFVBQ0tRLE1BREwsZUFDS0EsTUFETDtBQUFBLFVBRVdDLEdBRlgsR0FFcUJGLENBRnJCLENBRU5HLE1BRk0sQ0FFSVIsS0FGSjtBQUlkLFVBQU1BLEtBQUssR0FBR0YsU0FBUyxDQUFDUyxHQUFELENBQXZCOztBQUVBLFlBQUtFLFFBQUwsQ0FBYztBQUFFVCxRQUFBQSxLQUFLLEVBQUxBO0FBQUYsT0FBZCxFQUF5QixZQUFNO0FBQzdCTSxRQUFBQSxNQUFNLENBQUNDLEdBQUQsQ0FBTjs7QUFDQSxjQUFLRSxRQUFMLENBQWM7QUFBQSxpQkFBTztBQUFFUCxZQUFBQSxVQUFVLEVBQUU7QUFBZCxXQUFQO0FBQUEsU0FBZDtBQUNELE9BSEQ7QUFJRCxLQXhCa0I7O0FBQUEsK0RBZ0NSLFVBQUNHLENBQUQsRUFBTztBQUFBLHlCQUNvQixNQUFLRCxLQUR6QjtBQUFBLFVBQ1JNLGFBRFEsZ0JBQ1JBLGFBRFE7QUFBQSxVQUNPQyxRQURQLGdCQUNPQSxRQURQO0FBQUEsVUFFRVgsS0FGRixHQUVjSyxDQUZkLENBRVJHLE1BRlEsQ0FFRVIsS0FGRjs7QUFJaEIsWUFBS1MsUUFBTCxDQUFjO0FBQUVULFFBQUFBLEtBQUssRUFBRVUsYUFBYSxDQUFDVixLQUFELENBQXRCO0FBQStCRSxRQUFBQSxVQUFVLEVBQUU7QUFBM0MsT0FBZCxFQUFpRSxZQUFNO0FBQ3JFUyxRQUFBQSxRQUFRLENBQUNYLEtBQUQsQ0FBUjtBQUNELE9BRkQ7QUFHRCxLQXZDa0I7O0FBQUEsUUFFVEEsTUFGUyxHQUVZSSxLQUZaLENBRVRKLEtBRlM7QUFBQSxRQUVGRixVQUZFLEdBRVlNLEtBRlosQ0FFRk4sU0FGRTtBQUdqQixVQUFLYyxLQUFMLEdBQWE7QUFDWFosTUFBQUEsS0FBSyxFQUFFRixVQUFTLENBQUNFLE1BQUQsQ0FETDtBQUVYQyxNQUFBQSxjQUFjLEVBQUUsSUFGTDtBQUdYQyxNQUFBQSxVQUFVLEVBQUU7QUFIRCxLQUFiO0FBSGlCO0FBUWxCO0FBRUQ7Ozs7Ozs7O1NBK0JBVyxNLEdBQUEsa0JBQVM7QUFBQSx1QkFDMkIsS0FBS1QsS0FEaEM7QUFBQSxRQUNDVSxVQURELGdCQUNDQSxVQUREO0FBQUEsUUFDYUMsU0FEYixnQkFDYUEsU0FEYjtBQUVQLFdBQ0Usc0RBQ01ELFVBRE47QUFFRSxNQUFBLFNBQVMsMEJBQXdCQyxTQUZuQztBQUdFLE1BQUEsUUFBUSxFQUFFLEtBQUtKLFFBSGpCO0FBSUUsTUFBQSxNQUFNLEVBQUUsS0FBS0wsTUFKZjtBQUtFLE1BQUEsS0FBSyxFQUFFLEtBQUtNLEtBQUwsQ0FBV1o7QUFMcEIsT0FERjtBQVNELEc7OztFQXJGMEJnQixrQkFBTUMsYTs7Z0JBQTdCdkIsYyxrQkFXa0I7QUFDcEJJLEVBQUFBLFNBQVMsRUFBRSxtQkFBQVMsR0FBRztBQUFBLFdBQUlBLEdBQUo7QUFBQSxHQURNO0FBRXBCRCxFQUFBQSxNQUFNLEVBQUUsa0JBQU0sQ0FBRSxDQUZJO0FBR3BCUSxFQUFBQSxVQUFVLEVBQUUsRUFIUTtBQUlwQmQsRUFBQUEsS0FBSyxFQUFFLEVBSmE7QUFLcEJlLEVBQUFBLFNBQVMsRUFBRSxFQUxTO0FBTXBCTCxFQUFBQSxhQUFhLEVBQUUsdUJBQUFILEdBQUc7QUFBQSxXQUFJQSxHQUFKO0FBQUE7QUFORSxDOztlQTZFVGIsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0ICcuL2Zvcm1hdHRlZC1pbnB1dC5zY3NzJztcblxuY2xhc3MgRm9ybWF0dGVkSW5wdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBmb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlZGl0Rm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGZvcm1hdHRlcjogdmFsID0+IHZhbCxcbiAgICBvbkJsdXI6ICgpID0+IHt9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIHZhbHVlOiAnJyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGVkaXRGb3JtYXR0ZXI6IHZhbCA9PiB2YWwsXG4gIH07XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHsgZm9ybWF0dGVyLCB2YWx1ZTogbmV4dFZhbHVlIH0gPSBuZXh0UHJvcHM7XG4gICAgY29uc3QgeyBwcmV2UHJvcHNWYWx1ZSB9ID0gcHJldlN0YXRlO1xuXG4gICAgLy8gRm9ybWF0IHZhbHVlIGlmIGNoYW5nZSBpcyBub3QgaW5pdGlhdGVkIGJ5IGEgdXNlciBhbmQgcHJldmlvdXMgc3RhdGUgdmFsdWUgZGlmZmVyc1xuICAgIC8vIGZyb20gdGhlIGZvcm1hdHRlZCB2YWx1ZVxuICAgIGlmICghcHJldlN0YXRlLnVzZXJUeXBpbmcgJiYgcHJldlByb3BzVmFsdWUgIT09IGZvcm1hdHRlcihuZXh0VmFsdWUpKSB7XG4gICAgICBjb25zdCBmb3JtYXR0ZWRWYWx1ZSA9IGZvcm1hdHRlcihuZXh0VmFsdWUpO1xuICAgICAgcmV0dXJuIHsgdmFsdWU6IGZvcm1hdHRlZFZhbHVlLCBwcmV2UHJvcHNWYWx1ZTogZm9ybWF0dGVkVmFsdWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IHZhbHVlLCBmb3JtYXR0ZXIgfSA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogZm9ybWF0dGVyKHZhbHVlKSxcbiAgICAgIHByZXZQcm9wc1ZhbHVlOiBudWxsLFxuICAgICAgdXNlclR5cGluZzogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB1c2VyIGxlYXZlcyB0aGUgZmllbGQsIGZpcmVzIHRoZSBmb3JtYXR0ZXJcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uQmx1ciA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtYXR0ZXIsIG9uQmx1ciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRhcmdldDogeyB2YWx1ZTogdmFsIH0gfSA9IGU7XG5cbiAgICBjb25zdCB2YWx1ZSA9IGZvcm1hdHRlcih2YWwpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0sICgpID0+IHtcbiAgICAgIG9uQmx1cih2YWwpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyB1c2VyVHlwaW5nOiBmYWxzZSB9KSk7XG4gICAgfSk7XG4gIH07XG5cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gaW5wdXQgdmFsdWUgY2hhbmdlcy4gXCJ1c2VyVHlwaW5nXCIgaGVscHMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAqIHRvIGRpc3Rpbmd1aXNoIGEgdXNlciBpbml0aWF0ZWQgY2hhbmdlIGZyb20gb3RoZXIgb3RoZXIgdmFsdWUgcHJvcCBjaGFuZ2VzXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBlZGl0Rm9ybWF0dGVyLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRhcmdldDogeyB2YWx1ZSB9IH0gPSBlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBlZGl0Rm9ybWF0dGVyKHZhbHVlKSwgdXNlclR5cGluZzogdHJ1ZSB9LCAoKSA9PiB7XG4gICAgICBvbkNoYW5nZSh2YWx1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5wdXRQcm9wcywgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXRcbiAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgIGNsYXNzTmFtZT17YG9jLWZvcm1hdHRlZC1pbnB1dCAke2NsYXNzTmFtZX1gfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0dGVkSW5wdXQ7XG4iXX0=