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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var webpack_base_1 = require("./webpack.base");
var html_webpack_plugin_1 = require("html-webpack-plugin");
var mini_css_extract_plugin_1 = require("mini-css-extract-plugin");
var monaco_editor_webpack_plugin_1 = require("monaco-editor-webpack-plugin");
var path_1 = require("path");
var createPages = function (pages) {
    return pages.map(function (_a) {
        var filename = _a.filename, template = _a.template, chunk = _a.chunk;
        return new html_webpack_plugin_1["default"]({
            filename: filename,
            template: template,
            inject: 'body',
            chunks: chunk
        });
    });
};
exports["default"] = __assign(__assign({}, webpack_base_1["default"]), { mode: 'production', plugins: __spreadArrays([
        new mini_css_extract_plugin_1["default"]({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        })
    ], createPages([
        {
            filename: 'index.html',
            template: path_1["default"].resolve(__dirname, './template.ejs'),
            chunk: ['playground']
        },
    ]), [
        new monaco_editor_webpack_plugin_1["default"]({
            languages: ['json']
        }),
    ]), optimization: {
        minimize: true
    } });
