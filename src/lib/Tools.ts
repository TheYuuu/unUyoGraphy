const objToString = Object.prototype.toString;

export function isString(value: unknown): value is String  {
  return objToString.call(value) === '[object String]';
}

export  function isNumber(value: unknown): value is number  {
  return objToString.call(value) === '[object Number]';
}