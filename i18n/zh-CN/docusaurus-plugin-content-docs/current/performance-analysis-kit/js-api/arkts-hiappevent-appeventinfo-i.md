# AppEventInfo

Defines parameters of the event information.

**起始版本：** 9

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## 导入模块

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## domain

```TypeScript
domain: string
```

Event domain. The value is a string of up to 32 characters, including digits (0 to 9), letters (a to z)(A to Z), and underscores (_). It must start with a letter and cannot end with an underscore (_).

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## name

```TypeScript
name: string
```

Event name. The value is string that contains a maximum of 48 characters, including digits (0 to 9), letters (a to z)(A to Z), underscore (_), and dollar sign ($). It must start with a letter or dollar sign ($) and end with a digit or letter.

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## eventType

```TypeScript
eventType: EventType
```

Event type.

**类型：** EventType

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## params

```TypeScript
params: object
```

Event parameter object, which consists of a parameter name and a parameter value. In system events, the fields contained in **params** are defined by system. For details about the fields, you can see the overviews of system events, for example, [Crash Event Overview](docroot://dfx/hiappevent-watcher-crash-events.md). For application events, you need to define the parameters of the [Write]hiAppEvent.write(info: AppEventInfo) API. The specifications are as follows: - A parameter name is a string that contains a maximum of 32 characters, including digits (0 to 9), letters (a to z)(A to Z), underscore (_), and dollar sign ($). It must start with a letter or dollar sign ($) and end with a digit or letter. For example, **testName** and **$123_name**. - The parameter value can be a string, number, boolean, or array. The string type parameter can contain a maximum of 8 * 1024 characters. If the length exceeds the limit, the parameter and its name will be discarded. The value of the number type parameter must be within the range of **Number.MIN_SAFE_INTEGER** to **Number.MAX_SAFE_INTEGER**. If the value exceeds the range, an uncertain value may be generated. The element type in the array type parameter can only be string, number, or boolean. The number of elements must be less than 100. If this limit is exceeded, excess elements will be discarded. - The maximum number of parameters is 32. If this limit is exceeded, excess parameters will be discarded.

**类型：** object

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

```TypeScript
params: RecordData
```

Event parameter object, which consists of a parameter name and a parameter value. In system events, the fields contained in params are defined by system. For details about the fields, you can see the overviews of system events, for example, Crash Event Overview. For application events, you need to define the parameters of the Write API. The specifications are as follows: <br>- A parameter name is a string that contains a maximum of 32 characters, including digits (0 to 9), letters (a to z)(A to Z), underscore (_), and dollar sign ($). It must start with a letter or dollar sign ($) and end with a digit or letter. For example, testName and $123_name. <br>- The parameter value can be a string, number, boolean, or array. The string type parameter can contain a maximum of 8 x 1024 characters. If the length exceeds the limit, the parameter and its name will be discarded. The value of the number type parameter must be within the range of Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER. If the value exceeds the range, an uncertain value may be generated. The element type in the array type parameter can only be string, number, or boolean. The number of elements must be less than 100. If this limit is exceeded, excess elements will be discarded. <br>- The maximum number of parameters is 32. If this limit is exceeded, excess parameters will be discarded.

**类型：** RecordData

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

