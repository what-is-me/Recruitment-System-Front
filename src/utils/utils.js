export function setProperties(obj, src) {
  for (const key of Object.keys(src)) {
    obj[key] = src[key];
  }
}
export const eduOption=[
  {
    label: '博士',
    value: '博士'
  },
  {
    label: '研究生',
    value: '硕士'
  },
  {
    label: '本科',
    value: '学士'
  },
  {
    label: '大专',
    value: '大专'
  },
  {
    label: '不限',
    value: '不限'
  },
]
