"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = props => {
  const {
    label,
    onClick,
    value,
    disabled,
    name,
    type,
    className
  } = props;
  return /*#__PURE__*/_react.default.createElement("button", {
    name: name,
    value: value,
    className: className,
    disabled: disabled,
    type: type,
    onClick: onClick
  }, label);
};
var _default = Button;
exports.default = _default;