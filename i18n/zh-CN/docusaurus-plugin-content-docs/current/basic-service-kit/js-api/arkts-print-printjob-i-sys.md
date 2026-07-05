# PrintJob

定义打印任务的接口。

**起始版本：** 10

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## preview

```TypeScript
preview?: PreviewAttribute
```

表示预览设置。

**类型：** PreviewAttribute

**起始版本：** 10

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

## pageRange

```TypeScript
pageRange: PrinterRange
```

表示打印范围大小。

**类型：** PrinterRange

**起始版本：** 10

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

## margin

```TypeScript
margin?: PrintMargin
```

表示当前页边距设置。

**类型：** PrintMargin

**起始版本：** 10

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

## jobState

```TypeScript
jobState: PrintJobState
```

表示当前打印任务状态。

**类型：** PrintJobState

**起始版本：** 10

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

## colorMode

```TypeScript
colorMode: int
```

表示色彩模式。

**类型：** int

**起始版本：** 10

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

## pageSize

```TypeScript
pageSize: PrintPageSize
```

表示选定的页面尺寸。

**类型：** PrintPageSize

**起始版本：** 10

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

## isSequential

```TypeScript
isSequential: boolean
```

表示是否连续打印。true表示连续打印，false表示不连续打印。默认值为false。

**类型：** boolean

**起始版本：** 10

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

## fdList

```TypeScript
fdList: Array<int>
```

表示待打印文件fd列表。

**类型：** Array<int>

**起始版本：** 10

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

## jobId

```TypeScript
jobId: string
```

表示打印任务ID。

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

## isLandscape

```TypeScript
isLandscape: boolean
```

表示是否横向打印。true表示横向打印，false表示纵向打印。默认值为false。

**类型：** boolean

**起始版本：** 10

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

## jobSubstate

```TypeScript
jobSubstate: PrintJobSubState
```

表示当前打印任务子状态。

**类型：** PrintJobSubState

**起始版本：** 11

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

## duplexMode

```TypeScript
duplexMode: int
```

表示单双面打印模式。

**类型：** int

**起始版本：** 10

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

## options

```TypeScript
options?: Object
```

表示JSON对象字符串。

**类型：** Object

**起始版本：** 10

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

## copyNumber

```TypeScript
copyNumber: int
```

表示文件列表副本。

**类型：** int

**起始版本：** 10

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

## printerId

```TypeScript
printerId: string
```

表示负责打印的打印机ID。

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Print.PrintFramework

**系统接口：** 此接口为系统接口。

