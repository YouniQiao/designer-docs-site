# Querier (System API)

Defines an event query instance.

**Since:** 9

<!--Device-hiSysEvent-interface Querier--><!--Device-hiSysEvent-interface Querier-End-->

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { hiSysEvent } from '@kit.PerformanceAnalysisKit';
```

## onComplete

```TypeScript
onComplete: (reason: number, total: number) => void
```

Callback used to return the query result statistics: (reason: int, total: int) => void

**Type:** (reason: number, total: number) => void

**Since:** 9

<!--Device-Querier-onComplete: (reason: int, total: int) => void--><!--Device-Querier-onComplete: (reason: int, total: int) => void-End-->

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## onQuery

```TypeScript
onQuery: (infos: SysEventInfo[]) => void
```

Callback used to return the queried system events: (infos: [SysEventInfo](arkts-performanceanalysis-hisysevent-syseventinfo-i-sys.md)[]) =>void.

**Type:** (infos: SysEventInfo[]) => void

**Since:** 9

<!--Device-Querier-onQuery: (infos: SysEventInfo[]) => void--><!--Device-Querier-onQuery: (infos: SysEventInfo[]) => void-End-->

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

