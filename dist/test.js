"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 }); var _regenerator = require("babel-runtime/regenerator"),
  _regenerator2 = _interopRequireDefault(_regenerator),
  _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator"),
  _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2); function _interopRequireDefault(a) {
    return a && a.__esModule ? a : { default: a };
  } exports.default = function () {
    var a = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function a() {
      var b; return _regenerator2.default.wrap(function (a) {
        for (; ;) {
          switch (a.prev = a.next) {
            case 0:
              return a.next = 2, bar(); case 2:
              b = a.sent, console.log(b); case 4: case "end":
              return a.stop();
          }
        }
      }, a, this);
    })); return function () {
      return a.apply(this, arguments);
    };
  }(); function bar() {
    return "bar";
  }