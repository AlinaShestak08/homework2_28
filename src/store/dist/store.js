"use strict";
exports.__esModule = true;
/* eslint-disable prettier/prettier */
var toolkit_1 = require("@reduxjs/toolkit");
var reducers_1 = require("./reducers");
var store = toolkit_1.createStore(reducers_1["default"]);
exports["default"] = store;
