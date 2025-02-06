"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ignitor_1 = require("@adonisjs/ignitor");
const path_1 = __importDefault(require("path"));
new ignitor_1.Ignitor(require('@adonisjs/fold'))
    .appRoot(path_1.default.join(__dirname)) // Certifique-se de que __dirname é compatível com o TypeScript
    .fireHttpServer()
    .catch(console.error);
