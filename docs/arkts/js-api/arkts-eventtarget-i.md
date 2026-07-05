# EventTarget

用于管理Worker的监听事件。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.WorkerEventTarget

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents,PostMessageOptions,MessageEvent,Priority,WorkerEventTarget,ThreadWorkerPriority,ThreadWorkerGlobalScope,DedicatedWorkerGlobalScope,ErrorEvent,Event,EventListener,WorkerOptions,EventTarget,WorkerEventListener } from '@kit.ArkTS';
```

## addEventListener

```TypeScript
addEventListener(type: string, listener: EventListener): void
```

向Worker添加一个事件监听。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.WorkerEventTarget.addEventListener

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 监听的事件类型。 |
| listener | EventListener | Yes | listener 当指定类型的事件发生时调用的回调函数。 |

**Example**

```TypeScript
// worker.ets
import { DedicatedWorkerGlobalScope, ErrorEvent, MessageEvents, worker } from '@kit.ArkTS';

const workerPort: DedicatedWorkerGlobalScope = worker.parentPort;

workerPort.addEventListener("alert", () => {
  console.info("alert listener callback");
})

```

## dispatchEvent

```TypeScript
dispatchEvent(event: Event): boolean
```

分发定义在Worker的事件。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.WorkerEventTarget.dispatchEvent

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Event | Yes | 需要分发的事件。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean |  |

**Example**

```TypeScript
// worker.ets
import { DedicatedWorkerGlobalScope, ErrorEvent, MessageEvents, worker } from '@kit.ArkTS';

const workerPort: DedicatedWorkerGlobalScope = worker.parentPort;

workerPort.addEventListener("alert_add", ()=>{
  console.info("alert listener callback");
})

workerPort.dispatchEvent({type: 'alert_add', timeStamp: 0}); // timeStamp is not supported yet.


// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.Worker("entry/ets/workers/worker.ets");
workerInstance.postMessage("hello world");
workerInstance.onmessage = (): void => {
    console.info("receive data from worker.ets");
}


// worker.ets
import { DedicatedWorkerGlobalScope, ErrorEvent, MessageEvents, worker } from '@kit.ArkTS';

const workerPort: DedicatedWorkerGlobalScope = worker.parentPort;

workerPort.addEventListener("alert", ()=>{
  console.info("alert listener callback");
})

workerPort.onmessage = (event: MessageEvents) => {
  workerPort.dispatchEvent({type:"alert", timeStamp:0}); // timeStamp is not supported yet.
}

```

## removeAllListener

```TypeScript
removeAllListener(): void
```

移除Worker所有的事件监听。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.WorkerEventTarget.removeAllListener

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
// worker.ets
import { DedicatedWorkerGlobalScope, ErrorEvent, MessageEvents, worker } from '@kit.ArkTS';

const workerPort: DedicatedWorkerGlobalScope = worker.parentPort;

workerPort.addEventListener("alert_add", ()=>{
  console.info("alert listener callback");
})

workerPort.removeAllListener();

```

## removeEventListener

```TypeScript
removeEventListener(type: string, callback?: EventListener): void
```

移除Worker的事件监听。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.WorkerEventTarget.removeEventListener

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 需要移除的事件类型。 |
| callback | EventListener | No | 要移除的事件监听的回调函数。 |

**Example**

```TypeScript
// worker.ets
import { DedicatedWorkerGlobalScope, ErrorEvent, MessageEvents, worker } from '@kit.ArkTS';

const workerPort: DedicatedWorkerGlobalScope = worker.parentPort;

workerPort.addEventListener("alert", () => {
  console.info("alert listener callback");
})

workerPort.removeEventListener('alert');

```

