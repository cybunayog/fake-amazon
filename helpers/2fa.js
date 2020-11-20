const speakeasy = require('speakeasy');
var QRCode = require('qrcode');

const secret = speakeasy.generateSecret({length: 20});
console.log(secret.base32);

QRCode.toDataURL(secret.otpauth_url, function(err, image_data) {
  console.log(image_data); // A data URI for the QR code image
});