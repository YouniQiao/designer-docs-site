# Worker

The Worker class contains all Worker functions.

**Inheritance/Implementation:** Worker implements [EventTarget](arkts-arkts-eventtarget-i.md)

**Since:** 7

**Deprecated since:** 9

**Substitutes:** ThreadWorker

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents, PostMessageOptions, MessageEvent, Priority, WorkerEventTarget, ThreadWorkerPriority, ThreadWorkerGlobalScope, DedicatedWorkerGlobalScope, ErrorEvent, Event, EventListener, WorkerOptions, EventTarget, WorkerEventListener } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor(scriptURL: string, options?: WorkerOptions)
```

Creates a worker instance

**Since:** 7

**Deprecated since:** 9

**Substitutes:** constructor

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scriptURL | string | Yes | scriptURL URL of the script to be executed by the worker |
| options | WorkerOptions | No | Options that can be set for the worker |

**Example**

The following uses the Index.ets file in the entry module of the stage model as an example to describe how to load the worker file. For details about how to use the library to load the Worker thread file, see [Precautions for File URLs](../../arkts-utils/worker-introduction.md#precautions-for-file-urls).

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

// URL of the Worker file: "entry/src/main/ets/workers/worker.ets"
const workerInstance = new worker.Worker('entry/ets/workers/worker.ets', {name: "WorkerThread"});

```

## off

```TypeScript
off(type: string, listener?: EventListener): void
```

Removes an event listener to the worker.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** off

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | Type of the event for which the event listener is removed. |
| listener | EventListener | No | listener Callback of the event listener to remove. |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.Worker("entry/ets/workers/worker.ets");
// Use on, once, or addEventListener to add a listener for the "alert" event, and use off to remove the listener.
workerInstance.off("alert");

```

## on

```TypeScript
on(type: string, listener: EventListener): void
```

Adds an event listener to the worker.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** on

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | type Adds an event listener to the worker. |
| listener | EventListener | Yes | listener Callback to invoke when an event of the specified type occurs. |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.Worker("entry/ets/workers/worker.ets");
workerInstance.on("alert", () => {
    console.info("alert listener callback");
})

```

## once

```TypeScript
once(type: string, listener: EventListener): void
```

Adds an event listener to the worker
and removes the event listener automatically after it is invoked once.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** once

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | Type of the event to listen for |
| listener | EventListener | Yes | listener Callback to invoke when an event of the specified type occurs |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.Worker("entry/ets/workers/worker.ets");
workerInstance.once("alert", () => {
    console.info("alert listener callback");
})

```

## postMessage

```TypeScript
postMessage(message: Object, transfer: ArrayBuffer[]): void
```

Sends a message to the worker thread.
The data is transferred using the structured clone algorithm.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** postMessage

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | Object | Yes | Data to be sent to the worker |
| transfer | ArrayBuffer[] | Yes | transfer ArrayBuffer instance that can be transferred.The transferList array cannot contain null. |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.Worker("entry/ets/workers/worker.ets");

let buffer = new ArrayBuffer(8);
workerInstance.postMessage(buffer, [buffer]);

```

## postMessage

```TypeScript
postMessage(message: Object, options?: PostMessageOptions): void
```

Sends a message to the worker thread.
The data is transferred using the structured clone algorithm.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** postMessage

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | Object | Yes | Data to be sent to the worker |
| options | PostMessageOptions | No | Option can be set for postmessage.The transferList array cannot contain null. |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.Worker("entry/ets/workers/worker.ets");

workerInstance.postMessage("hello world");

let buffer = new ArrayBuffer(8);
workerInstance.postMessage(buffer, [buffer]);

```

## terminate

```TypeScript
terminate(): void
```

Terminates the worker thread to stop the worker from receiving messages

**Since:** 7

**Deprecated since:** 9

**Substitutes:** terminate

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.Worker("entry/ets/workers/worker.ets");
workerInstance.terminate();

```

## onerror

```TypeScript
onerror?: (err: ErrorEvent) => void
```

The onerror attribute of the worker specifies the event handler to be called
when an exception occurs during worker execution.
The event handler is executed in the host thread.

**Type:** (err: ErrorEvent) => void

**Since:** 7

**Deprecated since:** 9

**Substitutes:** onerror

**System capability:** SystemCapability.Utils.Lang

## onexit

```TypeScript
onexit?: (code: number) => void
```

Called when the Worker thread exits. The event handler is executed in the host thread. In the callback function,
the code value is of the number type, where the value 1 indicates abnormal exit and 0 indicates normal exit.The default value is undefined.

**Type:** (code: number) => void

**Since:** 7

**Deprecated since:** 9

**Substitutes:** onexit

**System capability:** SystemCapability.Utils.Lang

## onmessage

```TypeScript
onmessage?: (event: MessageEvent) => void
```

The onmessage attribute of the worker specifies the event handler
to be called then the host thread receives a message created by itself
and sent by the worker through the parentPort.postMessage.
The event handler is executed in the host thread.

**Type:** (event: MessageEvent) => void

**Since:** 7

**Deprecated since:** 9

**Substitutes:** onmessage

**System capability:** SystemCapability.Utils.Lang

## onmessageerror

```TypeScript
onmessageerror?: (event: MessageEvent) => void
```

The onmessage attribute of the worker specifies the event handler
when the worker receives a message that cannot be serialized.
The event handler is executed in the host thread.

**Type:** (event: MessageEvent) => void

**Since:** 7

**Deprecated since:** 9

**Substitutes:** onmessageerror

**System capability:** SystemCapability.Utils.Lang

