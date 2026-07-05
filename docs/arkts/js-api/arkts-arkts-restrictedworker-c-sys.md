# RestrictedWorker (System API)

The RestrictedWorker class contains all Worker functions.

**Inheritance/Implementation:** RestrictedWorker extends [ThreadWorker](arkts-arkts-threadworker-c.md#threadworker)

**Since:** 11

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { MessageEvents, PostMessageOptions, MessageEvent, Priority, WorkerEventTarget, ThreadWorkerPriority, ThreadWorkerGlobalScope, DedicatedWorkerGlobalScope, ErrorEvent, Event, EventListener, WorkerOptions, EventTarget, WorkerEventListener } from '@ohos.worker';
```

## constructor

```TypeScript
constructor(scriptURL: string, options?: WorkerOptions)
```

Creates a worker instance

**Since:** 11

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scriptURL | string | Yes | scriptURL URL of the script to be executed by the worker |
| options | WorkerOptions | No | Options that can be set for the worker |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200003](../errorcode-utils.md#10200003-failed-to-initialize-the-worker-instance) | Worker initialization failure. |
| [10200007](../errorcode-utils.md#10200007-abnormal-worker-file-path) | The worker file patch is invalid path. |

