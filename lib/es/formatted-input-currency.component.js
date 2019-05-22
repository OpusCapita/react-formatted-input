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
      return formatCurrencyAmount(val, {
        currency: currency,
        decimals: decimals,
        thousandSeparator: thousandSeparator,
        decimalSeparator: decimalSeparator
      });
    });

    return _this;
  }

  var _proto = FormattedInputCurrency.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        onChange = _this$props2.onChange,
        value = _this$props2.value,
        inputProps = _this$props2.inputProps,
        className = _this$props2.className;
    return React.createElement(FormattedInput, {
      onChange: onChange,
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
  className: ''
});

export default FormattedInputCurrency;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImZvcm1hdEN1cnJlbmN5QW1vdW50IiwiRm9ybWF0dGVkSW5wdXQiLCJGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IiwidmFsIiwicHJvcHMiLCJjdXJyZW5jeSIsImRlY2ltYWxzIiwidGhvdXNhbmRTZXBhcmF0b3IiLCJkZWNpbWFsU2VwYXJhdG9yIiwidW5kZWZpbmVkIiwicmVuZGVyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImlucHV0UHJvcHMiLCJjbGFzc05hbWUiLCJmb3JtYXR0ZXIiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLG9CQUFULFFBQXFDLDBCQUFyQyxDLENBRUE7O0FBQ0EsT0FBT0MsY0FBUCxNQUEyQiw2QkFBM0I7O0lBRU1DLHNCOzs7Ozs7Ozs7Ozs7OztnRUEwQlEsVUFBQ0MsR0FBRCxFQUFTO0FBQUEsd0JBR2YsTUFBS0MsS0FIVTtBQUFBLFVBRWpCQyxRQUZpQixlQUVqQkEsUUFGaUI7QUFBQSxVQUVQQyxRQUZPLGVBRVBBLFFBRk87QUFBQSxVQUVHQyxpQkFGSCxlQUVHQSxpQkFGSDtBQUFBLFVBRXNCQyxnQkFGdEIsZUFFc0JBLGdCQUZ0QjtBQUtuQixVQUFJTCxHQUFHLEtBQUtNLFNBQVIsSUFBcUJOLEdBQUcsS0FBSyxJQUE3QixJQUFxQ0EsR0FBRyxLQUFLLEVBQWpELEVBQXFELE9BQU8sRUFBUDtBQUVyRCxhQUFPSCxvQkFBb0IsQ0FBQ0csR0FBRCxFQUFNO0FBQy9CRSxRQUFBQSxRQUFRLEVBQVJBLFFBRCtCO0FBQ3JCQyxRQUFBQSxRQUFRLEVBQVJBLFFBRHFCO0FBQ1hDLFFBQUFBLGlCQUFpQixFQUFqQkEsaUJBRFc7QUFDUUMsUUFBQUEsZ0JBQWdCLEVBQWhCQTtBQURSLE9BQU4sQ0FBM0I7QUFHRCxLOzs7Ozs7O1NBRURFLE0sR0FBQSxrQkFBUztBQUFBLHVCQUdILEtBQUtOLEtBSEY7QUFBQSxRQUVMTyxRQUZLLGdCQUVMQSxRQUZLO0FBQUEsUUFFS0MsS0FGTCxnQkFFS0EsS0FGTDtBQUFBLFFBRVlDLFVBRlosZ0JBRVlBLFVBRlo7QUFBQSxRQUV3QkMsU0FGeEIsZ0JBRXdCQSxTQUZ4QjtBQUlQLFdBQ0Usb0JBQUMsY0FBRDtBQUNFLE1BQUEsUUFBUSxFQUFFSCxRQURaO0FBRUUsTUFBQSxTQUFTLEVBQUUsS0FBS0ksU0FGbEI7QUFHRSxNQUFBLFNBQVMsRUFBRUQsU0FIYjtBQUlFLE1BQUEsS0FBSyxFQUFFRixLQUpUO0FBS0UsTUFBQSxVQUFVLEVBQUVDO0FBTGQsTUFERjtBQVNELEc7OztFQW5Ea0NmLEtBQUssQ0FBQ2tCLGE7O2dCQUFyQ2Qsc0Isa0JBWWtCO0FBQ3BCSSxFQUFBQSxRQUFRLEVBQUVHLFNBRFU7QUFFcEJGLEVBQUFBLGlCQUFpQixFQUFFRSxTQUZDO0FBR3BCRCxFQUFBQSxnQkFBZ0IsRUFBRSxHQUhFO0FBSXBCSSxFQUFBQSxLQUFLLEVBQUUsRUFKYTtBQUtwQkMsRUFBQUEsVUFBVSxFQUFFSixTQUxRO0FBTXBCSyxFQUFBQSxTQUFTLEVBQUU7QUFOUyxDOztBQTBDeEIsZUFBZVosc0JBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5QW1vdW50IH0gZnJvbSAnQG9wdXNjYXBpdGEvZm9ybWF0LXV0aWxzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCBGb3JtYXR0ZWRJbnB1dCBmcm9tICcuL2Zvcm1hdHRlZC1pbnB1dC5jb21wb25lbnQnO1xuXG5jbGFzcyBGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkZWNpbWFsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aG91c2FuZFNlcGFyYXRvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWNpbWFsU2VwYXJhdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZWNpbWFsczogdW5kZWZpbmVkLFxuICAgIHRob3VzYW5kU2VwYXJhdG9yOiB1bmRlZmluZWQsXG4gICAgZGVjaW1hbFNlcGFyYXRvcjogJy4nLFxuICAgIHZhbHVlOiAnJyxcbiAgICBpbnB1dFByb3BzOiB1bmRlZmluZWQsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgfTtcblxuICAvKipcbiAgICogRm9ybWF0cyB0aGUgdmFsdWUgd2l0aCBAb3B1c2NhcGl0YS9mb3JtYXQtdXRpbHMgZm9ybWF0Q3VycmVuY3lBbW91bnQgZnVuY3Rpb25cbiAgICogQHBhcmFtIHZhbFxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGZvcm1hdHRlciA9ICh2YWwpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW5jeSwgZGVjaW1hbHMsIHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09ICcnKSByZXR1cm4gJyc7XG5cbiAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3lBbW91bnQodmFsLCB7XG4gICAgICBjdXJyZW5jeSwgZGVjaW1hbHMsIHRob3VzYW5kU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yLFxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBvbkNoYW5nZSwgdmFsdWUsIGlucHV0UHJvcHMsIGNsYXNzTmFtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1hdHRlZElucHV0XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgZm9ybWF0dGVyPXt0aGlzLmZvcm1hdHRlcn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgaW5wdXRQcm9wcz17aW5wdXRQcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5O1xuIl19