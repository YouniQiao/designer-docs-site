# QueryArg

系统事件查询参数对象接口。

**起始版本：** 9

**系统能力：** SystemCapability.HiviewDFX.HiSysEvent

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { hiSysEvent } from '@kit.PerformanceAnalysisKit';
```

## maxEvents

```TypeScript
maxEvents: long
```

查询的系统事件最多条数。

**类型：** long

**起始版本：** 9

**系统能力：** SystemCapability.HiviewDFX.HiSysEvent

**系统接口：** 此接口为系统接口。

## toSeq

```TypeScript
toSeq?: long
```

查询的系统事件结束序列号，默认值为-1。

**类型：** long

**起始版本：** 10

**系统能力：** SystemCapability.HiviewDFX.HiSysEvent

**系统接口：** 此接口为系统接口。

```TypeScript
toSeq?: long | null | undefined
```

查询的系统事件结束序列号，默认值为-1。

**类型：** long | null | undefined

**起始版本：** 23

**系统能力：** SystemCapability.HiviewDFX.HiSysEvent

**系统接口：** 此接口为系统接口。

## fromSeq

```TypeScript
fromSeq?: long
```

查询的系统事件起始序列号，默认值为-1。

**类型：** long

**起始版本：** 10

**系统能力：** SystemCapability.HiviewDFX.HiSysEvent

**系统接口：** 此接口为系统接口。

```TypeScript
fromSeq?: long | null | undefined
```

查询的系统事件起始序列号，默认值为-1。

**类型：** long | null | undefined

**起始版本：** 23

**系统能力：** SystemCapability.HiviewDFX.HiSysEvent

**系统接口：** 此接口为系统接口。

## endTime

```TypeScript
endTime: long
```

查询的系统事件结束时间（13位时间戳），表示距1970年1月1日0时0分0秒0毫秒的毫秒数。

**类型：** long

**起始版本：** 9

**系统能力：** SystemCapability.HiviewDFX.HiSysEvent

**系统接口：** 此接口为系统接口。

## beginTime

```TypeScript
beginTime: long
```

查询的系统事件起始时间（13位时间戳），表示距1970年1月1日0时0分0秒0毫秒的毫秒数。

**类型：** long

**起始版本：** 9

**系统能力：** SystemCapability.HiviewDFX.HiSysEvent

**系统接口：** 此接口为系统接口。

