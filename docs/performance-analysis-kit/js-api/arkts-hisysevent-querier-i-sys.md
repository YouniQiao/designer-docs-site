# Querier

系统事件查询者对象接口。

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { hiSysEvent } from '@kit.PerformanceAnalysisKit';
```

## onComplete

```TypeScript
onComplete: (reason: int, total: int) => void
```

查询结果统计的回调方法(reason: int, total: int) => void。

**Type:** (reason: int, total: int) => void

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## onQuery

```TypeScript
onQuery: (infos: SysEventInfo[]) => void
```

返回查询到的系统事件的回调方法(infos: [SysEventInfo](arkts-hisysevent-syseventinfo-i-sys.md#SysEventInfo)[]) => void。

**Type:** (infos: SysEventInfo[]) => void

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

