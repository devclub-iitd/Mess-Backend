"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entry2kerberos = exports.kerberos2entry = void 0;
const kerberos2entry = (kerberos) => `20${kerberos.slice(3, 5)}${kerberos.slice(0, 3).toUpperCase()}${kerberos.slice(5, 9)}`;
exports.kerberos2entry = kerberos2entry;
const entry2kerberos = (entry) => `${entry.slice(4, 7).toLowerCase()}${entry.slice(2, 4)}${entry.slice(7, 11)}`;
exports.entry2kerberos = entry2kerberos;
//# sourceMappingURL=utils.js.map