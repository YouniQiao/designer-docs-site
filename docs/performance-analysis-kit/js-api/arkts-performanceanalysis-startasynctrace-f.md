# startAsyncTrace

## Modules to Import

```TypeScript
import { hiTraceMeter } from '@kit.PerformanceAnalysisKit';
```

## startAsyncTrace

```TypeScript
function startAsyncTrace(level: HiTraceOutputLevel, name: string, taskId: number, customCategory: string,
      customArgs?: string): void
```

Starts an asynchronous trace with the trace output level specified. If multiple trace tasks with the same name need to be performed at the same time or a trace needs to be performed multiple times concurrently, different task IDs must be specified in **startAsyncTrace**. If the trace tasks with the same name are not performed at the same time, the same taskId can be used. For details, see [finishAsyncTrace()](arkts-performanceanalysis-finishasynctrace-f.md#finishasynctrace-1).

**Since:** 19

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.HiviewDFX.HiTrace

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| level | HiTraceOutputLevel | Yes | Trace output level. |
| name | string | Yes | Name of the trace to start.<br>The maximum length of a trace record is 512 bytes. Theexcess part will be truncated. It is recommended that the total length of **name**, **customCategory**, and**customArgs** be less than or equal to 420 bytes. |
| taskId | number | Yes | Task ID.<br>It is used to distinguish multiple tasks with the same name. Ensure that thetask IDs of concurrently executed tasks with the same name are unique. |
| customCategory | string | Yes | Custom category name, which is used to collect asynchronous trace data of thesame type.<br>The maximum length of a trace record is 512 bytes. The excess part will be truncated. It isrecommended that the total length of **name**, **customCategory**, and **customArgs** be less than or equal to420 bytes. |
| customArgs | string | No | Custom key-value pair. The format is key=value. Multiple key-value pairs areseparated by commas (,). The default value is an empty string.<br>The maximum length of a trace record is 512bytes. The excess part will be truncated. It is recommended that the total length of **name**,**customCategory**, and **customArgs** be less than or equal to 420 bytes. |

**Example**

```TypeScript
// If the customCategory parameter is not required, pass in an empty string.
// If the customArgs parameter is not required, do not pass in this parameter or pass in an empty string.
const COMMERCIAL = hiTraceMeter.HiTraceOutputLevel.COMMERCIAL;
hiTraceMeter.startAsyncTrace(COMMERCIAL, "myTestFunc", 1, "", "");
hiTraceMeter.startAsyncTrace(COMMERCIAL, "myTestFunc", 2, "");
// Use commas (,) to separate multiple key-value pairs.
hiTraceMeter.startAsyncTrace(COMMERCIAL, "myTestFunc", 3, "categoryTest", "key1=value");
hiTraceMeter.startAsyncTrace(COMMERCIAL, "myTestFunc", 4, "categoryTest", "key1=value1,key2=value2");

```

