module.exports = function reverse (n) {
  let str = n.toString().split('').reverse().join('')
  return Number(str)
}
