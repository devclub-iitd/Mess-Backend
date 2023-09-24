import * as fs from 'fs';
import * as XLSX from 'xlsx';
import { entry2kerberos } from './utils';

const read = (path: string) => XLSX.readFile(path);
const del = (path: string) => fs.unlinkSync(path);

export const parseRebate = (path: string) => {
	const workbook = read(path);
	const sheet = workbook.Sheets[workbook.SheetNames[0]];
	const data = XLSX.utils.sheet_to_json(sheet);
	const transformed = data.map((row) => ({
		kerberos: entry2kerberos(row['Entry Number']),
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
