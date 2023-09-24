"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRebate = void 0;
const fs = require("fs");
const XLSX = require("xlsx");
const utils_1 = require("./utils");
const read = (path) => XLSX.readFile(path);
const del = (path) => fs.unlinkSync(path);
const parseRebate = (path) => {
    const workbook = read(path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);
    const transformed = data.map((row) => ({
        kerberos: (0, utils_1.entry2kerberos)(row['Entry Number']),
        rebate_application_no: row['Rebate Application No.'],
        from_date: new Date(row['From Date']),
        to_date: new Date(row['To Date']),
        approval_status: row['Approval Status'],
        days: row['Days'],
        reason: row['Reason For Rebate'],
        type: row['Rebate Type'],
        amount: row['Rebate Amount (INR)'],
    }));
    del(path);
    return transformed;
};
exports.parseRebate = parseRebate;
//# sourceMappingURL=parseExcel.js.map