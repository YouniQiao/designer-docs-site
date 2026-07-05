# AppEventFilter

Defines parameters of subscription filtering conditions of a [Watcher](arkts-performanceanalysis-watcher-i.md#watcher). This API is used to set event filtering conditions in the event watcher to ensure that only the events that meet the filtering conditions are subscribed to. > **NOTE** > > The subscription specifications of system events vary according to application types. For details, see > [HiAppEvent Constraints](../../../../dfx/hiappevent-intro.md#constraints).

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## Modules to Import

```TypeScript
import { hiAppEvent } from '@ohos.hiviewdfx.hiAppEvent';
```

## domain

```TypeScript
domain: string
```

Event domain, which can be the system event domain (**hiAppEvent.domain.OS**) or the event domain of the custom event information ([AppEventInfo](arkts-performanceanalysis-appeventinfo-i.md#appeventinfo)) passed through the [Write](arkts-performanceanalysis-write-f.md#write-1) API.

**Type:** string

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## eventTypes

```TypeScript
eventTypes?: EventType[]
```

Event types. If this parameter is not set, events are not filtered by default.

**Type:** EventType[]

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## names

```TypeScript
names?: string[]
```

Names of the events to be subscribed. If this parameter is not set, events are not filtered by default.

**Type:** string[]

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

