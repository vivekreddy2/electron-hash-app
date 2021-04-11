// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// console.log('preload1')
// window.getMD5Hash = (text) => {
//   console.log('d');
//   const crypto = require('crypto')
//   return crypto.createHash('md5').update('hello', 'utf8').digest('hex');
// };
// console.log(window);


window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
