import generateString from './generateString';

function generateId(): string {
	const id = `${+new Date()}_${generateString(5)}`;
	console.log(id);

	return id;
}

export default generateId;
