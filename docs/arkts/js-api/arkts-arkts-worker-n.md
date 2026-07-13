# worker

JS cross-thread communication tool

**Since:** 7

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents, PostMessageOptions, MessageEvent, Priority, WorkerEventTarget, ThreadWorkerPriority, ThreadWorkerGlobalScope, DedicatedWorkerGlobalScope, ErrorEvent, Event, EventListener, WorkerOptions, EventTarget, WorkerEventListener } from '@kit.ArkTS';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [ThreadWorker](arkts-arkts-threadworker-c.md) | Before using the following APIs, you must create a ThreadWorker instance. The ThreadWorker class inherits fromWorkerEventTarget. |
| [Worker](arkts-arkts-worker-c.md) | The Worker class contains all Worker functions. |

<!--Del-->
### Classes（系统接口）

| Name | Description |
| --- | --- |
| [RestrictedWorker](arkts-arkts-restrictedworker-c-sys.md) | The RestrictedWorker class contains all Worker functions. |
<!--DelEnd-->

### Constants

| Name | Description |
| --- | --- |
| [parentPort](arkts-arkts-worker-con.md#parentport) | The object used by the worker thread to communicate with the host thread. |
| [workerPort](arkts-arkts-worker-con.md#workerport) | The object used by the worker thread to communicate with the host thread. |

