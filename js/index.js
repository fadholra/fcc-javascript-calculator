var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var
App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      curr: '0',
      prev: '' };


    _this.handleNumbers = _this.handleNumbers.bind(_this);
    _this.handleOperators = _this.handleOperators.bind(_this);
    _this.handleDecimal = _this.handleDecimal.bind(_this);
    _this.clear = _this.clear.bind(_this);
    _this.evaluate = _this.evaluate.bind(_this);return _this;
  }_createClass(App, [{ key: 'handleNumbers', value: function handleNumbers(

    e) {
      this.setState({
        curr: this.state.curr === '0' ? e.target.value : this.state.curr + e.target.value });

    } }, { key: 'handleOperators', value: function handleOperators(

    e) {
      if (/[+-/*]$/.test(this.state.curr)) this.state.curr = this.state.curr.slice(0, -1);
      this.setState({
        curr: this.state.curr + e.target.value });

    } }, { key: 'handleDecimal', value: function handleDecimal(

    e) {
      var lastIndex = this.state.curr.split(/[*/+-]/).pop();
      console.log(lastIndex);
      if (lastIndex == '') {
        this.setState({
          curr: this.state.curr + '0.' });

      } else if (!/[.]/.test(lastIndex)) {
        this.setState({
          curr: this.state.curr + e.target.value });

      }
    } }, { key: 'clear', value: function clear()

    {
      this.setState({
        curr: '0' });

    } }, { key: 'evaluate', value: function evaluate()

    {
      if (/[+-/*]$/.test(this.state.curr)) this.state.curr = this.state.curr.slice(0, -1);
      var result = Math.round(eval(this.state.curr) * 1000000) / 1000000;
      this.setState({
        curr: result });

    } }, { key: 'render', value: function render()

    {
      return (
        React.createElement('div', null,
          React.createElement('div', { id: 'display' }, this.state.curr),
          React.createElement('div', { className: 'calc' },
            React.createElement('button', { id: 'clear', onClick: this.clear }, 'clear'),
            React.createElement('button', { id: 'divide', value: '/', onClick: this.handleOperators }, '/'),
            React.createElement('button', { id: 'multiply', value: '*', onClick: this.handleOperators }, 'x'),
            React.createElement('button', { id: 'seven', value: '7', onClick: this.handleNumbers }, '7'),
            React.createElement('button', { id: 'eight', value: '8', onClick: this.handleNumbers }, '8'),
            React.createElement('button', { id: 'nine', value: '9', onClick: this.handleNumbers }, '9'),
            React.createElement('button', { id: 'add', value: '+', onClick: this.handleOperators }, '+'),
            React.createElement('button', { id: 'four', value: '4', onClick: this.handleNumbers }, '4'),
            React.createElement('button', { id: 'five', value: '5', onClick: this.handleNumbers }, '5'),
            React.createElement('button', { id: 'six', value: '6', onClick: this.handleNumbers }, '6'),
            React.createElement('button', { id: 'subtract', value: '-', onClick: this.handleOperators }, '-'),
            React.createElement('button', { id: 'one', value: '1', onClick: this.handleNumbers }, '1'),
            React.createElement('button', { id: 'two', value: '2', onClick: this.handleNumbers }, '2'),
            React.createElement('button', { id: 'three', value: '3', onClick: this.handleNumbers }, '3'),
            React.createElement('button', { id: 'equals', value: '=', onClick: this.evaluate }, '='),
            React.createElement('button', { id: 'zero', value: '0', onClick: this.handleNumbers }, '0'),
            React.createElement('button', { id: 'decimal', value: '.', onClick: this.handleDecimal }, '.'))));



    } }]);return App;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));