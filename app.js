
import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Enter the URL:',
    },
  ])
  .then((answers) => {
    const { url } = answers;

    // Generate the QR code image
    const qrCode = qr.image(url, { type: 'png' });
    const qrImageFileName = 'qrcode.png';
    qrCode.pipe(fs.createWriteStream(qrImageFileName));

    // Save user input and QR code image URL to a text file
    const textFileName = 'user_input.txt';
    const fileContent = `User input URL: ${url}`;

    fs.writeFile(textFileName, fileContent, (err) => {
      if (err) {
        console.error('Error saving file:', err);
      } else {
        console.log(`${textFileName} created successfully.`);
      }
    });
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
