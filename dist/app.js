"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = __importDefault(require("./routes/product.route")); // เส้นทางจริงไปยัง router ของคุณ
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Middleware ที่จำเป็น
app.use('/products', product_route_1.default); // ใช้ router
exports.default = app;
