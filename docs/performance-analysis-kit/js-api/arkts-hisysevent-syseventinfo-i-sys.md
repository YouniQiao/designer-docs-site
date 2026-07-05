# SysEventInfo

系统事件信息对象接口。

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { hiSysEvent } from '@kit.PerformanceAnalysisKit';
```

## domain

```TypeScript
domain: string
```

事件领域。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## name

```TypeScript
name: string
```

事件名称。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## eventType

```TypeScript
eventType: EventType
```

事件类型。

**Type:** EventType

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## params

```TypeScript
params?: object
```

事件参数。

**Type:** object

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

```TypeScript
params?: Record<string, boolean | int | double | string | bigint | boolean[] | int[] | double[] | string[] | bigint[]> | null | undefined
```

事件参数。

**Type:** Record<string, boolean | int | double | string | bigint | boolean[] | int[] | double[] | string[] | bigint[]> | null | undefined

**Since:** 23

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

