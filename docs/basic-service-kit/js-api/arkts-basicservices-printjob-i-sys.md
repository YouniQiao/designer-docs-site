# PrintJob (System API)

Defines a print job.

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## colorMode

```TypeScript
colorMode: number
```

Color mode.

**Type:** number

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## copyNumber

```TypeScript
copyNumber: number
```

Copy of the file list.

**Type:** number

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## duplexMode

```TypeScript
duplexMode: number
```

Simplex or duplex mode.

**Type:** number

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## fdList

```TypeScript
fdList: Array<number>
```

FD list of files to print.

**Type:** Array<number>

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## isLandscape

```TypeScript
isLandscape: boolean
```

Whether pages are printed in landscape mode. The value **true** indicates that pages are printed in landscape mode, and **false** indicates that pages are printed in portrait mode. The default value is **false**.

**Type:** boolean

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## isSequential

```TypeScript
isSequential: boolean
```

Whether the printing is sequential. The value **true** means that the printing is sequential, and **false** means the opposite. The default value is **false**.

**Type:** boolean

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## jobId

```TypeScript
jobId: string
```

ID of the print job.

**Type:** string

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## jobState

```TypeScript
jobState: PrintJobState
```

State of the print job.

**Type:** PrintJobState

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## jobSubstate

```TypeScript
jobSubstate: PrintJobSubState
```

Substate of the print job.

**Type:** PrintJobSubState

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## margin

```TypeScript
margin?: PrintMargin
```

Current page margin.

**Type:** PrintMargin

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## options

```TypeScript
options?: Object
```

Printer options. The value is a JSON object string.

**Type:** Object

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## pageRange

```TypeScript
pageRange: PrinterRange
```

Print range.

**Type:** PrinterRange

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## pageSize

```TypeScript
pageSize: PrintPageSize
```

Selected page size.

**Type:** PrintPageSize

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## preview

```TypeScript
preview?: PreviewAttribute
```

Preview settings.

**Type:** PreviewAttribute

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## printerId

```TypeScript
printerId: string
```

ID of the printer used for printing.

**Type:** string

**Since:** 24

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

