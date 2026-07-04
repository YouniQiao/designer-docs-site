# GlobalScope

Implements the running environment of the Worker thread. The GlobalScope class inherits from WorkerEventTarget.

**Inheritance/Implementation:** GlobalScope extends [WorkerEventTarget](arkts-arkts-workereventtarget-i.md#workereventtarget)

**Since:** 9

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents, PostMessageOptions, MessageEvent, Priority, WorkerEventTarget, ThreadWorkerPriority, ThreadWorkerGlobalScope, DedicatedWorkerGlobalScope, ErrorEvent, Event, EventListener, WorkerOptions, EventTarget, WorkerEventListener } from '@ohos.worker';
```

## name

```TypeScript
readonly name: string
```

Worker instance specified when there is a new Worker instance.

**Type:** string

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

## onerror

```TypeScript
onerror?: (ev: ErrorEvent) => void
```

Called when an exception occurs during worker execution. The event handler is executed in the Worker thread. In the callback function, the ev type is ErrorEvent, indicating the received abnormal data.

**Type:** (ev: ErrorEvent) => void

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

## self

```TypeScript
readonly self: GlobalScope & typeof globalThis
```

GlobalScope itself.

**Type:** GlobalScope & typeof globalThis

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

