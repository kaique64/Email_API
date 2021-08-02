"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var SendController_1 = __importDefault(require("./controllers/SendController"));
var route = express_1.Router();
route.get('/', function (req, res) {
    res.status(200).json({ message: 'Seja bem-vindo!' });
});
route.post('/send', SendController_1.default.sendEmail);
exports.default = route;
