# Event

Defines the event.

**Since:** 7

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents, PostMessageOptions, MessageEvent, Priority, WorkerEventTarget, ThreadWorkerPriority, ThreadWorkerGlobalScope, DedicatedWorkerGlobalScope, ErrorEvent, Event, EventListener, WorkerOptions, EventTarget, WorkerEventListener } from '@ohos.worker';
```

## timeStamp

```TypeScript
readonly timeStamp: number
```

Timestamp (accurate to millisecond) when the event is created. This parameter is not supported yet.

**Type:** number

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Utils.Lang

## type

```TypeScript
readonly type: string
```

Type of the Event.

**Type:** string

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Utils.Lang

