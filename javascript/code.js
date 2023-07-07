/* eslint-disable */
const barcodes = ["7898357410015", "5901234123457"];
const barcode = barcodes[1];

console.time();
function getTwelveDigits(barcode) {
  const arrBarcode = barcode.split("");
  arrBarcode.splice(-1);
  return arrBarcode;
}

function checksum() {
  const twelveDigits = getTwelveDigits(barcode);
  const transformToNumber = twelveDigits.map((n) => Number(n));

  for (let i = 1; i <= transformToNumber.length; i += 2) {
    transformToNumber[i] = transformToNumber[i] * 3;
  }

  let res = 0;
  for (let i = 0; i < transformToNumber.length; i++) {
    res += transformToNumber[i];
  }
  return res;
}

function verifyBarcode() {
  const getChecksum = checksum();
  const isValid = (getChecksum + Number(barcode.split("")[12])) % 10 == 0;
  return isValid;
}

console.log(verifyBarcode());
console.log("Tempo de execução foi de: ");
console.timeEnd();
