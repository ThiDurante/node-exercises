"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const config_1 = __importDefault(require("../config"));
const connection = promise_1.default.createPool({
    host: config_1.default.MYSQL_HOST,
    user: config_1.default.MYSQL_USER,
    password: config_1.default.MYSQL_PASSWORD
});
exports.default = connection;
