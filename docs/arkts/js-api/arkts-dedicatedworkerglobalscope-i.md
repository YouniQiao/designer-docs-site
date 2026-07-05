# DedicatedWorkerGlobalScope

Worker线程自身的运行环境，与宿主线程环境隔离。

**Inheritance:** DedicatedWorkerGlobalScopeextends: WorkerGlobalScope.

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorkerGlobalScope

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents,PostMessageOptions,MessageEvent,Priority,WorkerEventTarget,ThreadWorkerPriority,ThreadWorkerGlobalScope,DedicatedWorkerGlobalScope,ErrorEvent,Event,EventListener,WorkerOptions,EventTarget,WorkerEventListener } from '@kit.ArkTS';
```

## close

```TypeScript
close(): void
```

销毁Worker线程，终止Worker接收消息。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorkerGlobalScope.close

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.Worker("entry/ets/workers/worker.ets");
workerInstance.postMessage("hello world");


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

Worker线程向宿主线程发送消息。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorkerGlobalScope.postMessage

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| messageObject | Object | Yes | messageObject 发送至宿主线程的数据。 |
| transfer | Transferable[] | Yes | transfer 数组不可包含null。 |

## postMessage

```TypeScript
postMessage(messageObject: Object, options?: PostMessageOptions): void
```

Worker线程向宿主线程发送消息。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorkerGlobalScope.postMessage

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| messageObject | Object | Yes | messageObject 发送至宿主线程的数据。 |
| options | PostMessageOptions | No |  |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.Worker("entry/ets/workers/worker.ets");
workerInstance.postMessage("hello world");
workerInstance.onmessage = (): void => {
    console.info("receive data from worker.ets");
}


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

Worker线程向宿主线程发送消息。

**Since:** 9

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorkerGlobalScope.postMessage

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| messageObject | Object | Yes | messageObject 发送至宿主线程的数据。 |
| transfer | ArrayBuffer[] | Yes | transfer 数组不可包含null。 |

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

onmessage属性用于指定当Worker线程收到来自其宿主线程通过 postMessage接口发送的消息时被调用的事件处理程序， 该事件处理程序在Worker线程中执行。

**Type:** (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorkerGlobalScope.onmessage

**System capability:** SystemCapability.Utils.Lang

## onmessageerror

```TypeScript
onmessageerror?: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void
```

onmessage属性用于指定当Worker线程收到一条无法被反序列化的消息时 被调用的事件处理程序，该事件处理程序在Worker线程中执行。

**Type:** (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorkerGlobalScope.onmessageerror

**System capability:** SystemCapability.Utils.Lang

