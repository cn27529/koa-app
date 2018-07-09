'use strict';
var _regenerator = require('babel-runtime/regenerator'),
  _regenerator2 = _interopRequireDefault(_regenerator),
  _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator'),
  _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2); function _interopRequireDefault(a) {
    return a && a.__esModule ? a : { default: a };
  } var Koa = require('koa'),
    app = new Koa(); app.use(function () {
      var a = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function a(b, c) {
        var d, e; return _regenerator2.default.wrap(function (a) {
          for (; ;) {
            switch (a.prev = a.next) {
              case 0:
                return d = Date.now(), a.next = 3, c(); case 3:
                e = Date.now() - d, b.set('X-Response-Time', e + 'ms'); case 5: case 'end':
                return a.stop();
            }
          }
        }, a, void 0);
      })); return function () {
        return a.apply(this, arguments);
      };
    }()), app.use(function () {
      var a = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function a(b, c) {
        var d, e; return _regenerator2.default.wrap(function (a) {
          for (; ;) {
            switch (a.prev = a.next) {
              case 0:
                return d = Date.now(), a.next = 3, c(); case 3:
                e = Date.now() - d, console.log(b.method + ' ' + b.url + ' - ' + e); case 5: case 'end':
                return a.stop();
            }
          }
        }, a, void 0);
      })); return function () {
        return a.apply(this, arguments);
      };
    }()), app.use(function () {
      var a = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function a(b) {
        return _regenerator2.default.wrap(function (a) {
          for (; ;) {
            switch (a.prev = a.next) {
              case 0:
                b.body = 'Hello World'; case 1: case 'end':
                return a.stop();
            }
          }
        }, a, void 0);
      })); return function () {
        return a.apply(this, arguments);
      };
    }()), app.listen(8080);