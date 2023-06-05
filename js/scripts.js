(() => {
  if (document.getElementById('header')) {
  document.getElementById('copyip').addEventListener('click', () => {
    const serverIP = 'play';
    const tempInput = document.createElement('input');
    tempInput.setAttribute('value', serverIP);
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    Swal.fire({
      icon: 'success',
      title: 'Server IP Copied',
      html: 'Server IP successfully copied to the clipboard.'
    });
  });

  }
})();
