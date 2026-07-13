# startSyncTrace

## Modules to Import

```TypeScript
import { hiTraceMeter } from '@kit.PerformanceAnalysisKit';
```

## startSyncTrace

```TypeScript
function startSyncTrace(level: HiTraceOutputLevel, name: string, customArgs?: string): void
```

Starts a synchronous trace with the trace output level specified. For details, see
[finishSyncTrace()](arkts-performanceanalysis-finishsynctrace-f.md#finishsynctrace-1).

**Since:** 19

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.HiviewDFX.HiTrace

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| level | HiTraceOutputLevel | Yes | Trace output level. |
| name | string | Yes | Name of the trace to start.<br>The maximum length of a trace record is 512 bytes. Theexcess part will be truncated. It is recommended that the total length of **name** and **customArgs** be lessthan or equal to 420 bytes. |
| customArgs | string | No | Key-value pair. The format is key=value. Multiple key-value pairs are separated bycommas (,). The default value is an empty string.<br>The maximum length of a trace record is 512 bytes. Theexcess part will be truncated. It is recommended that the total length of **name** and **customArgs** be lessthan or equal to 420 bytes. |

**Example**

```TypeScript
const COMMERCIAL = hiTraceMeter.HiTraceOutputLevel.COMMERCIAL;
// If the customArgs parameter is not required, do not pass in this parameter or pass in an empty string.
hiTraceMeter.startSyncTrace(COMMERCIAL, "myTestFunc");
hiTraceMeter.startSyncTrace(COMMERCIAL, "myTestFunc", "");
// Use commas (,) to separate multiple key-value pairs.
hiTraceMeter.startSyncTrace(COMMERCIAL, "myTestFunc", "key=value");
hiTraceMeter.startSyncTrace(COMMERCIAL, "myTestFunc", "key1=value1,key2=value2");

```

