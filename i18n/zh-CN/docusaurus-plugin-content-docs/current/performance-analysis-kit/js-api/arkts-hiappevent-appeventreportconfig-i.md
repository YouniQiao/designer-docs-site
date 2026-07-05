# AppEventReportConfig

Defines the event configuration for the data processor to report.

**起始版本：** 11

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## 导入模块

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## isRealTime

```TypeScript
isRealTime?: boolean
```

Whether to report events in real time. The value **true** indicates that events are reported in real time, and the value **false** indicates the opposite. The default value is **false**.

**类型：** boolean

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## domain

```TypeScript
domain?: string
```

Event domain. The value is a string that contains a maximum of 32 characters, including digits (0 to 9), letters (a to z)(A to Z), and underscore (_). It must start with a letter and cannot end with an underscore (_). The default value is an empty string.

**类型：** string

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## name

```TypeScript
name?: string
```

Event name. The value is string that contains a maximum of 48 characters, including digits (0 to 9), letters (a to z)(A to Z), underscore (_), and dollar sign ($). It must start with a letter or dollar sign ($) and end with a digit or letter. The default value is an empty string.

**类型：** string

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

