"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Modal = void 0;
var styled_components_1 = require("styled-components");
exports.Modal = function (_a) {
    var children = _a.children, onClick = _a.onClick;
    return (React.createElement(ModalStyled, null,
        React.createElement(Content, null,
            React.createElement(ModalClose, { onClick: onClick }, "\u2715"),
            React.createElement(ModalContent, null, children))));
};
var ModalStyled = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 9;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  position: fixed;\n  z-index: 9;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var Content = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: #ffffff;\n  border: 1px solid #bebebe;\n  border-radius: 2px;\n  padding: 12px 16px;\n"], ["\n  background-color: #ffffff;\n  border: 1px solid #bebebe;\n  border-radius: 2px;\n  padding: 12px 16px;\n"])));
var ModalClose = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  right: 8px;\n  top: 4px;\n  font-size: 24px;\n  cursor: pointer;\n  flex-direction: row-reverse;\n"], ["\n  display: flex;\n  right: 8px;\n  top: 4px;\n  font-size: 24px;\n  cursor: pointer;\n  flex-direction: row-reverse;\n"])));
var ModalContent = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 0px 20px 20px 20px;\n"], ["\n  padding: 0px 20px 20px 20px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
