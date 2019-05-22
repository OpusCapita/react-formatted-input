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
    console.log(inputProps);
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
  className: ''
});

export default FormattedInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInVzZXJUeXBpbmciLCJGb3JtYXR0ZWRJbnB1dCIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm5leHRQcm9wcyIsInByZXZTdGF0ZSIsImZvcm1hdHRlciIsIm5leHRWYWx1ZSIsInZhbHVlIiwicHJldlN0YXRlVmFsdWUiLCJwcm9wcyIsImUiLCJvbkNoYW5nZSIsInRhcmdldCIsInNldFN0YXRlIiwic3RhdGUiLCJyZW5kZXIiLCJpbnB1dFByb3BzIiwiY2xhc3NOYW1lIiwiY29uc29sZSIsImxvZyIsIm9uQmx1ciIsIlB1cmVDb21wb25lbnQiLCJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEIsQyxDQUVBOztBQUNBLE9BQU8sd0JBQVA7QUFFQSxJQUFJQyxVQUFVLEdBQUcsS0FBakI7O0lBRU1DLGM7Ozs7O2lCQWdCR0Msd0IsR0FBUCxrQ0FBZ0NDLFNBQWhDLEVBQTJDQyxTQUEzQyxFQUFzRDtBQUFBLFFBQzVDQyxTQUQ0QyxHQUNaRixTQURZLENBQzVDRSxTQUQ0QztBQUFBLFFBQzFCQyxTQUQwQixHQUNaSCxTQURZLENBQ2pDSSxLQURpQztBQUFBLFFBRXJDQyxjQUZxQyxHQUVsQkosU0FGa0IsQ0FFNUNHLEtBRjRDLEVBSXBEO0FBQ0E7O0FBQ0EsUUFBSSxDQUFDUCxVQUFELElBQWVRLGNBQWMsS0FBS0gsU0FBUyxDQUFDQyxTQUFELENBQS9DLEVBQTREO0FBQzFELGFBQU87QUFBRUMsUUFBQUEsS0FBSyxFQUFFRixTQUFTLENBQUNDLFNBQUQ7QUFBbEIsT0FBUDtBQUNEOztBQUNELFdBQU8sSUFBUDtBQUNELEc7O0FBRUQsMEJBQVlHLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsNENBQU1BLEtBQU47O0FBRGlCLDZEQVVWLFVBQUNDLENBQUQsRUFBTztBQUFBLHdCQUNrQixNQUFLRCxLQUR2QjtBQUFBLFVBQ05KLFNBRE0sZUFDTkEsU0FETTtBQUFBLFVBQ0tNLFFBREwsZUFDS0EsUUFETDtBQUFBLFVBRUlKLEtBRkosR0FFZ0JHLENBRmhCLENBRU5FLE1BRk0sQ0FFSUwsS0FGSjs7QUFJZCxZQUFLTSxRQUFMLENBQWM7QUFBRU4sUUFBQUEsS0FBSyxFQUFFRixTQUFTLENBQUNFLEtBQUQ7QUFBbEIsT0FBZCxFQUEyQyxZQUFNO0FBQy9DSSxRQUFBQSxRQUFRLENBQUNOLFNBQVMsQ0FBQ0UsS0FBRCxDQUFWLENBQVI7QUFDQVAsUUFBQUEsVUFBVSxHQUFHLEtBQWI7QUFDRCxPQUhEO0FBSUQsS0FsQmtCOztBQUFBLCtEQXlCUixVQUFDVSxDQUFELEVBQU87QUFBQSxVQUNSQyxRQURRLEdBQ0ssTUFBS0YsS0FEVixDQUNSRSxRQURRO0FBQUEsVUFFRUosS0FGRixHQUVjRyxDQUZkLENBRVJFLE1BRlEsQ0FFRUwsS0FGRjtBQUdoQlAsTUFBQUEsVUFBVSxHQUFHLElBQWI7O0FBRUEsWUFBS2EsUUFBTCxDQUFjO0FBQUVOLFFBQUFBLEtBQUssRUFBTEE7QUFBRixPQUFkLEVBQXlCLFlBQU07QUFDN0JJLFFBQUFBLFFBQVEsQ0FBQ0osS0FBRCxDQUFSO0FBQ0QsT0FGRDtBQUdELEtBakNrQjs7QUFBQSxRQUVUQSxNQUZTLEdBRVlFLEtBRlosQ0FFVEYsS0FGUztBQUFBLFFBRUZGLFVBRkUsR0FFWUksS0FGWixDQUVGSixTQUZFO0FBR2pCLFVBQUtTLEtBQUwsR0FBYTtBQUFFUCxNQUFBQSxLQUFLLEVBQUVGLFVBQVMsQ0FBQ0UsTUFBRDtBQUFsQixLQUFiO0FBSGlCO0FBSWxCO0FBRUQ7Ozs7Ozs7O1NBNkJBUSxNLEdBQUEsa0JBQVM7QUFBQSx1QkFDMkIsS0FBS04sS0FEaEM7QUFBQSxRQUNDTyxVQURELGdCQUNDQSxVQUREO0FBQUEsUUFDYUMsU0FEYixnQkFDYUEsU0FEYjtBQUVQQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsVUFBWjtBQUNBLFdBQ0UsMENBQ01BLFVBRE47QUFFRSxNQUFBLFNBQVMsMEJBQXdCQyxTQUZuQztBQUdFLE1BQUEsUUFBUSxFQUFFLEtBQUtOLFFBSGpCO0FBSUUsTUFBQSxNQUFNLEVBQUUsS0FBS1MsTUFKZjtBQUtFLE1BQUEsS0FBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBV1A7QUFMcEIsT0FERjtBQVNELEc7OztFQTNFMEJULEtBQUssQ0FBQ3VCLGE7O2dCQUE3QnBCLGMsa0JBU2tCO0FBQ3BCSSxFQUFBQSxTQUFTLEVBQUUsbUJBQUFpQixHQUFHO0FBQUEsV0FBSUEsR0FBSjtBQUFBLEdBRE07QUFFcEJOLEVBQUFBLFVBQVUsRUFBRSxFQUZRO0FBR3BCVCxFQUFBQSxLQUFLLEVBQUUsRUFIYTtBQUlwQlUsRUFBQUEsU0FBUyxFQUFFO0FBSlMsQzs7QUFxRXhCLGVBQWVoQixjQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgJy4vZm9ybWF0dGVkLWlucHV0LnNjc3MnO1xuXG5sZXQgdXNlclR5cGluZyA9IGZhbHNlO1xuXG5jbGFzcyBGb3JtYXR0ZWRJbnB1dCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZvcm1hdHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGZvcm1hdHRlcjogdmFsID0+IHZhbCxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICB2YWx1ZTogJycsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgY29uc3QgeyBmb3JtYXR0ZXIsIHZhbHVlOiBuZXh0VmFsdWUgfSA9IG5leHRQcm9wcztcbiAgICBjb25zdCB7IHZhbHVlOiBwcmV2U3RhdGVWYWx1ZSB9ID0gcHJldlN0YXRlO1xuXG4gICAgLy8gRm9ybWF0IHZhbHVlIGlmIGNoYW5nZSBpcyBub3QgaW5pdGlhdGVkIGJ5IGEgdXNlciBhbmQgcHJldmlvdXMgc3RhdGUgdmFsdWUgZGlmZmVyc1xuICAgIC8vIGZyb20gdGhlIGZvcm1hdHRlZCB2YWx1ZVxuICAgIGlmICghdXNlclR5cGluZyAmJiBwcmV2U3RhdGVWYWx1ZSAhPT0gZm9ybWF0dGVyKG5leHRWYWx1ZSkpIHtcbiAgICAgIHJldHVybiB7IHZhbHVlOiBmb3JtYXR0ZXIobmV4dFZhbHVlKSB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgdmFsdWUsIGZvcm1hdHRlciB9ID0gcHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWU6IGZvcm1hdHRlcih2YWx1ZSkgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB1c2VyIGxlYXZlcyB0aGUgZmllbGQsIGZpcmVzIHRoZSBmb3JtYXR0ZXJcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uQmx1ciA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtYXR0ZXIsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSA9IGU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGZvcm1hdHRlcih2YWx1ZSkgfSwgKCkgPT4ge1xuICAgICAgb25DaGFuZ2UoZm9ybWF0dGVyKHZhbHVlKSk7XG4gICAgICB1c2VyVHlwaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGlucHV0IHZhbHVlIGNoYW5nZXMuIFwidXNlclR5cGluZ1wiIGhlbHBzIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICAgKiB0byBkaXN0aW5ndWlzaCBhIHVzZXIgaW5pdGlhdGVkIGNoYW5nZSBmcm9tIG90aGVyIG90aGVyIHZhbHVlIHByb3AgY2hhbmdlc1xuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB0YXJnZXQ6IHsgdmFsdWUgfSB9ID0gZTtcbiAgICB1c2VyVHlwaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9LCAoKSA9PiB7XG4gICAgICBvbkNoYW5nZSh2YWx1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5wdXRQcm9wcywgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnNvbGUubG9nKGlucHV0UHJvcHMpO1xuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXRcbiAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgIGNsYXNzTmFtZT17YG9jLWZvcm1hdHRlZC1pbnB1dCAke2NsYXNzTmFtZX1gfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0dGVkSW5wdXQ7XG4iXX0=