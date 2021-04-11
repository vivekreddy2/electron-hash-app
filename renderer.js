

  const { ipcRenderer, clipboard } = require('electron');
  document.querySelector('#text-input').addEventListener('input', async function(){
    console.log(this.value);
    document.querySelector('#md5-output').textContent =  await ipcRenderer.invoke('getHash', this.value, 'md5');
    document.querySelector('#sha1-output').textContent =  await ipcRenderer.invoke('getHash', this.value, 'sha1');
    document.querySelector('#sha256-output').textContent =  await ipcRenderer.invoke('getHash', this.value, 'sha256');
    document.querySelector('#sha512-output').textContent =  await ipcRenderer.invoke('getHash', this.value, 'sha512');
  })
  document.querySelector('#text-input').focus();

  function copySHA1(event) {
    console.log('click');
    const text = document.querySelector('#sha1-output').textContent;
    clipboard.writeText(text);
  }