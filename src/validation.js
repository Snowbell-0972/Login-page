// function openAndValidateTextFile(file) {
//   const reader = new FileReader();

//   reader.onload = (event) => {
//     const contents = event.target.result;
//     const lines = contents.split('\n');
//     let username = null;
//     let password = null;

//     for (const line of lines) {
//       const keyValue = line.split(':');
//       if (keyValue.length === 2) {
//         const key = keyValue[0].trim();
//         const value = keyValue[1].trim();

//         if (key === 'Username') {
//           username = value;
//         } else if (key === 'Password') {
//           password = value;
//         }
//       }
//     }

//     const expectedUsername = 'Prasad';
//     const expectedPassword = '1234';

//     if (username === expectedUsername && password === expectedPassword) {
//       alert('Valid user!');
//     } else {
//       alert('Invalid user!');
//     }
//   };

//   reader.readAsText(file);
// }

// function handleFile() {
//   const fileInput = document.getElementById('fileInput');
//   const file = fileInput.files[0];
  
//   openAndValidateTextFile(file);
// }
document.getElementById('oprnBtn').addEventListener('click',openTextFile)
function openTextFile() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';

  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const contents = event.target.result;
      alert(contents);
    };

    reader.readAsText(file);
  });

  fileInput.click();
}
