# DedicatedWorkerGlobalScope

Specifies the worker thread running environment, which is isolated from the host thread environment

**Inheritance/Implementation:** DedicatedWorkerGlobalScope extends [WorkerGlobalScope](arkts-arkts-workerglobalscope-i.md#workerglobalscope)

**Since:** 7

**Deprecated since:** 9

**Substitutes:** ThreadWorkerGlobalScope

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents, PostMessageOptions, MessageEvent, Priority, WorkerEventTarget, ThreadWorkerPriority, ThreadWorkerGlobalScope, DedicatedWorkerGlobalScope, ErrorEvent, Event, EventListener, WorkerOptions, EventTarget, WorkerEventListener } from '@ohos.worker';
```

## close

```TypeScript
close(): void
```

Close the worker thread to stop the worker from receiving messages

**Since:** 7

**Deprecated since:** 9

**Substitutes:** close

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.Worker("entry/ets/workers/worker.ets");
workerInstance.postMessage("hello world");

```

```TypeScript
// worker.ets
import { worker } from '@kit.ArkTS';

const parentPort = worker.parentPort;
parentPort.onmessage = (): void => {
    parentPort.close()
}

```

## postMessage

```TypeScript
postMessage(messageObject: Object, transfer: Transferable[]): void
```

Send a message to be host thread from the worker

**Since:** 7

**Deprecated since:** 9

**Substitutes:** postMessage

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| messageObject | Object | Yes | messageObject Data to be sent to the worker |
| transfer | Transferable[] | Yes | transfer array cannot contain null. |

## postMessage

```TypeScript
postMessage(messageObject: Object, options?: PostMessageOptions): void
```

Send a message to be host thread from the worker

**Since:** 7

**Deprecated since:** 9

**Substitutes:** postMessage

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| messageObject | Object | Yes | messageObject Data to be sent to the worker |
| options | PostMessageOptions | No | Option can be set for postmessage. |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.Worker("entry/ets/workers/worker.ets");
workerInstance.postMessage("hello world");
workerInstance.onmessage = (): void => {
    console.info("receive data from worker.ets");
}

```

```TypeScript
// worker.ets
import { ErrorEvent, MessageEvents, worker } from '@kit.ArkTS';

const parentPort = worker.parentPort;
parentPort.onmessage = (e: MessageEvents) => {
  parentPort.postMessage("receive data from main thread");
}

```

## postMessage

```TypeScript
postMessage(messageObject: Object, transfer: ArrayBuffer[]): void
```

Send a message to host thread from the worker

**Since:** 9

**Deprecated since:** 9

**Substitutes:** postMessage

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| messageObject | Object | Yes | messageObject Data to be sent to the worker |
| transfer | ArrayBuffer[] | Yes | transfer array cannot contain null. |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.Worker("entry/ets/workers/worker.ets");
workerInstance.postMessage("hello world");
workerInstance.onmessage = (e: MessageEvents): void => {
    // let data = e.data;
    console.info("receive data from worker.ets");
}

```

```TypeScript
// worker.ets
import { DedicatedWorkerGlobalScope, worker } from '@kit.ArkTS';

const workerPort: DedicatedWorkerGlobalScope = worker.parentPort;

workerPort.onmessage = (): void => {
    // let data = e.data;
    let buffer = new ArrayBuffer(5)
    workerPort.postMessage(buffer, [buffer]);
}

```

## onmessage

```TypeScript
onmessage?: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void
```

The onmessage attribute of parentPort specifies the event handler to be called then the worker thread receives a message sent by the host thread through worker postMessage. The event handler is executed in the worker thread.

**Type:** (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void

**Since:** 7

**Deprecated since:** 9

**Substitutes:** onmessage

**System capability:** SystemCapability.Utils.Lang

## onmessageerror

```TypeScript
onmessageerror?: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void
```

The onmessage attribute of parentPort specifies the event handler to be called then the worker receives a message that cannot be deserialized. The event handler is executed in the worker thread.

**Type:** (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void

**Since:** 7

**Deprecated since:** 9

**Substitutes:** onmessageerror

**System capability:** SystemCapability.Utils.Lang

