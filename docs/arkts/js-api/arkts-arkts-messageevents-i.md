# MessageEvents

Holds the data transferred between Worker threads.

**Inheritance/Implementation:** MessageEvents extends [Event](arkts-arkts-event-i.md#event)

**Since:** 9

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents, PostMessageOptions, MessageEvent, Priority, WorkerEventTarget, ThreadWorkerPriority, ThreadWorkerGlobalScope, DedicatedWorkerGlobalScope, ErrorEvent, Event, EventListener, WorkerOptions, EventTarget, WorkerEventListener } from '@ohos.worker';
```

## data

```TypeScript
readonly data: any
```

Data transferred when an exception occurs.

**Type:** any

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

