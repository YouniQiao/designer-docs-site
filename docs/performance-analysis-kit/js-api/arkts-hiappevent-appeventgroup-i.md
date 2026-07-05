# AppEventGroup

Defines parameters of the event group returned by the subscription. This API can be used to obtain detail information about an event group, which is often used in the **onReceive** callback of [Watcher]hiAppEvent.Watcher.

**Since:** 11

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## Modules to Import

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## name

```TypeScript
name: string
```

Event name.

**Type:** string

**Since:** 11

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## appEventInfos

```TypeScript
appEventInfos: Array<AppEventInfo>
```

Event object group.

**Type:** Array<AppEventInfo>

**Since:** 11

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

