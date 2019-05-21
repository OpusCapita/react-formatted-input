function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    return React.createElement(FormattedInput, _extends({
      onChange: onChange,
      formatter: this.formatter,
      className: className,
      value: value
    }, inputProps));
  };

  return FormattedInputCurrency;
}(React.PureComponent);

_defineProperty(FormattedInputCurrency, "defaultProps", {
  decimals: undefined,
  thousandSeparator: undefined,
  decimalSeparator: '.',
  value: '',
  inputProps: undefined,
  className: undefined
});

export default FormattedInputCurrency;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZWQtaW5wdXQtY3VycmVuY3kuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImZvcm1hdEN1cnJlbmN5QW1vdW50IiwiRm9ybWF0dGVkSW5wdXQiLCJGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IiwidmFsIiwicHJvcHMiLCJjdXJyZW5jeSIsImRlY2ltYWxzIiwidGhvdXNhbmRTZXBhcmF0b3IiLCJkZWNpbWFsU2VwYXJhdG9yIiwicmVuZGVyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImlucHV0UHJvcHMiLCJjbGFzc05hbWUiLCJmb3JtYXR0ZXIiLCJQdXJlQ29tcG9uZW50IiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0Msb0JBQVQsUUFBcUMsMEJBQXJDLEMsQ0FFQTs7QUFDQSxPQUFPQyxjQUFQLE1BQTJCLDZCQUEzQjs7SUFFTUMsc0I7Ozs7Ozs7Ozs7Ozs7O2dFQTBCUSxVQUFDQyxHQUFELEVBQVM7QUFBQSx3QkFHZixNQUFLQyxLQUhVO0FBQUEsVUFFakJDLFFBRmlCLGVBRWpCQSxRQUZpQjtBQUFBLFVBRVBDLFFBRk8sZUFFUEEsUUFGTztBQUFBLFVBRUdDLGlCQUZILGVBRUdBLGlCQUZIO0FBQUEsVUFFc0JDLGdCQUZ0QixlQUVzQkEsZ0JBRnRCO0FBS25CLGFBQU9SLG9CQUFvQixDQUFDRyxHQUFELEVBQU07QUFDL0JFLFFBQUFBLFFBQVEsRUFBUkEsUUFEK0I7QUFDckJDLFFBQUFBLFFBQVEsRUFBUkEsUUFEcUI7QUFDWEMsUUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFEVztBQUNRQyxRQUFBQSxnQkFBZ0IsRUFBaEJBO0FBRFIsT0FBTixDQUEzQjtBQUdELEs7Ozs7Ozs7U0FFREMsTSxHQUFBLGtCQUFTO0FBQUEsdUJBR0gsS0FBS0wsS0FIRjtBQUFBLFFBRUxNLFFBRkssZ0JBRUxBLFFBRks7QUFBQSxRQUVLQyxLQUZMLGdCQUVLQSxLQUZMO0FBQUEsUUFFWUMsVUFGWixnQkFFWUEsVUFGWjtBQUFBLFFBRXdCQyxTQUZ4QixnQkFFd0JBLFNBRnhCO0FBSVAsV0FDRSxvQkFBQyxjQUFEO0FBQ0UsTUFBQSxRQUFRLEVBQUVILFFBRFo7QUFFRSxNQUFBLFNBQVMsRUFBRSxLQUFLSSxTQUZsQjtBQUdFLE1BQUEsU0FBUyxFQUFFRCxTQUhiO0FBSUUsTUFBQSxLQUFLLEVBQUVGO0FBSlQsT0FLTUMsVUFMTixFQURGO0FBU0QsRzs7O0VBakRrQ2QsS0FBSyxDQUFDaUIsYTs7Z0JBQXJDYixzQixrQkFZa0I7QUFDcEJJLEVBQUFBLFFBQVEsRUFBRVUsU0FEVTtBQUVwQlQsRUFBQUEsaUJBQWlCLEVBQUVTLFNBRkM7QUFHcEJSLEVBQUFBLGdCQUFnQixFQUFFLEdBSEU7QUFJcEJHLEVBQUFBLEtBQUssRUFBRSxFQUphO0FBS3BCQyxFQUFBQSxVQUFVLEVBQUVJLFNBTFE7QUFNcEJILEVBQUFBLFNBQVMsRUFBRUc7QUFOUyxDOztBQXdDeEIsZUFBZWQsc0JBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5QW1vdW50IH0gZnJvbSAnQG9wdXNjYXBpdGEvZm9ybWF0LXV0aWxzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCBGb3JtYXR0ZWRJbnB1dCBmcm9tICcuL2Zvcm1hdHRlZC1pbnB1dC5jb21wb25lbnQnO1xuXG5jbGFzcyBGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY3VycmVuY3k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkZWNpbWFsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aG91c2FuZFNlcGFyYXRvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWNpbWFsU2VwYXJhdG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZWNpbWFsczogdW5kZWZpbmVkLFxuICAgIHRob3VzYW5kU2VwYXJhdG9yOiB1bmRlZmluZWQsXG4gICAgZGVjaW1hbFNlcGFyYXRvcjogJy4nLFxuICAgIHZhbHVlOiAnJyxcbiAgICBpbnB1dFByb3BzOiB1bmRlZmluZWQsXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIH07XG5cbiAgLyoqXG4gICAqIEZvcm1hdHMgdGhlIHZhbHVlIHdpdGggQG9wdXNjYXBpdGEvZm9ybWF0LXV0aWxzIGZvcm1hdEN1cnJlbmN5QW1vdW50IGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB2YWxcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBmb3JtYXR0ZXIgPSAodmFsKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY3VycmVuY3ksIGRlY2ltYWxzLCB0aG91c2FuZFNlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeUFtb3VudCh2YWwsIHtcbiAgICAgIGN1cnJlbmN5LCBkZWNpbWFscywgdGhvdXNhbmRTZXBhcmF0b3IsIGRlY2ltYWxTZXBhcmF0b3IsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uQ2hhbmdlLCB2YWx1ZSwgaW5wdXRQcm9wcywgY2xhc3NOYW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybWF0dGVkSW5wdXRcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICBmb3JtYXR0ZXI9e3RoaXMuZm9ybWF0dGVyfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0ZWRJbnB1dEN1cnJlbmN5O1xuIl19