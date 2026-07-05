# EventListener

事件监听类用于处理事件。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.WorkerEventListener

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents,PostMessageOptions,MessageEvent,Priority,WorkerEventTarget,ThreadWorkerPriority,ThreadWorkerGlobalScope,DedicatedWorkerGlobalScope,ErrorEvent,Event,EventListener,WorkerOptions,EventTarget,WorkerEventListener } from '@kit.ArkTS';
```

## constructor

```TypeScript
(evt: Event): void | Promise<void>
```

指定要调用的回调函数。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.WorkerEventListener.(event:

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| evt | Event | Yes | evt evt 回调的事件类。 |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.Worker("entry/ets/workers/worker.ets");
workerInstance.addEventListener("alert", ()=>{
    console.info("alert listener callback");
})

```

