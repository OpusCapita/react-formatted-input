function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types'; // App imports

import './formatted-input.scss';

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
      var value = formatter(val, true);

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
        className = _this$props3.className,
        onMouseDown = _this$props3.onMouseDown;
    return React.createElement("input", _extends({}, inputProps, {
      className: "oc-formatted-input " + className,
      onChange: this.onChange,
      onBlur: this.onBlur,
      onMouseDown: onMouseDown,
      value: this.state.value
    }));
  };

  return FormattedInput;
}(React.PureComponent);

_defineProperty(FormattedInput, "defaultProps", {
  formatter: function formatter(val) {
    return val;
  },
  onBlur: function onBlur() {},
  onMouseDown: function onMouseDown() {},
  inputProps: {},
  value: '',
  className: '',
  editFormatter: function editFormatter(val) {
    return val;
  }
});

export default FormattedInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkZvcm1hdHRlZElucHV0IiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwibmV4dFByb3BzIiwicHJldlN0YXRlIiwiZm9ybWF0dGVyIiwibmV4dFZhbHVlIiwidmFsdWUiLCJwcmV2UHJvcHNWYWx1ZSIsInVzZXJUeXBpbmciLCJmb3JtYXR0ZWRWYWx1ZSIsInByb3BzIiwiZSIsIm9uQmx1ciIsInZhbCIsInRhcmdldCIsInNldFN0YXRlIiwiZWRpdEZvcm1hdHRlciIsIm9uQ2hhbmdlIiwic3RhdGUiLCJyZW5kZXIiLCJpbnB1dFByb3BzIiwiY2xhc3NOYW1lIiwib25Nb3VzZURvd24iLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCLEMsQ0FFQTs7QUFDQSxPQUFPLHdCQUFQOztJQUVNQyxjOzs7OztpQkFzQkdDLHdCLEdBQVAsa0NBQWdDQyxTQUFoQyxFQUEyQ0MsU0FBM0MsRUFBc0Q7QUFBQSxRQUM1Q0MsU0FENEMsR0FDWkYsU0FEWSxDQUM1Q0UsU0FENEM7QUFBQSxRQUMxQkMsU0FEMEIsR0FDWkgsU0FEWSxDQUNqQ0ksS0FEaUM7QUFBQSxRQUU1Q0MsY0FGNEMsR0FFekJKLFNBRnlCLENBRTVDSSxjQUY0QyxFQUlwRDtBQUNBOztBQUNBLFFBQUksQ0FBQ0osU0FBUyxDQUFDSyxVQUFYLElBQXlCRCxjQUFjLEtBQUtILFNBQVMsQ0FBQ0MsU0FBRCxDQUF6RCxFQUFzRTtBQUNwRSxVQUFNSSxjQUFjLEdBQUdMLFNBQVMsQ0FBQ0MsU0FBRCxDQUFoQztBQUNBLGFBQU87QUFBRUMsUUFBQUEsS0FBSyxFQUFFRyxjQUFUO0FBQXlCRixRQUFBQSxjQUFjLEVBQUVFO0FBQXpDLE9BQVA7QUFDRDs7QUFDRCxXQUFPLElBQVA7QUFDRCxHOztBQUVELDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLDRDQUFNQSxLQUFOOztBQURpQiw2REFjVixVQUFDQyxDQUFELEVBQU87QUFBQSx3QkFDZ0IsTUFBS0QsS0FEckI7QUFBQSxVQUNOTixTQURNLGVBQ05BLFNBRE07QUFBQSxVQUNLUSxNQURMLGVBQ0tBLE1BREw7QUFBQSxVQUVXQyxHQUZYLEdBRXFCRixDQUZyQixDQUVORyxNQUZNLENBRUlSLEtBRko7QUFJZCxVQUFNQSxLQUFLLEdBQUdGLFNBQVMsQ0FBQ1MsR0FBRCxFQUFNLElBQU4sQ0FBdkI7O0FBRUEsWUFBS0UsUUFBTCxDQUFjO0FBQUVULFFBQUFBLEtBQUssRUFBTEE7QUFBRixPQUFkLEVBQXlCLFlBQU07QUFDN0JNLFFBQUFBLE1BQU0sQ0FBQ0MsR0FBRCxDQUFOOztBQUNBLGNBQUtFLFFBQUwsQ0FBYztBQUFBLGlCQUFPO0FBQUVQLFlBQUFBLFVBQVUsRUFBRTtBQUFkLFdBQVA7QUFBQSxTQUFkO0FBQ0QsT0FIRDtBQUlELEtBeEJrQjs7QUFBQSwrREFnQ1IsVUFBQ0csQ0FBRCxFQUFPO0FBQUEseUJBQ29CLE1BQUtELEtBRHpCO0FBQUEsVUFDUk0sYUFEUSxnQkFDUkEsYUFEUTtBQUFBLFVBQ09DLFFBRFAsZ0JBQ09BLFFBRFA7QUFBQSxVQUVFWCxLQUZGLEdBRWNLLENBRmQsQ0FFUkcsTUFGUSxDQUVFUixLQUZGOztBQUloQixZQUFLUyxRQUFMLENBQWM7QUFBRVQsUUFBQUEsS0FBSyxFQUFFVSxhQUFhLENBQUNWLEtBQUQsQ0FBdEI7QUFBK0JFLFFBQUFBLFVBQVUsRUFBRTtBQUEzQyxPQUFkLEVBQWlFLFlBQU07QUFDckVTLFFBQUFBLFFBQVEsQ0FBQ1gsS0FBRCxDQUFSO0FBQ0QsT0FGRDtBQUdELEtBdkNrQjs7QUFBQSxRQUVUQSxNQUZTLEdBRVlJLEtBRlosQ0FFVEosS0FGUztBQUFBLFFBRUZGLFVBRkUsR0FFWU0sS0FGWixDQUVGTixTQUZFO0FBR2pCLFVBQUtjLEtBQUwsR0FBYTtBQUNYWixNQUFBQSxLQUFLLEVBQUVGLFVBQVMsQ0FBQ0UsTUFBRCxDQURMO0FBRVhDLE1BQUFBLGNBQWMsRUFBRSxJQUZMO0FBR1hDLE1BQUFBLFVBQVUsRUFBRTtBQUhELEtBQWI7QUFIaUI7QUFRbEI7QUFFRDs7Ozs7Ozs7U0ErQkFXLE0sR0FBQSxrQkFBUztBQUFBLHVCQUN3QyxLQUFLVCxLQUQ3QztBQUFBLFFBQ0NVLFVBREQsZ0JBQ0NBLFVBREQ7QUFBQSxRQUNhQyxTQURiLGdCQUNhQSxTQURiO0FBQUEsUUFDd0JDLFdBRHhCLGdCQUN3QkEsV0FEeEI7QUFFUCxXQUNFLDBDQUNNRixVQUROO0FBRUUsTUFBQSxTQUFTLDBCQUF3QkMsU0FGbkM7QUFHRSxNQUFBLFFBQVEsRUFBRSxLQUFLSixRQUhqQjtBQUlFLE1BQUEsTUFBTSxFQUFFLEtBQUtMLE1BSmY7QUFLRSxNQUFBLFdBQVcsRUFBRVUsV0FMZjtBQU1FLE1BQUEsS0FBSyxFQUFFLEtBQUtKLEtBQUwsQ0FBV1o7QUFOcEIsT0FERjtBQVVELEc7OztFQXhGMEJSLEtBQUssQ0FBQ3lCLGE7O2dCQUE3QnZCLGMsa0JBWWtCO0FBQ3BCSSxFQUFBQSxTQUFTLEVBQUUsbUJBQUFTLEdBQUc7QUFBQSxXQUFJQSxHQUFKO0FBQUEsR0FETTtBQUVwQkQsRUFBQUEsTUFBTSxFQUFFLGtCQUFNLENBQUUsQ0FGSTtBQUdwQlUsRUFBQUEsV0FBVyxFQUFFLHVCQUFNLENBQUUsQ0FIRDtBQUlwQkYsRUFBQUEsVUFBVSxFQUFFLEVBSlE7QUFLcEJkLEVBQUFBLEtBQUssRUFBRSxFQUxhO0FBTXBCZSxFQUFBQSxTQUFTLEVBQUUsRUFOUztBQU9wQkwsRUFBQUEsYUFBYSxFQUFFLHVCQUFBSCxHQUFHO0FBQUEsV0FBSUEsR0FBSjtBQUFBO0FBUEUsQzs7QUErRXhCLGVBQWViLGNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCAnLi9mb3JtYXR0ZWQtaW5wdXQuc2Nzcyc7XG5cbmNsYXNzIEZvcm1hdHRlZElucHV0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uTW91c2VEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVkaXRGb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZm9ybWF0dGVyOiB2YWwgPT4gdmFsLFxuICAgIG9uQmx1cjogKCkgPT4ge30sXG4gICAgb25Nb3VzZURvd246ICgpID0+IHt9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIHZhbHVlOiAnJyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGVkaXRGb3JtYXR0ZXI6IHZhbCA9PiB2YWwsXG4gIH07XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHsgZm9ybWF0dGVyLCB2YWx1ZTogbmV4dFZhbHVlIH0gPSBuZXh0UHJvcHM7XG4gICAgY29uc3QgeyBwcmV2UHJvcHNWYWx1ZSB9ID0gcHJldlN0YXRlO1xuXG4gICAgLy8gRm9ybWF0IHZhbHVlIGlmIGNoYW5nZSBpcyBub3QgaW5pdGlhdGVkIGJ5IGEgdXNlciBhbmQgcHJldmlvdXMgc3RhdGUgdmFsdWUgZGlmZmVyc1xuICAgIC8vIGZyb20gdGhlIGZvcm1hdHRlZCB2YWx1ZVxuICAgIGlmICghcHJldlN0YXRlLnVzZXJUeXBpbmcgJiYgcHJldlByb3BzVmFsdWUgIT09IGZvcm1hdHRlcihuZXh0VmFsdWUpKSB7XG4gICAgICBjb25zdCBmb3JtYXR0ZWRWYWx1ZSA9IGZvcm1hdHRlcihuZXh0VmFsdWUpO1xuICAgICAgcmV0dXJuIHsgdmFsdWU6IGZvcm1hdHRlZFZhbHVlLCBwcmV2UHJvcHNWYWx1ZTogZm9ybWF0dGVkVmFsdWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IHZhbHVlLCBmb3JtYXR0ZXIgfSA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogZm9ybWF0dGVyKHZhbHVlKSxcbiAgICAgIHByZXZQcm9wc1ZhbHVlOiBudWxsLFxuICAgICAgdXNlclR5cGluZzogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB1c2VyIGxlYXZlcyB0aGUgZmllbGQsIGZpcmVzIHRoZSBmb3JtYXR0ZXJcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uQmx1ciA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtYXR0ZXIsIG9uQmx1ciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRhcmdldDogeyB2YWx1ZTogdmFsIH0gfSA9IGU7XG5cbiAgICBjb25zdCB2YWx1ZSA9IGZvcm1hdHRlcih2YWwsIHRydWUpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0sICgpID0+IHtcbiAgICAgIG9uQmx1cih2YWwpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyB1c2VyVHlwaW5nOiBmYWxzZSB9KSk7XG4gICAgfSk7XG4gIH07XG5cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gaW5wdXQgdmFsdWUgY2hhbmdlcy4gXCJ1c2VyVHlwaW5nXCIgaGVscHMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAqIHRvIGRpc3Rpbmd1aXNoIGEgdXNlciBpbml0aWF0ZWQgY2hhbmdlIGZyb20gb3RoZXIgb3RoZXIgdmFsdWUgcHJvcCBjaGFuZ2VzXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBlZGl0Rm9ybWF0dGVyLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRhcmdldDogeyB2YWx1ZSB9IH0gPSBlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBlZGl0Rm9ybWF0dGVyKHZhbHVlKSwgdXNlclR5cGluZzogdHJ1ZSB9LCAoKSA9PiB7XG4gICAgICBvbkNoYW5nZSh2YWx1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5wdXRQcm9wcywgY2xhc3NOYW1lLCBvbk1vdXNlRG93biB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0XG4gICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICBjbGFzc05hbWU9e2BvYy1mb3JtYXR0ZWQtaW5wdXQgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJ9XG4gICAgICAgIG9uTW91c2VEb3duPXtvbk1vdXNlRG93bn1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0dGVkSW5wdXQ7XG4iXX0=