# PrintJobData

定义打印任务的接口。

**Since:** 23

**System capability:** SystemCapability.Print.PrintFramework

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## jobName

```TypeScript
jobName: string
```

表示打印任务名称。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## isReverse

```TypeScript
isReverse?: boolean
```

表示是否逆序打印。true表示逆序打印，false表示顺序打印。默认值为false。

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## pageSize

```TypeScript
pageSize: PrintPageSize
```

表示选定的页面尺寸。

**Type:** PrintPageSize

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## colorMode

```TypeScript
colorMode: PrintColorMode
```

表示色彩模式。

**Type:** PrintColorMode

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## mediaType

```TypeScript
mediaType?: string
```

表示打印纸张类型。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## isSequential

```TypeScript
isSequential?: boolean
```

表示是否连续打印。true表示连续打印，false表示不连续打印。默认值为false。

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## fdList

```TypeScript
fdList?: int[]
```

表示待打印文件fd列表。

**Type:** int[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## docFlavor

```TypeScript
docFlavor: DocFlavor
```

表示打印数据来源形式。

**Type:** DocFlavor

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## jobId

```TypeScript
jobId?: string
```

表示打印任务的唯一标识符。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## isLandscape

```TypeScript
isLandscape: boolean
```

表示是否横向打印。true表示横向打印，false表示纵向打印。默认值为false。

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## isBorderless

```TypeScript
isBorderless?: boolean
```

表示是否无边框打印。true表示无边框打印，false表示有边框打印。默认值为true。

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## isCollate

```TypeScript
isCollate?: boolean
```

表示打印顺序方式。true表示逐页打印，false表示逐份打印。默认值为true。

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## isAutoRotate

```TypeScript
isAutoRotate?: boolean
```

表示是否自动旋转页面。true表示自动旋转页面，false表示不自动旋转页面。默认值为true。

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## binaryData

```TypeScript
binaryData?: Uint8Array
```

表示待打印二进制数据。

**Type:** Uint8Array

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## duplexMode

```TypeScript
duplexMode: PrintDuplexMode
```

表示单双面打印模式。

**Type:** PrintDuplexMode

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## options

```TypeScript
options?: string
```

表示以JSON格式字符串化的对象。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## copyNumber

```TypeScript
copyNumber: int
```

表示文件列表副本数。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## printerId

```TypeScript
printerId: string
```

表示打印机ID。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## printQuality

```TypeScript
printQuality?: PrintQuality
```

表示打印质量。

**Type:** PrintQuality

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

## documentFormat

```TypeScript
documentFormat: PrintDocumentFormat
```

表示打印数据格式。

**Type:** PrintDocumentFormat

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

