const kerberos2entry = (kerberos: string) =>
	`20${kerberos.slice(3, 5)}${kerberos.slice(0, 3).toUpperCase()}${kerberos.slice(5, 9)}`;
const entry2kerberos = (entry: string) => `${entry.slice(4, 7).toLowerCase()}${entry.slice(2, 4)}${entry.slice(7, 11)}`;

export { kerberos2entry, entry2kerberos };
