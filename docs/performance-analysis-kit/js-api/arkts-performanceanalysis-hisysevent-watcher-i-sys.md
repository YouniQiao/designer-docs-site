# Watcher (System API)

Defines a watcher for event subscription.

**Since:** 9

<!--Device-hiSysEvent-interface Watcher--><!--Device-hiSysEvent-interface Watcher-End-->

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { hiSysEvent } from '@kit.PerformanceAnalysisKit';
```

## onEvent

```TypeScript
onEvent: (info: SysEventInfo) => void
```

Callback for event subscription: (info: [SysEventInfo](arkts-performanceanalysis-hisysevent-syseventinfo-i-sys.md)) => void

**Type:** (info: SysEventInfo) => void

**Since:** 9

<!--Device-Watcher-onEvent: (info: SysEventInfo) => void--><!--Device-Watcher-onEvent: (info: SysEventInfo) => void-End-->

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## onServiceDied

```TypeScript
onServiceDied: () => void
```

Callback for disabling of event subscription: () => void

**Type:** () => void

**Since:** 9

<!--Device-Watcher-onServiceDied: () => void--><!--Device-Watcher-onServiceDied: () => void-End-->

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## rules

```TypeScript
rules: WatchRule[]
```

Array of matching event subscription rules.

**Type:** WatchRule[]

**Since:** 9

<!--Device-Watcher-rules: WatchRule[]--><!--Device-Watcher-rules: WatchRule[]-End-->

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

