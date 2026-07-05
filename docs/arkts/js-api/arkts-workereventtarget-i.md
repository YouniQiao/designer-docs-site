# WorkerEventTarget

用于管理Worker的监听事件。

**Since:** 9

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents,PostMessageOptions,MessageEvent,Priority,WorkerEventTarget,ThreadWorkerPriority,ThreadWorkerGlobalScope,DedicatedWorkerGlobalScope,ErrorEvent,Event,EventListener,WorkerOptions,EventTarget,WorkerEventListener } from '@kit.ArkTS';
```

## addEventListener

```TypeScript
addEventListener(type: string, listener: WorkerEventListener): void
```

向Worker线程的实例对象添加事件监听。该接口与on9+接口功能一致。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 监听的事件类型。 |
| listener | WorkerEventListener | Yes | listener 当指定类型的事件发生时调用的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |
| 10200005 | The called API is not supported in the worker thread. |

**Example**

```TypeScript
// worker.ets
import { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';

const workerPort: ThreadWorkerGlobalScope = worker.workerPort;

workerPort.onmessage = (event: MessageEvents) => {
  workerPort.addEventListener("alert", () => {
    console.info("alert listener callback");
  })
};

```

## dispatchEvent

```TypeScript
dispatchEvent(event: Event): boolean
```

分发定义在Worker线程的事件。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Event | Yes | 需要分发的事件。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |

**Example**

```TypeScript
// worker.ets
import { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';

const workerPort: ThreadWorkerGlobalScope = worker.workerPort;

workerPort.onmessage = (event: MessageEvents) => {
  workerPort.addEventListener("alert", () => {
    console.info("alert listener callback");
  });

  workerPort.dispatchEvent({type: "alert", timeStamp: 0}); // timeStamp is not supported yet.
};

```

## removeAllListener

```TypeScript
removeAllListener(): void
```

移除Worker线程的实例对象所有的事件监听。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |

**Example**

```TypeScript
// worker.ets
import { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';

const workerPort: ThreadWorkerGlobalScope = worker.workerPort;

workerPort.onmessage = (event: MessageEvents) => {
  workerPort.addEventListener("alert", () => {
    console.info("alert listener callback");
  });

  workerPort.removeAllListener();
};

```

## removeEventListener

```TypeScript
removeEventListener(type: string, callback?: WorkerEventListener): void
```

移除Worker线程实例对象中类型为type的事件监听。该接口与off9+接口功能一致。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 需要移除的事件类型。 |
| callback | WorkerEventListener | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |

**Example**

```TypeScript
// worker.ets
import { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';

const workerPort: ThreadWorkerGlobalScope = worker.workerPort;

workerPort.onmessage = (event: MessageEvents) => {
  workerPort.addEventListener("alert", () => {
    console.info("alert listener callback");
  });

  workerPort.removeEventListener("alert");
};

```

