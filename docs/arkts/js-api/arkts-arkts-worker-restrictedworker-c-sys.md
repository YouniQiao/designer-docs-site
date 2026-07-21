# RestrictedWorker (System API)

The RestrictedWorker class contains all Worker functions.

**Inheritance/Implementation:** RestrictedWorker extends [ThreadWorker](arkts-arkts-worker-threadworker-c.md)

**Since:** 11

<!--Device-worker-class RestrictedWorker extends ThreadWorker--><!--Device-worker-class RestrictedWorker extends ThreadWorker-End-->

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { MessageEvents, PostMessageOptions, MessageEvent, Priority, WorkerEventTarget, ThreadWorkerPriority, ThreadWorkerGlobalScope, DedicatedWorkerGlobalScope, ErrorEvent, Event, EventListener, WorkerOptions, EventTarget, WorkerEventListener } from '@kit.ArkTS';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(scriptURL: string, options?: WorkerOptions)
```

Creates a worker instance

**Since:** 11

<!--Device-RestrictedWorker-constructor(scriptURL: string, options?: WorkerOptions)--><!--Device-RestrictedWorker-constructor(scriptURL: string, options?: WorkerOptions)-End-->

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scriptURL | string | Yes | scriptURL URL of the script to be executed by the worker |
| options | [WorkerOptions](arkts-arkts-worker-workeroptions-i.md) | No | Options that can be set for the worker |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200003](../errorcode-utils.md#10200003-failed-to-initialize-the-worker-instance) | Worker initialization failure. |
| [10200007](../errorcode-utils.md#10200007-abnormal-worker-file-path) | The worker file patch is invalid path. |

