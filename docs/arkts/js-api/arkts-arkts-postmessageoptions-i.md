# PostMessageOptions

Defines the object for which the ownership is to be transferred during data transfer. The object must be an ArrayBuffer instance. After the ownership is transferred, the object becomes unavailable in the sender and can be used only in the receiver.

**Since:** 7

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents, PostMessageOptions, MessageEvent, Priority, WorkerEventTarget, ThreadWorkerPriority, ThreadWorkerGlobalScope, DedicatedWorkerGlobalScope, ErrorEvent, Event, EventListener, WorkerOptions, EventTarget, WorkerEventListener } from '@ohos.worker';
```

## transfer

```TypeScript
transfer?: Object[]
```

ArrayBuffer array used to transfer the ownership. The array cannot be null.

**Type:** Object[]

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

