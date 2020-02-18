function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { formatCurrencyAmount } from '@opuscapita/format-utils'; // App imports

import FormattedInput from './formatted-input.component';

var FormattedInputCurrency =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(FormattedInputCurrency, _React$PureComponent);

  function FormattedInputCurrency() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "formatter", function (val) {
      var _this$props = _this.props,
          currency = _this$props.currency,
          decimals = _this$props.decimals,
          thousandSeparator = _this$props.thousandSeparator,
          decimalSeparator = _this$props.decimalSeparator;
      if (val === undefined || val === null || val === '') return '';
      var value = formatCurrencyAmount(val, {
        currency: currency,
        decimals: decimals,
        thousandSeparator: thousandSeparator,
        decimalSeparator: decimalSeparator
      });
      return Number.isNaN(value) ? formatCurrencyAmount(0, {
        decimals: decimals,
        thousandSeparator: thousandSeparator,
        decimalSeparator: decimalSeparator
      }) : value;
    });

    _defineProperty(_assertThisInitialized(_this), "editFormatter", function (val) {
      var _this$props2 = _this.props,
          thousandSeparator = _this$props2.thousandSeparator,
          decimalSeparator = _this$props2.decimalSeparator;
      if (val === undefined || val === null || val === '') return ''; // - or + are not formatted

      if (val.length <= 1) return val;
      var decimalSeparatorIndex = val.lastIndexOf(decimalSeparator);
      var decimals = decimalSeparatorIndex > -1 ? val.length - decimalSeparatorIndex - 1 : 0;
      var value = formatCurrencyAmount(val, {
        decimals: decimals,
        thousandSeparator: thousandSeparator,
        decimalSeparator: decimalSeparator
      }); // this avoids minus sign removal in the editing phase like this: 0.00 --> -0.00 --> -10.00

      if (val === "-" + value) return val;

      if (Number.isNaN(value)) {
        return formatCurrencyAmount(0, {
          decimals: decimals,
          thousandSeparator: thousandSeparator,
          decimalSeparator: decimalSeparator
        });
      }

      if (decimalSeparatorIndex > -1 && decimals === 0) return "" + value + decimalSeparator;
      return value;
    });

    return _this;
  }

  var _proto = FormattedInputCurrency.prototype;

  _proto.render = function render() {
    var _this$props3 = this.props,
        onBlur = _this$props3.onBlur,
        onChange = _this$props3.onChange,
        value = _this$props3.value,
        inputProps = _this$props3.inputProps,
        className = _this$props3.className;
    return React.createElement(FormattedInput, {
      onBlur: onBlur,
      onChange: onChange,
      editFormatter: this.editFormatter,
      formatter: this.formatter,
      className: className,
      value: value,
      inputProps: inputProps
    });
  };

  return FormattedInputCurrency;
}(React.PureComponent);

_defineProperty(FormattedInputCurrency, "defaultProps", {
  decimals: undefined,
  thousandSeparator: undefined,
  decimalSeparator: '.',
  value: '',
  inputProps: undefined,
  className: '',
  onBlur: function onBlur() {}
});

export default FormattedInputCurrency;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImZvcm1hdEN1cnJlbmN5QW1vdW50IiwiRm9ybWF0dGVkSW5wdXQiLCJGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IiwidmFsIiwicHJvcHMiLCJjdXJyZW5jeSIsImRlY2ltYWxzIiwidGhvdXNhbmRTZXBhcmF0b3IiLCJkZWNpbWFsU2VwYXJhdG9yIiwidW5kZWZpbmVkIiwidmFsdWUiLCJOdW1iZXIiLCJpc05hTiIsImxlbmd0aCIsImRlY2ltYWxTZXBhcmF0b3JJbmRleCIsImxhc3RJbmRleE9mIiwicmVuZGVyIiwib25CbHVyIiwib25DaGFuZ2UiLCJpbnB1dFByb3BzIiwiY2xhc3NOYW1lIiwiZWRpdEZvcm1hdHRlciIsImZvcm1hdHRlciIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0Msb0JBQVQsUUFBcUMsMEJBQXJDLEMsQ0FFQTs7QUFDQSxPQUFPQyxjQUFQLE1BQTJCLDZCQUEzQjs7SUFFTUMsc0I7Ozs7Ozs7Ozs7Ozs7O2dFQTRCUSxVQUFDQyxHQUFELEVBQVM7QUFBQSx3QkFHZixNQUFLQyxLQUhVO0FBQUEsVUFFakJDLFFBRmlCLGVBRWpCQSxRQUZpQjtBQUFBLFVBRVBDLFFBRk8sZUFFUEEsUUFGTztBQUFBLFVBRUdDLGlCQUZILGVBRUdBLGlCQUZIO0FBQUEsVUFFc0JDLGdCQUZ0QixlQUVzQkEsZ0JBRnRCO0FBS25CLFVBQUlMLEdBQUcsS0FBS00sU0FBUixJQUFxQk4sR0FBRyxLQUFLLElBQTdCLElBQXFDQSxHQUFHLEtBQUssRUFBakQsRUFBcUQsT0FBTyxFQUFQO0FBRXJELFVBQU1PLEtBQUssR0FBR1Ysb0JBQW9CLENBQUNHLEdBQUQsRUFBTTtBQUN0Q0UsUUFBQUEsUUFBUSxFQUFSQSxRQURzQztBQUM1QkMsUUFBQUEsUUFBUSxFQUFSQSxRQUQ0QjtBQUNsQkMsUUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFEa0I7QUFDQ0MsUUFBQUEsZ0JBQWdCLEVBQWhCQTtBQURELE9BQU4sQ0FBbEM7QUFJQSxhQUFPRyxNQUFNLENBQUNDLEtBQVAsQ0FBYUYsS0FBYixJQUNIVixvQkFBb0IsQ0FBQyxDQUFELEVBQUk7QUFBRU0sUUFBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlDLFFBQUFBLGlCQUFpQixFQUFqQkEsaUJBQVo7QUFBK0JDLFFBQUFBLGdCQUFnQixFQUFoQkE7QUFBL0IsT0FBSixDQURqQixHQUVIRSxLQUZKO0FBR0QsSzs7b0VBRWUsVUFBQ1AsR0FBRCxFQUFTO0FBQUEseUJBQ3lCLE1BQUtDLEtBRDlCO0FBQUEsVUFDZkcsaUJBRGUsZ0JBQ2ZBLGlCQURlO0FBQUEsVUFDSUMsZ0JBREosZ0JBQ0lBLGdCQURKO0FBR3ZCLFVBQUlMLEdBQUcsS0FBS00sU0FBUixJQUFxQk4sR0FBRyxLQUFLLElBQTdCLElBQXFDQSxHQUFHLEtBQUssRUFBakQsRUFBcUQsT0FBTyxFQUFQLENBSDlCLENBSXZCOztBQUNBLFVBQUlBLEdBQUcsQ0FBQ1UsTUFBSixJQUFjLENBQWxCLEVBQXFCLE9BQU9WLEdBQVA7QUFFckIsVUFBTVcscUJBQXFCLEdBQUdYLEdBQUcsQ0FBQ1ksV0FBSixDQUFnQlAsZ0JBQWhCLENBQTlCO0FBQ0EsVUFBTUYsUUFBUSxHQUFHUSxxQkFBcUIsR0FBRyxDQUFDLENBQXpCLEdBQ2JYLEdBQUcsQ0FBQ1UsTUFBSixHQUFhQyxxQkFBYixHQUFxQyxDQUR4QixHQUViLENBRko7QUFJQSxVQUFNSixLQUFLLEdBQUdWLG9CQUFvQixDQUFDRyxHQUFELEVBQU07QUFBRUcsUUFBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlDLFFBQUFBLGlCQUFpQixFQUFqQkEsaUJBQVo7QUFBK0JDLFFBQUFBLGdCQUFnQixFQUFoQkE7QUFBL0IsT0FBTixDQUFsQyxDQVp1QixDQWN2Qjs7QUFDQSxVQUFJTCxHQUFHLFdBQVNPLEtBQWhCLEVBQXlCLE9BQU9QLEdBQVA7O0FBRXpCLFVBQUlRLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhRixLQUFiLENBQUosRUFBeUI7QUFDdkIsZUFBT1Ysb0JBQW9CLENBQUMsQ0FBRCxFQUFJO0FBQUVNLFVBQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZQyxVQUFBQSxpQkFBaUIsRUFBakJBLGlCQUFaO0FBQStCQyxVQUFBQSxnQkFBZ0IsRUFBaEJBO0FBQS9CLFNBQUosQ0FBM0I7QUFDRDs7QUFFRCxVQUFJTSxxQkFBcUIsR0FBRyxDQUFDLENBQXpCLElBQThCUixRQUFRLEtBQUssQ0FBL0MsRUFBa0QsWUFBVUksS0FBVixHQUFrQkYsZ0JBQWxCO0FBRWxELGFBQU9FLEtBQVA7QUFDRCxLOzs7Ozs7O1NBRURNLE0sR0FBQSxrQkFBUztBQUFBLHVCQUdILEtBQUtaLEtBSEY7QUFBQSxRQUVMYSxNQUZLLGdCQUVMQSxNQUZLO0FBQUEsUUFFR0MsUUFGSCxnQkFFR0EsUUFGSDtBQUFBLFFBRWFSLEtBRmIsZ0JBRWFBLEtBRmI7QUFBQSxRQUVvQlMsVUFGcEIsZ0JBRW9CQSxVQUZwQjtBQUFBLFFBRWdDQyxTQUZoQyxnQkFFZ0NBLFNBRmhDO0FBSVAsV0FDRSxvQkFBQyxjQUFEO0FBQ0UsTUFBQSxNQUFNLEVBQUVILE1BRFY7QUFFRSxNQUFBLFFBQVEsRUFBRUMsUUFGWjtBQUdFLE1BQUEsYUFBYSxFQUFFLEtBQUtHLGFBSHRCO0FBSUUsTUFBQSxTQUFTLEVBQUUsS0FBS0MsU0FKbEI7QUFLRSxNQUFBLFNBQVMsRUFBRUYsU0FMYjtBQU1FLE1BQUEsS0FBSyxFQUFFVixLQU5UO0FBT0UsTUFBQSxVQUFVLEVBQUVTO0FBUGQsTUFERjtBQVdELEc7OztFQXJGa0NyQixLQUFLLENBQUN5QixhOztnQkFBckNyQixzQixrQkFha0I7QUFDcEJJLEVBQUFBLFFBQVEsRUFBRUcsU0FEVTtBQUVwQkYsRUFBQUEsaUJBQWlCLEVBQUVFLFNBRkM7QUFHcEJELEVBQUFBLGdCQUFnQixFQUFFLEdBSEU7QUFJcEJFLEVBQUFBLEtBQUssRUFBRSxFQUphO0FBS3BCUyxFQUFBQSxVQUFVLEVBQUVWLFNBTFE7QUFNcEJXLEVBQUFBLFNBQVMsRUFBRSxFQU5TO0FBT3BCSCxFQUFBQSxNQUFNLEVBQUUsa0JBQU0sQ0FBRTtBQVBJLEM7O0FBMkV4QixlQUFlZixzQkFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3lBbW91bnQgfSBmcm9tICdAb3B1c2NhcGl0YS9mb3JtYXQtdXRpbHMnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IEZvcm1hdHRlZElucHV0IGZyb20gJy4vZm9ybWF0dGVkLWlucHV0LmNvbXBvbmVudCc7XG5cbmNsYXNzIEZvcm1hdHRlZElucHV0Q3VycmVuY3kgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjdXJyZW5jeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRlY2ltYWxzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRob3VzYW5kU2VwYXJhdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlY2ltYWxTZXBhcmF0b3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVjaW1hbHM6IHVuZGVmaW5lZCxcbiAgICB0aG91c2FuZFNlcGFyYXRvcjogdW5kZWZpbmVkLFxuICAgIGRlY2ltYWxTZXBhcmF0b3I6ICcuJyxcbiAgICB2YWx1ZTogJycsXG4gICAgaW5wdXRQcm9wczogdW5kZWZpbmVkLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgb25CbHVyOiAoKSA9PiB7fSxcbiAgfTtcblxuICAvKipcbiAgICogRm9ybWF0cyB0aGUgdmFsdWUgd2l0aCBAb3B1c2NhcGl0YS9mb3JtYXQtdXRpbHMgZm9ybWF0Q3VycmVuY3lBbW91bnQgZnVuY3Rpb25cbiAgICogQHBhcmFtIHZhbFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGZvcm1hdHRlciA9ICh2YWwpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW5jeSwgZGVjaW1hbHMsIHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09ICcnKSByZXR1cm4gJyc7XG5cbiAgICBjb25zdCB2YWx1ZSA9IGZvcm1hdEN1cnJlbmN5QW1vdW50KHZhbCwge1xuICAgICAgY3VycmVuY3ksIGRlY2ltYWxzLCB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvcixcbiAgICB9KTtcblxuICAgIHJldHVybiBOdW1iZXIuaXNOYU4odmFsdWUpXG4gICAgICA/IGZvcm1hdEN1cnJlbmN5QW1vdW50KDAsIHsgZGVjaW1hbHMsIHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yIH0pXG4gICAgICA6IHZhbHVlO1xuICB9O1xuXG4gIGVkaXRGb3JtYXR0ZXIgPSAodmFsKSA9PiB7XG4gICAgY29uc3QgeyB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IG51bGwgfHwgdmFsID09PSAnJykgcmV0dXJuICcnO1xuICAgIC8vIC0gb3IgKyBhcmUgbm90IGZvcm1hdHRlZFxuICAgIGlmICh2YWwubGVuZ3RoIDw9IDEpIHJldHVybiB2YWw7XG5cbiAgICBjb25zdCBkZWNpbWFsU2VwYXJhdG9ySW5kZXggPSB2YWwubGFzdEluZGV4T2YoZGVjaW1hbFNlcGFyYXRvcik7XG4gICAgY29uc3QgZGVjaW1hbHMgPSBkZWNpbWFsU2VwYXJhdG9ySW5kZXggPiAtMVxuICAgICAgPyB2YWwubGVuZ3RoIC0gZGVjaW1hbFNlcGFyYXRvckluZGV4IC0gMVxuICAgICAgOiAwO1xuXG4gICAgY29uc3QgdmFsdWUgPSBmb3JtYXRDdXJyZW5jeUFtb3VudCh2YWwsIHsgZGVjaW1hbHMsIHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yIH0pO1xuXG4gICAgLy8gdGhpcyBhdm9pZHMgbWludXMgc2lnbiByZW1vdmFsIGluIHRoZSBlZGl0aW5nIHBoYXNlIGxpa2UgdGhpczogMC4wMCAtLT4gLTAuMDAgLS0+IC0xMC4wMFxuICAgIGlmICh2YWwgPT09IGAtJHt2YWx1ZX1gKSByZXR1cm4gdmFsO1xuXG4gICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeUFtb3VudCgwLCB7IGRlY2ltYWxzLCB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvciB9KTtcbiAgICB9XG5cbiAgICBpZiAoZGVjaW1hbFNlcGFyYXRvckluZGV4ID4gLTEgJiYgZGVjaW1hbHMgPT09IDApIHJldHVybiBgJHt2YWx1ZX0ke2RlY2ltYWxTZXBhcmF0b3J9YDtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBvbkJsdXIsIG9uQ2hhbmdlLCB2YWx1ZSwgaW5wdXRQcm9wcywgY2xhc3NOYW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgZWRpdEZvcm1hdHRlcj17dGhpcy5lZGl0Rm9ybWF0dGVyfVxuICAgICAgICBmb3JtYXR0ZXI9e3RoaXMuZm9ybWF0dGVyfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBpbnB1dFByb3BzPXtpbnB1dFByb3BzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRlZElucHV0Q3VycmVuY3k7XG4iXX0=