# QueryArg

系统事件查询参数对象接口。

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { hiSysEvent } from '@kit.PerformanceAnalysisKit';
```

## maxEvents

```TypeScript
maxEvents: long
```

查询的系统事件最多条数。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## toSeq

```TypeScript
toSeq?: long
```

查询的系统事件结束序列号，默认值为-1。

**Type:** long

**Since:** 10

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

```TypeScript
toSeq?: long | null | undefined
```

查询的系统事件结束序列号，默认值为-1。

**Type:** long | null | undefined

**Since:** 23

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## fromSeq

```TypeScript
fromSeq?: long
```

查询的系统事件起始序列号，默认值为-1。

**Type:** long

**Since:** 10

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

```TypeScript
fromSeq?: long | null | undefined
```

查询的系统事件起始序列号，默认值为-1。

**Type:** long | null | undefined

**Since:** 23

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## endTime

```TypeScript
endTime: long
```

查询的系统事件结束时间（13位时间戳），表示距1970年1月1日0时0分0秒0毫秒的毫秒数。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## beginTime

```TypeScript
beginTime: long
```

查询的系统事件起始时间（13位时间戳），表示距1970年1月1日0时0分0秒0毫秒的毫秒数。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

