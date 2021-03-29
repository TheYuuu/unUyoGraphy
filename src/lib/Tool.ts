const objToString = Object.prototype.toString;

export function isString(value: unknown): value is String  {
  return objToString.call(value) === '[object String]';
}