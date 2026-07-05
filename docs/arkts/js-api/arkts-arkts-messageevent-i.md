# MessageEvent

Holds the data transferred between worker threads.

**Inheritance/Implementation:** MessageEvent extends [Event](arkts-arkts-event-i.md#event)

**Since:** 7

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents, PostMessageOptions, MessageEvent, Priority, WorkerEventTarget, ThreadWorkerPriority, ThreadWorkerGlobalScope, DedicatedWorkerGlobalScope, ErrorEvent, Event, EventListener, WorkerOptions, EventTarget, WorkerEventListener } from '@ohos.worker';
```

## data

```TypeScript
readonly data: T
```

Data transferred when an exception occurs.

**Type:** T

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Utils.Lang

