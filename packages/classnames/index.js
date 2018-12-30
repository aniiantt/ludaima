export default function classNames(...args) {
  const classArray = []
  for(const param of args) {
    if(!param) continue
    if(typeof param === 'string' || typeof param === 'number') {
      classArray.push(param)
    } else if(Array.isArray(param) && Array.length) {
      const inner = classNames(...param)
      if(inner) classArray.push(inner)
    } else if(typeof param === 'object') {
      for (const [key, value] of Object.entries(param)) {
        if (value) classArray.push(key);
      }
    }
  }
  return classArray.join(' ')
}
