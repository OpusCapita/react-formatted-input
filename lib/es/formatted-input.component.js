function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types'; // App imports

import './formatted-input.scss';
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
    return React.createElement("input", _extends({}, inputProps, {
      className: "oc-formatted-input " + className,
      onChange: this.onChange,
      onBlur: this.onBlur,
      value: this.state.value
    }));
  };

  return FormattedInput;
}(React.PureComponent);

_defineProperty(FormattedInput, "defaultProps", {
  formatter: function formatter(val) {
    return val;
  },
  inputProps: {},
  value: '',
  className: undefined
});

export default FormattedInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInVzZXJUeXBpbmciLCJGb3JtYXR0ZWRJbnB1dCIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm5leHRQcm9wcyIsInByZXZTdGF0ZSIsImZvcm1hdHRlciIsIm5leHRWYWx1ZSIsInZhbHVlIiwicHJldlN0YXRlVmFsdWUiLCJwcm9wcyIsImUiLCJvbkNoYW5nZSIsInRhcmdldCIsInNldFN0YXRlIiwic3RhdGUiLCJyZW5kZXIiLCJpbnB1dFByb3BzIiwiY2xhc3NOYW1lIiwib25CbHVyIiwiUHVyZUNvbXBvbmVudCIsInZhbCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QixDLENBRUE7O0FBQ0EsT0FBTyx3QkFBUDtBQUVBLElBQUlDLFVBQVUsR0FBRyxLQUFqQjs7SUFFTUMsYzs7Ozs7aUJBZ0JHQyx3QixHQUFQLGtDQUFnQ0MsU0FBaEMsRUFBMkNDLFNBQTNDLEVBQXNEO0FBQUEsUUFDNUNDLFNBRDRDLEdBQ1pGLFNBRFksQ0FDNUNFLFNBRDRDO0FBQUEsUUFDMUJDLFNBRDBCLEdBQ1pILFNBRFksQ0FDakNJLEtBRGlDO0FBQUEsUUFFckNDLGNBRnFDLEdBRWxCSixTQUZrQixDQUU1Q0csS0FGNEMsRUFJcEQ7QUFDQTs7QUFDQSxRQUFJLENBQUNQLFVBQUQsSUFBZVEsY0FBYyxLQUFLSCxTQUFTLENBQUNDLFNBQUQsQ0FBL0MsRUFBNEQ7QUFDMUQsYUFBTztBQUFFQyxRQUFBQSxLQUFLLEVBQUVGLFNBQVMsQ0FBQ0MsU0FBRDtBQUFsQixPQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxJQUFQO0FBQ0QsRzs7QUFFRCwwQkFBWUcsS0FBWixFQUFtQjtBQUFBOztBQUNqQiw0Q0FBTUEsS0FBTjs7QUFEaUIsNkRBVVYsVUFBQ0MsQ0FBRCxFQUFPO0FBQUEsd0JBQ2tCLE1BQUtELEtBRHZCO0FBQUEsVUFDTkosU0FETSxlQUNOQSxTQURNO0FBQUEsVUFDS00sUUFETCxlQUNLQSxRQURMO0FBQUEsVUFFSUosS0FGSixHQUVnQkcsQ0FGaEIsQ0FFTkUsTUFGTSxDQUVJTCxLQUZKOztBQUlkLFlBQUtNLFFBQUwsQ0FBYztBQUFFTixRQUFBQSxLQUFLLEVBQUVGLFNBQVMsQ0FBQ0UsS0FBRDtBQUFsQixPQUFkLEVBQTJDLFlBQU07QUFDL0NJLFFBQUFBLFFBQVEsQ0FBQ04sU0FBUyxDQUFDRSxLQUFELENBQVYsQ0FBUjtBQUNBUCxRQUFBQSxVQUFVLEdBQUcsS0FBYjtBQUNELE9BSEQ7QUFJRCxLQWxCa0I7O0FBQUEsK0RBeUJSLFVBQUNVLENBQUQsRUFBTztBQUFBLFVBQ1JDLFFBRFEsR0FDSyxNQUFLRixLQURWLENBQ1JFLFFBRFE7QUFBQSxVQUVFSixLQUZGLEdBRWNHLENBRmQsQ0FFUkUsTUFGUSxDQUVFTCxLQUZGO0FBR2hCUCxNQUFBQSxVQUFVLEdBQUcsSUFBYjs7QUFFQSxZQUFLYSxRQUFMLENBQWM7QUFBRU4sUUFBQUEsS0FBSyxFQUFMQTtBQUFGLE9BQWQsRUFBeUIsWUFBTTtBQUM3QkksUUFBQUEsUUFBUSxDQUFDSixLQUFELENBQVI7QUFDRCxPQUZEO0FBR0QsS0FqQ2tCOztBQUFBLFFBRVRBLE1BRlMsR0FFWUUsS0FGWixDQUVURixLQUZTO0FBQUEsUUFFRkYsVUFGRSxHQUVZSSxLQUZaLENBRUZKLFNBRkU7QUFHakIsVUFBS1MsS0FBTCxHQUFhO0FBQUVQLE1BQUFBLEtBQUssRUFBRUYsVUFBUyxDQUFDRSxNQUFEO0FBQWxCLEtBQWI7QUFIaUI7QUFJbEI7QUFFRDs7Ozs7Ozs7U0E2QkFRLE0sR0FBQSxrQkFBUztBQUFBLHVCQUMyQixLQUFLTixLQURoQztBQUFBLFFBQ0NPLFVBREQsZ0JBQ0NBLFVBREQ7QUFBQSxRQUNhQyxTQURiLGdCQUNhQSxTQURiO0FBRVAsV0FDRSwwQ0FDTUQsVUFETjtBQUVFLE1BQUEsU0FBUywwQkFBd0JDLFNBRm5DO0FBR0UsTUFBQSxRQUFRLEVBQUUsS0FBS04sUUFIakI7QUFJRSxNQUFBLE1BQU0sRUFBRSxLQUFLTyxNQUpmO0FBS0UsTUFBQSxLQUFLLEVBQUUsS0FBS0osS0FBTCxDQUFXUDtBQUxwQixPQURGO0FBU0QsRzs7O0VBMUUwQlQsS0FBSyxDQUFDcUIsYTs7Z0JBQTdCbEIsYyxrQkFTa0I7QUFDcEJJLEVBQUFBLFNBQVMsRUFBRSxtQkFBQWUsR0FBRztBQUFBLFdBQUlBLEdBQUo7QUFBQSxHQURNO0FBRXBCSixFQUFBQSxVQUFVLEVBQUUsRUFGUTtBQUdwQlQsRUFBQUEsS0FBSyxFQUFFLEVBSGE7QUFJcEJVLEVBQUFBLFNBQVMsRUFBRUk7QUFKUyxDOztBQW9FeEIsZUFBZXBCLGNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCAnLi9mb3JtYXR0ZWQtaW5wdXQuc2Nzcyc7XG5cbmxldCB1c2VyVHlwaW5nID0gZmFsc2U7XG5cbmNsYXNzIEZvcm1hdHRlZElucHV0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXIpLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGZvcm1hdHRlcjogdmFsID0+IHZhbCxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICB2YWx1ZTogJycsXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIH07XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHsgZm9ybWF0dGVyLCB2YWx1ZTogbmV4dFZhbHVlIH0gPSBuZXh0UHJvcHM7XG4gICAgY29uc3QgeyB2YWx1ZTogcHJldlN0YXRlVmFsdWUgfSA9IHByZXZTdGF0ZTtcblxuICAgIC8vIEZvcm1hdCB2YWx1ZSBpZiBjaGFuZ2UgaXMgbm90IGluaXRpYXRlZCBieSBhIHVzZXIgYW5kIHByZXZpb3VzIHN0YXRlIHZhbHVlIGRpZmZlcnNcbiAgICAvLyBmcm9tIHRoZSBmb3JtYXR0ZWQgdmFsdWVcbiAgICBpZiAoIXVzZXJUeXBpbmcgJiYgcHJldlN0YXRlVmFsdWUgIT09IGZvcm1hdHRlcihuZXh0VmFsdWUpKSB7XG4gICAgICByZXR1cm4geyB2YWx1ZTogZm9ybWF0dGVyKG5leHRWYWx1ZSkgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IHZhbHVlLCBmb3JtYXR0ZXIgfSA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7IHZhbHVlOiBmb3JtYXR0ZXIodmFsdWUpIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdXNlciBsZWF2ZXMgdGhlIGZpZWxkLCBmaXJlcyB0aGUgZm9ybWF0dGVyXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBvbkJsdXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybWF0dGVyLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRhcmdldDogeyB2YWx1ZSB9IH0gPSBlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBmb3JtYXR0ZXIodmFsdWUpIH0sICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKGZvcm1hdHRlcih2YWx1ZSkpO1xuICAgICAgdXNlclR5cGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBpbnB1dCB2YWx1ZSBjaGFuZ2VzLiBcInVzZXJUeXBpbmdcIiBoZWxwcyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICogdG8gZGlzdGluZ3Vpc2ggYSB1c2VyIGluaXRpYXRlZCBjaGFuZ2UgZnJvbSBvdGhlciBvdGhlciB2YWx1ZSBwcm9wIGNoYW5nZXNcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSA9IGU7XG4gICAgdXNlclR5cGluZyA9IHRydWU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSwgKCkgPT4ge1xuICAgICAgb25DaGFuZ2UodmFsdWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlucHV0UHJvcHMsIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0XG4gICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICBjbGFzc05hbWU9e2BvYy1mb3JtYXR0ZWQtaW5wdXQgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJ9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRlZElucHV0O1xuIl19