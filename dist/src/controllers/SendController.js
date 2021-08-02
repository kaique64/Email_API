"use strict";
const env = require('dotenv');
env.config();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = __importDefault(require("nodemailer"));
var SendController = /** @class */ (function () {
    function SendController() {
    }
    SendController.prototype.sendEmail = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, message, transport;
            return __generator(this, function (_b) {
                _a = req.body, name = _a.name, email = _a.email, message = _a.message;
                transport = nodemailer_1.default.createTransport({
                    host: 'smtp-mail.outlook.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: 'kaiquehenrique.2005@outlook.com',
                        pass: process.env.PASSWORD,
                    },
                });
                transport.sendMail({
                    sender: name,
                    from: name + ", <kaiquehenrique.2005@outlook.com>",
                    to: 'kaiquehenrique.2005@outlook.com',
                    subject: name + ", enviou uma mensagem",
                    text: "De: " + email + "\n" + message,
                })
                    .then(function () {
                    transport.close();
                    return res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
                })
                    .catch(function (err) {
                    console.log(err);
                    transport.close();
                    return res.status(400).json('ERRO');
                });
                return [2 /*return*/];
            });
        });
    };
    return SendController;
}());
exports.default = new SendController();
