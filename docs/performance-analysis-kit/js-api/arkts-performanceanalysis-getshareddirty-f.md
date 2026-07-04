# getSharedDirty

## Modules to Import

```TypeScript
import { hidebug } from '@ohos.hidebug';
```

## getSharedDirty

```TypeScript
function getSharedDirty() : bigint
```

Obtains the size of the shared dirty memory of a process. This API is implemented by reading the value of **Shared_Dirty** in the **\/proc/{pid}/smaps_rollup** node. > **NOTE** > > Reading the **\/proc/{pid}/smaps_rollup** node is time-consuming. Therefore, you are advised not to use this API > in the main thread. You can use this API in the asynchronous thread started by calling > [@ohos.taskpool](../../apis-arkts/arkts-apis/arkts-taskpool.md#taskpool) or [@ohos.worker](../../apis-arkts/arkts-apis/arkts-worker.md) to avoid frame freezing.

**Since:** 8

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Return value:**

| Type | Description |
| --- | --- |
| bigint | Size of the shared dirty memory of the process, in KB. |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

let sharedDirty: bigint = hidebug.getSharedDirty();
console.info(`sharedDirty = ${sharedDirty}`);

```

