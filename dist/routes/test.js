"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
const testHandler = (req, res) => {
    console.log(req, 'Success');
    res.status(200).send('<p>SUCCESS</p>');
};
route.get('/show', testHandler);
exports.default = route;
//# sourceMappingURL=test.js.map