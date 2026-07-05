# Watcher

系统事件订阅者对象接口。

**Since:** 9

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

订阅事件的回调方法(info: [SysEventInfo](arkts-hisysevent-syseventinfo-i-sys.md#SysEventInfo)) => void。

**Type:** (info: SysEventInfo) => void

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## rules

```TypeScript
rules: WatchRule[]
```

订阅对象数组，每个订阅者对象包含多个订阅规则。

**Type:** WatchRule[]

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## onServiceDied

```TypeScript
onServiceDied: () => void
```

系统事件服务关闭的回调方法() => void。

**Type:** () => void

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

