"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/* eslint-disable prettier/prettier */
var toolkit_1 = require("@reduxjs/toolkit");
var actions_1 = require("./actions");
var initialState = {
    modal: false
};
function modalReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions_1.ModalActionTypes.ShowModal:
            return __assign(__assign({}, state), { modal: true });
        case actions_1.ModalActionTypes.HideModal:
            return __assign(__assign({}, state), { modal: false });
        default:
            return state;
    }
}
var rootReducer = toolkit_1.combineReducers({ modal: modalReducer });
exports["default"] = rootReducer;
