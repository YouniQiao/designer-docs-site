# setProcDumpInSharedOOM

## setProcDumpInSharedOOM

```TypeScript
function setProcDumpInSharedOOM(enable: boolean): void
```

Changes the dump heap snapshot from the thread-level to the process-level. > **NOTE** > > To dump a process-level heap snapshot, you must call this API and pass **true**. In addition, SharedHeap OOM must > occur. > > This API does not affect the heap snapshot dumped in other scenarios. For example, it does not affect the result > of [dumpJsRawHeapData]hidebug.dumpJsRawHeapData(needGC?: boolean). > > This API can be called multiple times in the application lifecycle, but only the last call takes effect.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | When SharedHeap OOM occurs in a process, the system dumps the heap snapshot of the  corresponding level based on the information recorded when the process calls the API for the last time in its  lifecycle. true: process level. false: thread level. The default value is false. |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

hidebug.setProcDumpInSharedOOM(true);

```

