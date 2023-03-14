"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrorMiddleware = (err, req, res, _next) => {
    console.log('err', err);
    const { status, message } = err;
    res.status(status || 500).json({ message });
};
exports.default = httpErrorMiddleware;
