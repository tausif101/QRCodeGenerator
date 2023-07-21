# QRCodeGenerator
Download and type "npm init" in your terminal. Then run the file app.js; Insert Link to create QRCode. This project create as QR Code in PNG Format and it will also create a text file which will contain the link you inputted. In this project npm package: inquirer, qr-images. Node native module file system has also been used.

Let me explain how the QR Code Generator works without diving into the actual code:

1. **User Input:**
   The QR Code Generator is a Node.js application that interacts with the user through the command-line interface. It prompts the user to enter a URL.

2. **QR Code Generation:**
   After the user enters the URL, the application uses the `qr-image` npm package to generate a QR code image for the provided URL. A QR code is a two-dimensional barcode that can store various types of information, such as URLs, text, contact details, and more.

3. **Saving the QR Code Image:**
   Once the QR code image is generated, the application saves it as a PNG file named `qrcode.png` in the same directory as the application.

4. **Creating a Text File:**
   The application also creates a text file named `user_input.txt` to record the user's input and the associated QR code image URL. The text file contains two lines: one indicating the user-entered URL and the other indicating the filename of the QR code image.

5. **User Output:**
   Upon successful execution, the application provides feedback to the user, notifying them that the text file `user_input.txt` has been created, and the QR code image has been saved as `qrcode.png`.

By running this application, users can generate QR code images for any URLs they provide and keep track of the URLs and corresponding QR codes through the `user_input.txt` file. It can be useful for creating QR codes for websites, sharing links, or storing data that can be easily scanned by QR code readers and apps.
