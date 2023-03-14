"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    APP_PORT: Number(process.env.API_PORT) || 3000,
    MYSQL_USER: process.env.MYSQL_USER || 'root',
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || 'password',
    MYSQL_HOST: process.env.MYSQL_HOST || 'db',
    JWT_SECRET: process.env.JWT_SECRET || 'BATATINHA',
};
exports.default = config;
