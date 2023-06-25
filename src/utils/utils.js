export function setProperties(obj, src) {
  for (const key of Object.keys(src)) {
    obj[key] = src[key];
  }
}
