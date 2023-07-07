# Incomplete
barcode = 7898357410015

def main(value):
    arrBarcode = [int(n) for n in str(value)]
    arrBarcode.pop()
    print(arrBarcode)

    for x in arrBarcode:
        if (x % 2 == 0):
            arrBarcode[x] * 3
            print(arrBarcode[x])

    print(arrBarcode)

main(barcode)
