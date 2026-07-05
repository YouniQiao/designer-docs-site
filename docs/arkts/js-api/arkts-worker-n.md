# worker

JS跨线程通信工具。

**Since:** 7

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents,PostMessageOptions,MessageEvent,Priority,WorkerEventTarget,ThreadWorkerPriority,ThreadWorkerGlobalScope,DedicatedWorkerGlobalScope,ErrorEvent,Event,EventListener,WorkerOptions,EventTarget,WorkerEventListener } from '@kit.ArkTS';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| <!--DelRow-->[RestrictedWorker](arkts-worker-restrictedworker-c-sys.md) | RestrictedWorker类包含所有Worker功能。 |
| [ThreadWorker](arkts-worker-threadworker-c.md) | 使用以下方法前，需先构造ThreadWorker实例。ThreadWorker类继承WorkerEventTarget。 |
| [Worker](arkts-worker-worker-c.md) | Worker类包含所有Worker功能。 |

### Constants

| Name | Description |
| --- | --- |
| [parentPort](arkts-worker-con.md#parentPort) | Worker线程用于与宿主线程通信的对象。 |
| [workerPort](arkts-worker-con.md#workerPort) | Worker线程用于与宿主线程通信的对象。 |

