(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(module,__webpack_exports__,__webpack_require__){"use strict";var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(67);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var currencyOpts=["USD","JPY","EUR","LYD"],FormattedInputCurrencyStory=function FormattedInputCurrencyStory(){var knobs={currency:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.select)("Currency",currencyOpts,"EUR"),value:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.number)("Initial value","100"),decimals:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.number)("Decimals",void 0),thousandSeparator:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.text)("Thousand separator",void 0),decimalSeparator:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.text)("Decimal separator",".")};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a,_extends({},knobs,{onChange:function onChange(val){console.log("onChange called with",val)}}))};__webpack_exports__.a=FormattedInputCurrencyStory,FormattedInputCurrencyStory.__docgenInfo={description:"",methods:[],displayName:"FormattedInputCurrencyStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories\\formatted-input-currency.story.jsx"]={name:"FormattedInputCurrencyStory",docgenInfo:FormattedInputCurrencyStory.__docgenInfo,path:"stories\\formatted-input-currency.story.jsx"})},152:function(module,__webpack_exports__,__webpack_require__){"use strict";var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(67);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var FormattedInputStory=function FormattedInputStory(){var knobs={value:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.text)("Initial value","Default")};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.b,_extends({},knobs,{onChange:function onChange(val){console.log("onChange called with",val)},formatter:function formatter(value){return"Formatter output: "+value}}))};__webpack_exports__.a=FormattedInputStory,FormattedInputStory.__docgenInfo={description:"",methods:[],displayName:"FormattedInputStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories\\formatted-input.story.jsx"]={name:"FormattedInputStory",docgenInfo:FormattedInputStory.__docgenInfo,path:"stories\\formatted-input.story.jsx"})},153:function(module,exports,__webpack_require__){__webpack_require__(154),__webpack_require__(233),module.exports=__webpack_require__(234)},234:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(48),_storybook_addon_options__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(149),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(14);Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_1__.withOptions)({name:"React Formatted Input",addonPanelInRight:!0,hierarchySeparator:/\//,hierarchyRootSeparator:/\|/}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){__webpack_require__(316)},module)}.call(this,__webpack_require__(114)(module))},316:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(48),_formatted_input_currency_story__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(150),_formatted_input_story__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(152);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("ReactFormattedInput",module).add("FormattedInput",_formatted_input_story__WEBPACK_IMPORTED_MODULE_2__.a).add("FormattedInputCurrency",_formatted_input_currency_story__WEBPACK_IMPORTED_MODULE_1__.a)}.call(this,__webpack_require__(114)(module))},319:function(module,exports,__webpack_require__){var content=__webpack_require__(320);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(322)(content,options);content.locals&&(module.exports=content.locals)},320:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(321)(!1)).push([module.i,"input.oc-formatted-input {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 0 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }\n",""])},67:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(9),react_default=__webpack_require__.n(react);__webpack_require__(147),__webpack_require__(319);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var userTyping=!1,formatted_input_component_FormattedInput=function(_React$PureComponent){function FormattedInput(props){var _this;_defineProperty(_assertThisInitialized(_this=_React$PureComponent.call(this,props)||this),"onBlur",function(e){var _this$props=_this.props,formatter=_this$props.formatter,onChange=_this$props.onChange,value=e.target.value;_this.setState({value:formatter(value)},function(){onChange(formatter(value)),userTyping=!1})}),_defineProperty(_assertThisInitialized(_this),"onChange",function(e){var onChange=_this.props.onChange,value=e.target.value;userTyping=!0,_this.setState({value:value},function(){onChange(value)})});var _value=props.value,_formatter=props.formatter;return _this.state={value:_formatter(_value)},_this}return function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,subClass.__proto__=superClass}(FormattedInput,_React$PureComponent),FormattedInput.getDerivedStateFromProps=function getDerivedStateFromProps(nextProps,prevState){var formatter=nextProps.formatter,nextValue=nextProps.value,prevStateValue=prevState.value;return userTyping||prevStateValue===formatter(nextValue)?null:{value:formatter(nextValue)}},FormattedInput.prototype.render=function render(){var _this$props2=this.props,inputProps=_this$props2.inputProps,className=_this$props2.className;return react_default.a.createElement("input",_extends({},inputProps,{className:"oc-formatted-input "+className,onChange:this.onChange,onBlur:this.onBlur,value:this.state.value}))},FormattedInput}(react_default.a.PureComponent);_defineProperty(formatted_input_component_FormattedInput,"defaultProps",{formatter:function formatter(val){return val},inputProps:{},value:"",className:void 0});var formatted_input_component=formatted_input_component_FormattedInput,format_utils=__webpack_require__(151);function formatted_input_currency_component_extends(){return(formatted_input_currency_component_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function formatted_input_currency_component_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var formatted_input_currency_component_FormattedInputCurrency=function(_React$PureComponent){function FormattedInputCurrency(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return formatted_input_currency_component_defineProperty(function formatted_input_currency_component_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(_this=_React$PureComponent.call.apply(_React$PureComponent,[this].concat(args))||this),"formatter",function(val){var _this$props=_this.props,currency=_this$props.currency,decimals=_this$props.decimals,thousandSeparator=_this$props.thousandSeparator,decimalSeparator=_this$props.decimalSeparator;return Object(format_utils.formatCurrencyAmount)(val,{currency:currency,decimals:decimals,thousandSeparator:thousandSeparator,decimalSeparator:decimalSeparator})}),_this}return function formatted_input_currency_component_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,subClass.__proto__=superClass}(FormattedInputCurrency,_React$PureComponent),FormattedInputCurrency.prototype.render=function render(){var _this$props2=this.props,onChange=_this$props2.onChange,value=_this$props2.value,inputProps=_this$props2.inputProps,className=_this$props2.className;return react_default.a.createElement(formatted_input_component,formatted_input_currency_component_extends({onChange:onChange,formatter:this.formatter,className:className,value:value},inputProps))},FormattedInputCurrency}(react_default.a.PureComponent);formatted_input_currency_component_defineProperty(formatted_input_currency_component_FormattedInputCurrency,"defaultProps",{decimals:void 0,thousandSeparator:void 0,decimalSeparator:".",value:"",inputProps:void 0,className:void 0});var formatted_input_currency_component=formatted_input_currency_component_FormattedInputCurrency;__webpack_require__.d(__webpack_exports__,"a",function(){return formatted_input_currency_component});__webpack_exports__.b=formatted_input_component}},[[153,1,2]]]);
//# sourceMappingURL=main.12649b4965a078dbca1e.bundle.js.map