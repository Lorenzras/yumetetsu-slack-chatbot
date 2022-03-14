"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const test_1 = __importDefault(require("./routes/test"));
const slack_1 = __importDefault(require("./routes/slack"));
require('dotenv').config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
// json parser will return empty body.
// I used the following instead but it was not in slack documentation. :D
// app.use(bodyParser.urlencoded({extended: true}));
app.use('/test', test_1.default);
app.use('/slack', slack_1.default);
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map