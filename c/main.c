#include <stdio.h>

int main() {
  long barcode = 7898357410015;
  int arrBarcode[12], checksum = 0, sum; 

  for (int count = 12; count >= 0; count--) {
    if (barcode <= 0)
      arrBarcode[count] = 0;

    arrBarcode[count] = barcode % 10;
    barcode /= 10;
  }


  int barLength = sizeof(arrBarcode) / sizeof(arrBarcode[0]);

  for (int i = 1; i < barLength; i += 2){
    arrBarcode[i] = arrBarcode[i] * 3;
  }

  for (int i = 0; i < barLength; i++) {
    checksum += arrBarcode[i];
  }

  sum = checksum + arrBarcode[12];
  printf("The sum between %d + %d is %d\n", checksum, arrBarcode[12], sum);

  if ((checksum + arrBarcode[12]) % 10 == 0){
    printf("The barcode is true\n");
  } else {
    printf("The barcode is false\n");
  }

  return 0;
}
