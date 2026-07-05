# AppEventGroup

Defines parameters of the event group returned by the subscription. This API can be used to obtain detail information about an event group, which is often used in the **onReceive** callback of [Watcher](arkts-performanceanalysis-watcher-i.md#watcher).

**Since:** 11

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## Modules to Import

```TypeScript
import { hiAppEvent } from '@ohos.hiviewdfx.hiAppEvent';
```

## appEventInfos

```TypeScript
appEventInfos: Array<AppEventInfo>
```

Event object group.

**Type:** Array<AppEventInfo>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## name

```TypeScript
name: string
```

Event name.

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

