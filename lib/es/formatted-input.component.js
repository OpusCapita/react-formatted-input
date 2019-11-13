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
          onBlur = _this$props.onBlur;
      var val = e.target.value;
      var value = formatter(val);

      _this.setState({
        value: value
      }, function () {
        userTyping = false;
        onBlur(value);
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
  onBlur: function onBlur() {},
  inputProps: {},
  value: '',
  className: '',
  editFormatter: function editFormatter(val) {
    return val;
  }
});

export default FormattedInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInVzZXJUeXBpbmciLCJGb3JtYXR0ZWRJbnB1dCIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm5leHRQcm9wcyIsInByZXZTdGF0ZSIsImZvcm1hdHRlciIsIm5leHRWYWx1ZSIsInZhbHVlIiwicHJldlN0YXRlVmFsdWUiLCJwcm9wcyIsImUiLCJvbkJsdXIiLCJ2YWwiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsImVkaXRGb3JtYXR0ZXIiLCJvbkNoYW5nZSIsInN0YXRlIiwicmVuZGVyIiwiaW5wdXRQcm9wcyIsImNsYXNzTmFtZSIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEIsQyxDQUVBOztBQUNBLE9BQU8sd0JBQVA7QUFFQSxJQUFJQyxVQUFVLEdBQUcsS0FBakI7O0lBRU1DLGM7Ozs7O2lCQW9CR0Msd0IsR0FBUCxrQ0FBZ0NDLFNBQWhDLEVBQTJDQyxTQUEzQyxFQUFzRDtBQUFBLFFBQzVDQyxTQUQ0QyxHQUNaRixTQURZLENBQzVDRSxTQUQ0QztBQUFBLFFBQzFCQyxTQUQwQixHQUNaSCxTQURZLENBQ2pDSSxLQURpQztBQUFBLFFBRXJDQyxjQUZxQyxHQUVsQkosU0FGa0IsQ0FFNUNHLEtBRjRDLEVBSXBEO0FBQ0E7O0FBQ0EsUUFBSSxDQUFDUCxVQUFELElBQWVRLGNBQWMsS0FBS0gsU0FBUyxDQUFDQyxTQUFELENBQS9DLEVBQTREO0FBQzFELGFBQU87QUFBRUMsUUFBQUEsS0FBSyxFQUFFRixTQUFTLENBQUNDLFNBQUQ7QUFBbEIsT0FBUDtBQUNEOztBQUNELFdBQU8sSUFBUDtBQUNELEc7O0FBRUQsMEJBQVlHLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsNENBQU1BLEtBQU47O0FBRGlCLDZEQVVWLFVBQUNDLENBQUQsRUFBTztBQUFBLHdCQUNnQixNQUFLRCxLQURyQjtBQUFBLFVBQ05KLFNBRE0sZUFDTkEsU0FETTtBQUFBLFVBQ0tNLE1BREwsZUFDS0EsTUFETDtBQUFBLFVBRVdDLEdBRlgsR0FFcUJGLENBRnJCLENBRU5HLE1BRk0sQ0FFSU4sS0FGSjtBQUlkLFVBQU1BLEtBQUssR0FBR0YsU0FBUyxDQUFDTyxHQUFELENBQXZCOztBQUVBLFlBQUtFLFFBQUwsQ0FBYztBQUFFUCxRQUFBQSxLQUFLLEVBQUxBO0FBQUYsT0FBZCxFQUF5QixZQUFNO0FBQzdCUCxRQUFBQSxVQUFVLEdBQUcsS0FBYjtBQUNBVyxRQUFBQSxNQUFNLENBQUNKLEtBQUQsQ0FBTjtBQUNELE9BSEQ7QUFJRCxLQXBCa0I7O0FBQUEsK0RBMkJSLFVBQUNHLENBQUQsRUFBTztBQUFBLHlCQUNvQixNQUFLRCxLQUR6QjtBQUFBLFVBQ1JNLGFBRFEsZ0JBQ1JBLGFBRFE7QUFBQSxVQUNPQyxRQURQLGdCQUNPQSxRQURQO0FBQUEsVUFFRVQsS0FGRixHQUVjRyxDQUZkLENBRVJHLE1BRlEsQ0FFRU4sS0FGRjtBQUdoQlAsTUFBQUEsVUFBVSxHQUFHLElBQWI7O0FBRUEsWUFBS2MsUUFBTCxDQUFjO0FBQUVQLFFBQUFBLEtBQUssRUFBRVEsYUFBYSxDQUFDUixLQUFEO0FBQXRCLE9BQWQsRUFBK0MsWUFBTTtBQUNuRFMsUUFBQUEsUUFBUSxDQUFDVCxLQUFELENBQVI7QUFDRCxPQUZEO0FBR0QsS0FuQ2tCOztBQUFBLFFBRVRBLE1BRlMsR0FFWUUsS0FGWixDQUVURixLQUZTO0FBQUEsUUFFRkYsVUFGRSxHQUVZSSxLQUZaLENBRUZKLFNBRkU7QUFHakIsVUFBS1ksS0FBTCxHQUFhO0FBQUVWLE1BQUFBLEtBQUssRUFBRUYsVUFBUyxDQUFDRSxNQUFEO0FBQWxCLEtBQWI7QUFIaUI7QUFJbEI7QUFFRDs7Ozs7Ozs7U0ErQkFXLE0sR0FBQSxrQkFBUztBQUFBLHVCQUMyQixLQUFLVCxLQURoQztBQUFBLFFBQ0NVLFVBREQsZ0JBQ0NBLFVBREQ7QUFBQSxRQUNhQyxTQURiLGdCQUNhQSxTQURiO0FBRVAsV0FDRSwwQ0FDTUQsVUFETjtBQUVFLE1BQUEsU0FBUywwQkFBd0JDLFNBRm5DO0FBR0UsTUFBQSxRQUFRLEVBQUUsS0FBS0osUUFIakI7QUFJRSxNQUFBLE1BQU0sRUFBRSxLQUFLTCxNQUpmO0FBS0UsTUFBQSxLQUFLLEVBQUUsS0FBS00sS0FBTCxDQUFXVjtBQUxwQixPQURGO0FBU0QsRzs7O0VBaEYwQlQsS0FBSyxDQUFDdUIsYTs7Z0JBQTdCcEIsYyxrQkFXa0I7QUFDcEJJLEVBQUFBLFNBQVMsRUFBRSxtQkFBQU8sR0FBRztBQUFBLFdBQUlBLEdBQUo7QUFBQSxHQURNO0FBRXBCRCxFQUFBQSxNQUFNLEVBQUUsa0JBQU0sQ0FBRSxDQUZJO0FBR3BCUSxFQUFBQSxVQUFVLEVBQUUsRUFIUTtBQUlwQlosRUFBQUEsS0FBSyxFQUFFLEVBSmE7QUFLcEJhLEVBQUFBLFNBQVMsRUFBRSxFQUxTO0FBTXBCTCxFQUFBQSxhQUFhLEVBQUUsdUJBQUFILEdBQUc7QUFBQSxXQUFJQSxHQUFKO0FBQUE7QUFORSxDOztBQXdFeEIsZUFBZVgsY0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0ICcuL2Zvcm1hdHRlZC1pbnB1dC5zY3NzJztcblxubGV0IHVzZXJUeXBpbmcgPSBmYWxzZTtcblxuY2xhc3MgRm9ybWF0dGVkSW5wdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBmb3JtYXR0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlZGl0Rm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGZvcm1hdHRlcjogdmFsID0+IHZhbCxcbiAgICBvbkJsdXI6ICgpID0+IHt9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIHZhbHVlOiAnJyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGVkaXRGb3JtYXR0ZXI6IHZhbCA9PiB2YWwsXG4gIH07XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHsgZm9ybWF0dGVyLCB2YWx1ZTogbmV4dFZhbHVlIH0gPSBuZXh0UHJvcHM7XG4gICAgY29uc3QgeyB2YWx1ZTogcHJldlN0YXRlVmFsdWUgfSA9IHByZXZTdGF0ZTtcblxuICAgIC8vIEZvcm1hdCB2YWx1ZSBpZiBjaGFuZ2UgaXMgbm90IGluaXRpYXRlZCBieSBhIHVzZXIgYW5kIHByZXZpb3VzIHN0YXRlIHZhbHVlIGRpZmZlcnNcbiAgICAvLyBmcm9tIHRoZSBmb3JtYXR0ZWQgdmFsdWVcbiAgICBpZiAoIXVzZXJUeXBpbmcgJiYgcHJldlN0YXRlVmFsdWUgIT09IGZvcm1hdHRlcihuZXh0VmFsdWUpKSB7XG4gICAgICByZXR1cm4geyB2YWx1ZTogZm9ybWF0dGVyKG5leHRWYWx1ZSkgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IHZhbHVlLCBmb3JtYXR0ZXIgfSA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7IHZhbHVlOiBmb3JtYXR0ZXIodmFsdWUpIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdXNlciBsZWF2ZXMgdGhlIGZpZWxkLCBmaXJlcyB0aGUgZm9ybWF0dGVyXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBvbkJsdXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybWF0dGVyLCBvbkJsdXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB0YXJnZXQ6IHsgdmFsdWU6IHZhbCB9IH0gPSBlO1xuXG4gICAgY29uc3QgdmFsdWUgPSBmb3JtYXR0ZXIodmFsKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9LCAoKSA9PiB7XG4gICAgICB1c2VyVHlwaW5nID0gZmFsc2U7XG4gICAgICBvbkJsdXIodmFsdWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBpbnB1dCB2YWx1ZSBjaGFuZ2VzLiBcInVzZXJUeXBpbmdcIiBoZWxwcyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICogdG8gZGlzdGluZ3Vpc2ggYSB1c2VyIGluaXRpYXRlZCBjaGFuZ2UgZnJvbSBvdGhlciBvdGhlciB2YWx1ZSBwcm9wIGNoYW5nZXNcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IGVkaXRGb3JtYXR0ZXIsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSA9IGU7XG4gICAgdXNlclR5cGluZyA9IHRydWU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGVkaXRGb3JtYXR0ZXIodmFsdWUpIH0sICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbnB1dFByb3BzLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dFxuICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgY2xhc3NOYW1lPXtgb2MtZm9ybWF0dGVkLWlucHV0ICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0ZWRJbnB1dDtcbiJdfQ==