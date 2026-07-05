# PrinterRange (System API)

Defines the print range.

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { print } from '@ohos.print';
```

## endPage

```TypeScript
endPage?: number
```

End page. The default value is the maximum number of pages of the file to be printed.

**Type:** number

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## pages

```TypeScript
pages?: Array<number>
```

Page range set of the file to print. The default value is empty.

**Type:** Array<number>

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## startPage

```TypeScript
startPage?: number
```

Start page. The default value is **1**.

**Type:** number

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

