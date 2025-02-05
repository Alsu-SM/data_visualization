function checkIsHex(str: string): boolean {
	const reg = /^#([0-9a-f]{3}){1,2}$/i;
	return reg.test(str);
}

export default checkIsHex;
