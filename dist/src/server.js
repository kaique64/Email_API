"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var app_1 = __importDefault(require("./app"));
dotenv_1.config();
var port = process.env.PORT || 5001;
app_1.default.listen(port, function () {
    console.log('Server is running on port http://localhost:5000');
});
