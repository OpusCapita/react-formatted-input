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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkZvcm1hdHRlZElucHV0IiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwibmV4dFByb3BzIiwicHJldlN0YXRlIiwiZm9ybWF0dGVyIiwibmV4dFZhbHVlIiwidmFsdWUiLCJwcmV2UHJvcHNWYWx1ZSIsInVzZXJUeXBpbmciLCJmb3JtYXR0ZWRWYWx1ZSIsInByb3BzIiwiZSIsIm9uQmx1ciIsInZhbCIsInRhcmdldCIsInNldFN0YXRlIiwiZWRpdEZvcm1hdHRlciIsIm9uQ2hhbmdlIiwic3RhdGUiLCJyZW5kZXIiLCJpbnB1dFByb3BzIiwiY2xhc3NOYW1lIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QixDLENBRUE7O0FBQ0EsT0FBTyx3QkFBUDs7SUFFTUMsYzs7Ozs7aUJBb0JHQyx3QixHQUFQLGtDQUFnQ0MsU0FBaEMsRUFBMkNDLFNBQTNDLEVBQXNEO0FBQUEsUUFDNUNDLFNBRDRDLEdBQ1pGLFNBRFksQ0FDNUNFLFNBRDRDO0FBQUEsUUFDMUJDLFNBRDBCLEdBQ1pILFNBRFksQ0FDakNJLEtBRGlDO0FBQUEsUUFFNUNDLGNBRjRDLEdBRXpCSixTQUZ5QixDQUU1Q0ksY0FGNEMsRUFJcEQ7QUFDQTs7QUFDQSxRQUFJLENBQUNKLFNBQVMsQ0FBQ0ssVUFBWCxJQUF5QkQsY0FBYyxLQUFLSCxTQUFTLENBQUNDLFNBQUQsQ0FBekQsRUFBc0U7QUFDcEUsVUFBTUksY0FBYyxHQUFHTCxTQUFTLENBQUNDLFNBQUQsQ0FBaEM7QUFDQSxhQUFPO0FBQUVDLFFBQUFBLEtBQUssRUFBRUcsY0FBVDtBQUF5QkYsUUFBQUEsY0FBYyxFQUFFRTtBQUF6QyxPQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxJQUFQO0FBQ0QsRzs7QUFFRCwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQiw0Q0FBTUEsS0FBTjs7QUFEaUIsNkRBY1YsVUFBQ0MsQ0FBRCxFQUFPO0FBQUEsd0JBQ2dCLE1BQUtELEtBRHJCO0FBQUEsVUFDTk4sU0FETSxlQUNOQSxTQURNO0FBQUEsVUFDS1EsTUFETCxlQUNLQSxNQURMO0FBQUEsVUFFV0MsR0FGWCxHQUVxQkYsQ0FGckIsQ0FFTkcsTUFGTSxDQUVJUixLQUZKO0FBSWQsVUFBTUEsS0FBSyxHQUFHRixTQUFTLENBQUNTLEdBQUQsRUFBTSxJQUFOLENBQXZCOztBQUVBLFlBQUtFLFFBQUwsQ0FBYztBQUFFVCxRQUFBQSxLQUFLLEVBQUxBO0FBQUYsT0FBZCxFQUF5QixZQUFNO0FBQzdCTSxRQUFBQSxNQUFNLENBQUNDLEdBQUQsQ0FBTjs7QUFDQSxjQUFLRSxRQUFMLENBQWM7QUFBQSxpQkFBTztBQUFFUCxZQUFBQSxVQUFVLEVBQUU7QUFBZCxXQUFQO0FBQUEsU0FBZDtBQUNELE9BSEQ7QUFJRCxLQXhCa0I7O0FBQUEsK0RBZ0NSLFVBQUNHLENBQUQsRUFBTztBQUFBLHlCQUNvQixNQUFLRCxLQUR6QjtBQUFBLFVBQ1JNLGFBRFEsZ0JBQ1JBLGFBRFE7QUFBQSxVQUNPQyxRQURQLGdCQUNPQSxRQURQO0FBQUEsVUFFRVgsS0FGRixHQUVjSyxDQUZkLENBRVJHLE1BRlEsQ0FFRVIsS0FGRjs7QUFJaEIsWUFBS1MsUUFBTCxDQUFjO0FBQUVULFFBQUFBLEtBQUssRUFBRVUsYUFBYSxDQUFDVixLQUFELENBQXRCO0FBQStCRSxRQUFBQSxVQUFVLEVBQUU7QUFBM0MsT0FBZCxFQUFpRSxZQUFNO0FBQ3JFUyxRQUFBQSxRQUFRLENBQUNYLEtBQUQsQ0FBUjtBQUNELE9BRkQ7QUFHRCxLQXZDa0I7O0FBQUEsUUFFVEEsTUFGUyxHQUVZSSxLQUZaLENBRVRKLEtBRlM7QUFBQSxRQUVGRixVQUZFLEdBRVlNLEtBRlosQ0FFRk4sU0FGRTtBQUdqQixVQUFLYyxLQUFMLEdBQWE7QUFDWFosTUFBQUEsS0FBSyxFQUFFRixVQUFTLENBQUNFLE1BQUQsQ0FETDtBQUVYQyxNQUFBQSxjQUFjLEVBQUUsSUFGTDtBQUdYQyxNQUFBQSxVQUFVLEVBQUU7QUFIRCxLQUFiO0FBSGlCO0FBUWxCO0FBRUQ7Ozs7Ozs7O1NBK0JBVyxNLEdBQUEsa0JBQVM7QUFBQSx1QkFDMkIsS0FBS1QsS0FEaEM7QUFBQSxRQUNDVSxVQURELGdCQUNDQSxVQUREO0FBQUEsUUFDYUMsU0FEYixnQkFDYUEsU0FEYjtBQUVQLFdBQ0UsMENBQ01ELFVBRE47QUFFRSxNQUFBLFNBQVMsMEJBQXdCQyxTQUZuQztBQUdFLE1BQUEsUUFBUSxFQUFFLEtBQUtKLFFBSGpCO0FBSUUsTUFBQSxNQUFNLEVBQUUsS0FBS0wsTUFKZjtBQUtFLE1BQUEsS0FBSyxFQUFFLEtBQUtNLEtBQUwsQ0FBV1o7QUFMcEIsT0FERjtBQVNELEc7OztFQXJGMEJSLEtBQUssQ0FBQ3dCLGE7O2dCQUE3QnRCLGMsa0JBV2tCO0FBQ3BCSSxFQUFBQSxTQUFTLEVBQUUsbUJBQUFTLEdBQUc7QUFBQSxXQUFJQSxHQUFKO0FBQUEsR0FETTtBQUVwQkQsRUFBQUEsTUFBTSxFQUFFLGtCQUFNLENBQUUsQ0FGSTtBQUdwQlEsRUFBQUEsVUFBVSxFQUFFLEVBSFE7QUFJcEJkLEVBQUFBLEtBQUssRUFBRSxFQUphO0FBS3BCZSxFQUFBQSxTQUFTLEVBQUUsRUFMUztBQU1wQkwsRUFBQUEsYUFBYSxFQUFFLHVCQUFBSCxHQUFHO0FBQUEsV0FBSUEsR0FBSjtBQUFBO0FBTkUsQzs7QUE2RXhCLGVBQWViLGNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCAnLi9mb3JtYXR0ZWQtaW5wdXQuc2Nzcyc7XG5cbmNsYXNzIEZvcm1hdHRlZElucHV0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZm9ybWF0dGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSksXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZWRpdEZvcm1hdHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBmb3JtYXR0ZXI6IHZhbCA9PiB2YWwsXG4gICAgb25CbHVyOiAoKSA9PiB7fSxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICB2YWx1ZTogJycsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBlZGl0Rm9ybWF0dGVyOiB2YWwgPT4gdmFsLFxuICB9O1xuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBjb25zdCB7IGZvcm1hdHRlciwgdmFsdWU6IG5leHRWYWx1ZSB9ID0gbmV4dFByb3BzO1xuICAgIGNvbnN0IHsgcHJldlByb3BzVmFsdWUgfSA9IHByZXZTdGF0ZTtcblxuICAgIC8vIEZvcm1hdCB2YWx1ZSBpZiBjaGFuZ2UgaXMgbm90IGluaXRpYXRlZCBieSBhIHVzZXIgYW5kIHByZXZpb3VzIHN0YXRlIHZhbHVlIGRpZmZlcnNcbiAgICAvLyBmcm9tIHRoZSBmb3JtYXR0ZWQgdmFsdWVcbiAgICBpZiAoIXByZXZTdGF0ZS51c2VyVHlwaW5nICYmIHByZXZQcm9wc1ZhbHVlICE9PSBmb3JtYXR0ZXIobmV4dFZhbHVlKSkge1xuICAgICAgY29uc3QgZm9ybWF0dGVkVmFsdWUgPSBmb3JtYXR0ZXIobmV4dFZhbHVlKTtcbiAgICAgIHJldHVybiB7IHZhbHVlOiBmb3JtYXR0ZWRWYWx1ZSwgcHJldlByb3BzVmFsdWU6IGZvcm1hdHRlZFZhbHVlIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyB2YWx1ZSwgZm9ybWF0dGVyIH0gPSBwcm9wcztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IGZvcm1hdHRlcih2YWx1ZSksXG4gICAgICBwcmV2UHJvcHNWYWx1ZTogbnVsbCxcbiAgICAgIHVzZXJUeXBpbmc6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdXNlciBsZWF2ZXMgdGhlIGZpZWxkLCBmaXJlcyB0aGUgZm9ybWF0dGVyXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBvbkJsdXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybWF0dGVyLCBvbkJsdXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB0YXJnZXQ6IHsgdmFsdWU6IHZhbCB9IH0gPSBlO1xuXG4gICAgY29uc3QgdmFsdWUgPSBmb3JtYXR0ZXIodmFsLCB0cnVlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9LCAoKSA9PiB7XG4gICAgICBvbkJsdXIodmFsKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgdXNlclR5cGluZzogZmFsc2UgfSkpO1xuICAgIH0pO1xuICB9O1xuXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGlucHV0IHZhbHVlIGNoYW5nZXMuIFwidXNlclR5cGluZ1wiIGhlbHBzIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICAgKiB0byBkaXN0aW5ndWlzaCBhIHVzZXIgaW5pdGlhdGVkIGNoYW5nZSBmcm9tIG90aGVyIG90aGVyIHZhbHVlIHByb3AgY2hhbmdlc1xuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgZWRpdEZvcm1hdHRlciwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB0YXJnZXQ6IHsgdmFsdWUgfSB9ID0gZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZWRpdEZvcm1hdHRlcih2YWx1ZSksIHVzZXJUeXBpbmc6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgb25DaGFuZ2UodmFsdWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlucHV0UHJvcHMsIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0XG4gICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICBjbGFzc05hbWU9e2BvYy1mb3JtYXR0ZWQtaW5wdXQgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJ9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRlZElucHV0O1xuIl19