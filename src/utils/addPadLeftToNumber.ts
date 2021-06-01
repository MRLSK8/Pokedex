const addPadLeftToNumber = (value: number, quantity: number = 2): string => value.toString().padStart(quantity, '0');

export default addPadLeftToNumber;
