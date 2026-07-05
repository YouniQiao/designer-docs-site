# setProcDumpInSharedOOM

## setProcDumpInSharedOOM

```TypeScript
function setProcDumpInSharedOOM(enable: boolean): void
```

Changes the dump heap snapshot from the thread-level to the process-level. > **NOTE** > > To dump a process-level heap snapshot, you must call this API and pass **true**. In addition, SharedHeap OOM must > occur. > > This API does not affect the heap snapshot dumped in other scenarios. For example, it does not affect the result > of [dumpJsRawHeapData]hidebug.dumpJsRawHeapData(needGC?: boolean). > > This API can be called multiple times in the application lifecycle, but only the last call takes effect.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | When SharedHeap OOM occurs in a process, the system dumps the heap snapshot of the  corresponding level based on the information recorded when the process calls the API for the last time in its  lifecycle. true: process level. false: thread level. The default value is false. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

hidebug.setProcDumpInSharedOOM(true);

```

