# RestrictedWorker

RestrictedWorker类包含所有Worker功能。

**Inheritance:** RestrictedWorkerextends: ThreadWorker.

**Since:** 11

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { MessageEvents,PostMessageOptions,MessageEvent,Priority,WorkerEventTarget,ThreadWorkerPriority,ThreadWorkerGlobalScope,DedicatedWorkerGlobalScope,ErrorEvent,Event,EventListener,WorkerOptions,EventTarget,WorkerEventListener } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor(scriptURL: string, options?: WorkerOptions)
```

创建一个worker实例。

**Since:** 11

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scriptURL | string | Yes | scriptURL Worker线程执行的脚本URL。 |
| options | WorkerOptions | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200003 | Worker initialization failure. |
| 10200007 | The worker file patch is invalid path. |

