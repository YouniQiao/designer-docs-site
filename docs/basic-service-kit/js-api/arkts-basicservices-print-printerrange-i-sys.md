# PrinterRange (System API)

Defines the print range.

**Since:** 24

<!--Device-print-interface PrinterRange--><!--Device-print-interface PrinterRange-End-->

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## endPage

```TypeScript
endPage?: number
```

End page. The default value is the maximum number of pages of the file to be printed.

**Type:** number

**Since:** 24

<!--Device-PrinterRange-endPage?: int--><!--Device-PrinterRange-endPage?: int-End-->

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## pages

```TypeScript
pages?: Array<number>
```

Page range set of the file to print. The default value is empty.

**Type:** Array<number>

**Since:** 24

<!--Device-PrinterRange-pages?: Array<int>--><!--Device-PrinterRange-pages?: Array<int>-End-->

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## startPage

```TypeScript
startPage?: number
```

Start page. The default value is **1**.

**Type:** number

**Since:** 24

<!--Device-PrinterRange-startPage?: int--><!--Device-PrinterRange-startPage?: int-End-->

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

