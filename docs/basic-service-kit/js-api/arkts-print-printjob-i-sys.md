# PrintJob

定义打印任务的接口。

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## preview

```TypeScript
preview?: PreviewAttribute
```

表示预览设置。

**Type:** PreviewAttribute

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## pageRange

```TypeScript
pageRange: PrinterRange
```

表示打印范围大小。

**Type:** PrinterRange

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## margin

```TypeScript
margin?: PrintMargin
```

表示当前页边距设置。

**Type:** PrintMargin

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## jobState

```TypeScript
jobState: PrintJobState
```

表示当前打印任务状态。

**Type:** PrintJobState

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## colorMode

```TypeScript
colorMode: int
```

表示色彩模式。

**Type:** int

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## pageSize

```TypeScript
pageSize: PrintPageSize
```

表示选定的页面尺寸。

**Type:** PrintPageSize

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## isSequential

```TypeScript
isSequential: boolean
```

表示是否连续打印。true表示连续打印，false表示不连续打印。默认值为false。

**Type:** boolean

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## fdList

```TypeScript
fdList: Array<int>
```

表示待打印文件fd列表。

**Type:** Array<int>

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## jobId

```TypeScript
jobId: string
```

表示打印任务ID。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## isLandscape

```TypeScript
isLandscape: boolean
```

表示是否横向打印。true表示横向打印，false表示纵向打印。默认值为false。

**Type:** boolean

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## jobSubstate

```TypeScript
jobSubstate: PrintJobSubState
```

表示当前打印任务子状态。

**Type:** PrintJobSubState

**Since:** 11

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## duplexMode

```TypeScript
duplexMode: int
```

表示单双面打印模式。

**Type:** int

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## options

```TypeScript
options?: Object
```

表示JSON对象字符串。

**Type:** Object

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## copyNumber

```TypeScript
copyNumber: int
```

表示文件列表副本。

**Type:** int

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

## printerId

```TypeScript
printerId: string
```

表示负责打印的打印机ID。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

