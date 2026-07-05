# Worker

Worker类包含所有Worker功能。

**Inheritance:** Workerimplements: EventTarget.

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorker

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents,PostMessageOptions,MessageEvent,Priority,WorkerEventTarget,ThreadWorkerPriority,ThreadWorkerGlobalScope,DedicatedWorkerGlobalScope,ErrorEvent,Event,EventListener,WorkerOptions,EventTarget,WorkerEventListener } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor(scriptURL: string, options?: WorkerOptions)
```

创建一个worker实例。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorker.constructor

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scriptURL | string | Yes | scriptURL worker执行的脚本URL。 |
| options | WorkerOptions | No | 可为worker设置的选项。 |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

// URL of the Worker file: "entry/src/main/ets/workers/worker.ets"
const workerInstance = new worker.Worker('entry/ets/workers/worker.ets', {name: "WorkerThread"});

```

## off(string)

```TypeScript
off(type: string, listener?: EventListener): void
```

移除Worker的事件监听。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorker.off

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 需要移除的事件类型。 |
| listener | EventListener | No | listener 要移除的事件监听的回调函数。 |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.Worker("entry/ets/workers/worker.ets");
// Use on, once, or addEventListener to add a listener for the "alert" event, and use off to remove the listener.
workerInstance.off("alert");

```

## on(string)

```TypeScript
on(type: string, listener: EventListener): void
```

向Worker添加一个事件监听。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorker.on

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | type 向Worker添加一个事件监听。 |
| listener | EventListener | Yes | listener 当指定类型的事件发生时调用的回调函数。 |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.Worker("entry/ets/workers/worker.ets");
workerInstance.on("alert", () => {
    console.info("alert listener callback");
})

```

## once(string)

```TypeScript
once(type: string, listener: EventListener): void
```

向Worker添加一个事件监听， 该事件监听只执行一次，执行完后会自动删除。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorker.once

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 监听的事件类型。 |
| listener | EventListener | Yes | listener 当指定类型的事件发生时调用的回调函数。 |

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

向Worker线程发送消息。 数据通过结构化克隆算法传递。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorker.postMessage

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | Object | Yes | 发送至Worker的数据。 |
| transfer | ArrayBuffer[] | Yes | transfer 可转移的ArrayBuffer实例对象。  transferList数组不可包含null。 |

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

向Worker线程发送消息。 数据通过结构化克隆算法传递。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorker.postMessage

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | Object | Yes | 发送至Worker的数据。 |
| options | PostMessageOptions | No |  |

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

销毁Worker线程，终止Worker接收消息。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorker.terminate

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.Worker("entry/ets/workers/worker.ets");
workerInstance.terminate();

```

## onmessage

```TypeScript
onmessage?: (event: MessageEvent) => void
```

onmessage属性用于指定当宿主线程接收到来自其创建的Worker 通过parentPort.postMessage发送的消息时被调用的事件处理程序， 该事件处理程序在宿主线程中执行。

**Type:** (event: MessageEvent) => void

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorker.onmessage

**System capability:** SystemCapability.Utils.Lang

## onmessageerror

```TypeScript
onmessageerror?: (event: MessageEvent) => void
```

onmessage属性用于指定当Worker收到一条无法被序列化的消息时 被调用的事件处理程序，该事件处理程序在宿主线程中执行。

**Type:** (event: MessageEvent) => void

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorker.onmessageerror

**System capability:** SystemCapability.Utils.Lang

## onerror

```TypeScript
onerror?: (err: ErrorEvent) => void
```

onerror属性用于指定Worker在执行过程中发生异常时被调用的事件处理程序， 该事件处理程序在宿主线程中执行。

**Type:** (err: ErrorEvent) => void

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorker.onerror

**System capability:** SystemCapability.Utils.Lang

## onexit

```TypeScript
onexit?: (code: number) => void
```

当Worker销毁时被调用的事件处理程序，处理程序在宿主线程中执行。回调函数中code类型为number， 异常退出为1，正常退出为0。默认值为undefined。

**Type:** (code: number) => void

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.ThreadWorker.onexit

**System capability:** SystemCapability.Utils.Lang

