# getPss

## getPss

```TypeScript
function getPss() : bigint
```

Obtains the size of the physical memory actually used by the application process. This API is implemented by summing up the values of **Pss** and **SwapPss** in the **\/proc/{pid}/smaps_rollup** node. > **NOTE** > > Reading the **\/proc/{pid}/smaps_rollup** node is time-consuming. Therefore, you are advised not to use this API > in the main thread. You can use this API in the asynchronous thread started by calling > [@ohos.taskpool](../../apis-arkts/arkts-apis/arkts-taskpool.md#taskpool) or [@ohos.worker]@ohos.worker to avoid frame freezing.

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**返回值：**

| 类型 | 说明 |
| --- | --- |
| bigint | Size of the physical memory actually used by the application process, in KB. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

let pss: bigint = hidebug.getPss();
console.info(`pss = ${pss}`);

```

